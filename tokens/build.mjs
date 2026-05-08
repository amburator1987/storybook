import fs from "node:fs";
import path from "node:path";
import StyleDictionary from "style-dictionary";

const tokensJsonDir = path.resolve("tokens/json");
const tempDir = path.resolve("tokens/temp");
const outDir = path.resolve("src/styles");

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(tempDir, { recursive: true });

const toKebab = (s) =>
  String(s)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

// Strip Figma metadata that Style Dictionary may otherwise stumble on,
// while keeping $value / $type / references intact.
function preprocessTokens(node) {
  if (node === null || typeof node !== "object" || Array.isArray(node)) return node;

  if ("$value" in node && "$type" in node) {
    const out = {};
    for (const [k, v] of Object.entries(node)) {
      if (k === "$extensions") continue;
      out[k] = v;
    }
    return out;
  }

  const out = {};
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith("$")) continue;
    out[k] = preprocessTokens(v);
  }
  return out;
}

function loadCollectionFile(rel) {
  return preprocessTokens(readJson(path.join(tokensJsonDir, rel)));
}

/**
 * Figma export često upisuje završnu vrednost kao literal u `$value`, a pravu vezu drži u
 * `$extensions.com.figma.aliasData.targetVariableName` (npr. `violet/400` u primitive,
 * `primary/400` u alias). Style Dictionary inače emituje literal i brend/tema se ne
 * lančaju. Zamenjujemo literal DTCG referencom `{violet.400}` / `{primary.400}` pre
 * `preprocessTokens` (koji skida `$extensions`).
 */
function rewriteFigmaColorLiteralsToDtcgReferences(node) {
  if (node === null || typeof node !== "object" || Array.isArray(node)) return;

  if ("$value" in node && "$type" in node) {
    const aliasData = node.$extensions?.["com.figma.aliasData"];
    const targetName = aliasData?.targetVariableName;
    if (
      targetName &&
      typeof targetName === "string" &&
      node.$type === "color" &&
      typeof node.$value === "object" &&
      node.$value !== null &&
      !("$value" in node.$value)
    ) {
      const refPath = targetName.replace(/\//g, ".");
      node.$value = `{${refPath}}`;
    }
    return;
  }

  for (const k of Object.keys(node)) {
    if (k.startsWith("$")) continue;
    rewriteFigmaColorLiteralsToDtcgReferences(node[k]);
  }
}

function loadCoreAliasBrandFile(brandFile) {
  const rel = path.join("core-alias", brandFile);
  const raw = readJson(path.join(tokensJsonDir, rel));
  rewriteFigmaColorLiteralsToDtcgReferences(raw);
  return preprocessTokens(raw);
}

function loadCoreMappedThemeFile(themeFile) {
  const rel = path.join("core-mapped", themeFile);
  const raw = readJson(path.join(tokensJsonDir, rel));
  rewriteFigmaColorLiteralsToDtcgReferences(raw);
  return preprocessTokens(raw);
}

function writeTempFile(name, obj) {
  const p = path.join(tempDir, `${name}.json`);
  fs.writeFileSync(p, JSON.stringify(obj, null, 2));
  return p;
}

/**
 * Figma / alias font-weight names → numeric CSS `font-weight` values.
 * Mozzart (Proxima): SemiBold → 600. Germania (Roboto): Figma string "Semi Bold" → 600 (isti semanticki kao SemiBold).
 * Takodje: Semi-Bold, razmaci → normalizacija ispod.
 */
const FONT_WEIGHT_STRING_MAP = new Map(
  Object.entries({
    regular: 400,
    semibold: 600,
    "semi bold": 600,
    bold: 700,
  }).map(([k, v]) => [k.replace(/\s+/g, "").toLowerCase(), v])
);

function normalizeFontWeightKey(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/-/g, "");
}

function mapFontWeightStringToNumber(value) {
  if (typeof value !== "string") return null;
  const n = FONT_WEIGHT_STRING_MAP.get(normalizeFontWeightKey(value));
  return n === undefined ? null : n;
}

function isFontWeightTokenPath(path) {
  if (!Array.isArray(path) || path.length === 0) return false;
  return path.some((p) => String(p).toLowerCase().includes("weight"));
}

// String font-weight labels (Regular, SemiBold, Bold, Semi Bold) → 400 / 600 / 700 for CSS.
StyleDictionary.registerTransform({
  name: "kaizen/font-weight-string-to-number",
  type: "value",
  transitive: true,
  filter: (token) => {
    const t = token.$type ?? token.type;
    if (t !== "string") return false;
    if (!isFontWeightTokenPath(token.path)) return false;
    const v = token.$value !== undefined ? token.$value : token.value;
    return mapFontWeightStringToNumber(v) !== null;
  },
  transform: (token) => {
    const v = token.$value !== undefined ? token.$value : token.value;
    return mapFontWeightStringToNumber(v);
  },
});

// Number tokens come from JSON unit-less; render them as pixels.
// We ONLY add a unit; the numeric value itself is read verbatim from JSON.
StyleDictionary.registerTransform({
  name: "kaizen/number-to-px",
  type: "value",
  transitive: true,
  filter: (token) => {
    const t = token.$type ?? token.type;
    return t === "number" || t === "dimension";
  },
  transform: (token) => {
    const v = token.$value !== undefined ? token.$value : token.value;
    if (typeof v === "number") return `${v}px`;
    if (typeof v === "string") {
      const trimmed = v.trim();
      if (trimmed === "") return v;
      const num = Number(trimmed);
      if (!Number.isNaN(num)) return `${num}px`;
    }
    return v;
  },
});

// CSS variable name = kebab-case path, no prefix.
StyleDictionary.registerTransform({
  name: "kaizen/name-path",
  type: "name",
  transform: (token) => token.path.map(toKebab).join("-"),
});

// Order matters: value transforms first, name transform last.
const cssTransforms = [
  "color/css", // built-in: handles DTCG color objects -> hex/rgba
  "kaizen/font-weight-string-to-number",
  "kaizen/number-to-px",
  "kaizen/name-path",
];

async function runStyleDictionary({
  sources,
  include = [],
  destination,
  selector = ":root",
  outputReferences = false,
}) {
  const sd = new StyleDictionary({
    source: sources,
    include,
    usesDtcg: true,
    log: { verbosity: "default", warnings: "warn" },
    platforms: {
      css: {
        transforms: cssTransforms,
        buildPath: outDir + path.sep,
        files: [
          {
            destination,
            format: "css/variables",
            options: {
              selector,
              outputReferences,
            },
            // Only emit tokens that originate from `source` files; tokens that
            // come from `include` (e.g. core-primitive when building only
            // system-fixed) are used for reference resolution but not output.
            filter: (token) => token.isSource === true,
          },
        ],
      },
    },
  });

  const r = sd.init?.();
  if (r && typeof r.then === "function") await r;

  if (typeof sd.buildPlatform === "function") {
    await sd.buildPlatform("css");
  } else if (typeof sd.buildAllPlatforms === "function") {
    await sd.buildAllPlatforms();
  }

  const outPath = path.join(outDir, destination);
  if (!fs.existsSync(outPath)) {
    throw new Error(`Style Dictionary did not produce expected file: ${outPath}`);
  }
}

function loadCorePrimitiveWithScalerAlias() {
  const primitive = loadCollectionFile(path.join("core-primitive", "Mode 1.json"));
  // system-fixed/elevation tokens reference `{scaler.X}`, while core-primitive
  // exposes those values under `scale.X`. Mirror them so refs resolve cleanly.
  if (primitive && typeof primitive === "object" && primitive.scale && !primitive.scaler) {
    primitive.scaler = primitive.scale;
  }
  return primitive;
}

/**
 * Slojevi (red učitavanja u aplikaciji / Storybook-u):
 * 1. `tokens.primitive.css` — core-primitive
 * 2. `tokens.alias.{mozzart|germania}.css` — core-alias (brend)
 * 3. `tokens.mapped.{dark|light}.css` — core-mapped (tema, brend-agnostično: `outputReferences` → var(--…))
 * 4. `tokens.system-fixed.css` + `tokens.responsive.css`
 *
 * Za SD graf pri mapped build-u u `include` ide canonical Mozzart alias + primitive; izlaz
 * i dalje samo mapped tokeni sa `var(--primary-400)` itd., pa runtime bira alias fajl.
 */
function writeAliasTempForBrand(brandFile, slug) {
  const alias = loadCoreAliasBrandFile(brandFile);
  if (alias && typeof alias === "object" && "foundation" in alias) {
    delete alias.foundation;
  }
  return writeTempFile(`core-alias-${slug}`, alias);
}

async function buildPrimitiveCss(primitivePath) {
  await runStyleDictionary({
    sources: [primitivePath],
    include: [],
    destination: "tokens.primitive.css",
  });
  console.log("✔ Built tokens.primitive.css");
}

async function buildAliasCss({ aliasPath, primitivePath, brandKey }) {
  await runStyleDictionary({
    sources: [aliasPath],
    include: [primitivePath],
    destination: `tokens.alias.${brandKey}.css`,
  });
  console.log(`✔ Built tokens.alias.${brandKey}.css`);
}

async function buildMappedCss({ mappedPath, primitivePath, aliasCanonicalPath, theme }) {
  await runStyleDictionary({
    sources: [mappedPath],
    include: [primitivePath, aliasCanonicalPath],
    destination: `tokens.mapped.${theme}.css`,
    outputReferences: true,
  });
  console.log(`✔ Built tokens.mapped.${theme}.css`);
}

async function buildSystemFixed() {
  // core-primitive is required to resolve `{scaler.X}` references inside
  // system-fixed elevation tokens, but only system-fixed tokens go to the
  // output file (everything else is filtered out below).
  const primitive = loadCorePrimitiveWithScalerAlias();
  const fixed = loadCollectionFile(path.join("system-fixed", "Value.json"));

  const primitivePath = writeTempFile("core-primitive", primitive);
  const fixedPath = writeTempFile("system-fixed", fixed);

  const destination = "tokens.system-fixed.css";
  await runStyleDictionary({
    sources: [fixedPath],
    include: [primitivePath],
    destination,
  });
  console.log(`✔ Built ${destination}`);
}

function extractVarLines(cssText) {
  return cssText
    .split("\n")
    .filter((l) => /^\s+--[a-z0-9-]/i.test(l))
    .join("\n");
}

async function buildResponsive() {
  // Responsive JSON files live in `tokens/json/system-responsive/`.
  const breakpoints = [
    { key: "desktop", file: "dekstop.json" },
    { key: "tablet", file: "tablet.json" },
    { key: "mobile", file: "mobile.json" },
    { key: "desktopLarge", file: "desktop-large.json" },
  ];

  const screenSizes = {};
  const blocks = {};

  // Include primitive so `{scaler.*}` references resolve (scaler alias is added in loadCorePrimitiveWithScalerAlias()).
  const primitive = loadCorePrimitiveWithScalerAlias();
  const primitivePath = writeTempFile("core-primitive", primitive);

  for (const bp of breakpoints) {
    const data = loadCollectionFile(path.join("system-responsive", bp.file));
    const screenValue = data?.screens?.["screen-size"]?.$value;
    if (typeof screenValue !== "string") {
      throw new Error(
        `Missing screens.screen-size in system-responsive/${bp.file} (got ${screenValue})`
      );
    }
    screenSizes[bp.key] = screenValue;

    const tempPath = writeTempFile(`system-responsive-${bp.key}`, data);
    const dest = `__responsive_${bp.key}.css`;
    await runStyleDictionary({ sources: [tempPath], include: [primitivePath], destination: dest });

    const cssText = fs.readFileSync(path.join(outDir, dest), "utf8");
    blocks[bp.key] = extractVarLines(cssText);

    fs.unlinkSync(path.join(outDir, dest));
  }

  const indent = (text) =>
    text
      .split("\n")
      .map((l) => (l.length ? `  ${l}` : l))
      .join("\n");

  const out =
    `/**\n` +
    ` * Auto-generated system-responsive tokens.\n` +
    ` * Desktop values in :root; other breakpoints override via @media queries.\n` +
    ` * Breakpoint thresholds come from screens.screen-size in each JSON file.\n` +
    ` */\n\n` +
    `:root {\n${blocks.desktop}\n}\n\n` +
    `@media (max-width: ${screenSizes.tablet}) {\n  :root {\n${indent(blocks.tablet)}\n  }\n}\n\n` +
    `@media (max-width: ${screenSizes.mobile}) {\n  :root {\n${indent(blocks.mobile)}\n  }\n}\n\n` +
    `@media (min-width: ${screenSizes.desktopLarge}) {\n  :root {\n${indent(blocks.desktopLarge)}\n  }\n}\n`;

  const dest = "tokens.responsive.css";
  fs.writeFileSync(path.join(outDir, dest), out);
  console.log(`✔ Built ${dest}`);
}

function generateTypeDefinitions() {
  try {
    const referenceFiles = [
      "tokens.primitive.css",
      "tokens.alias.mozzart.css",
      "tokens.alias.germania.css",
      "tokens.mapped.dark.css",
      "tokens.mapped.light.css",
      "tokens.system-fixed.css",
      "tokens.responsive.css",
    ];
    const vars = [];
    for (const f of referenceFiles) {
      const css = fs.readFileSync(path.join(outDir, f), "utf8");
      for (const m of css.matchAll(/--([a-z0-9-]+):/gi)) {
        vars.push(`--${m[1]}`);
      }
    }
    const unique = Array.from(new Set(vars));
    const dts =
      unique.length === 0
        ? `export type KZNToken = string;\n`
        : `export type KZNToken = ${unique.map((v) => `'${v}'`).join(" | ")};\n`;
    fs.writeFileSync(path.join(outDir, "tokens.d.ts"), dts);
    console.log("✔ Generated tokens.d.ts");
  } catch (err) {
    console.warn("Could not generate TypeScript definitions:", err.message);
  }
}

async function build() {
  const primitiveData = loadCorePrimitiveWithScalerAlias();
  const primitivePath = writeTempFile("core-primitive", primitiveData);

  await buildPrimitiveCss(primitivePath);

  const brandDefs = [
    { file: "Mozzart.json", key: "mozzart" },
    { file: "Germania.json", key: "germania" },
  ];

  const aliasPaths = {};
  for (const b of brandDefs) {
    aliasPaths[b.key] = writeAliasTempForBrand(b.file, b.key);
    await buildAliasCss({
      aliasPath: aliasPaths[b.key],
      primitivePath,
      brandKey: b.key,
    });
  }

  const aliasCanonicalPath = aliasPaths.mozzart;

  const themeFiles = [
    { theme: "dark", file: "dark.json" },
    { theme: "light", file: "light.json" },
  ];
  for (const { theme, file } of themeFiles) {
    const mappedData = loadCoreMappedThemeFile(file);
    const mappedPath = writeTempFile(`core-mapped-${theme}`, mappedData);
    await buildMappedCss({
      mappedPath,
      primitivePath,
      aliasCanonicalPath,
      theme,
    });
  }

  await buildSystemFixed();
  await buildResponsive();
  generateTypeDefinitions();

  // Ukloni zastarele kombinovane brend×tema fajlove ako postoje.
  for (const legacy of [
    "tokens.mozzart.dark.css",
    "tokens.mozzart.light.css",
    "tokens.germania.dark.css",
    "tokens.germania.light.css",
  ]) {
    try {
      fs.unlinkSync(path.join(outDir, legacy));
    } catch {
      /* */
    }
  }

  // Clean up temp files (best-effort).
  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
  } catch (err) {
    console.warn("Could not clean up temp dir:", err.message);
  }
}

await build().catch((err) => {
  console.error("Token build failed:", err);
  process.exit(1);
});
