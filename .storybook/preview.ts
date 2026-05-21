import type { Preview } from "@storybook/vue3-vite";
import type { ViewportMap } from "storybook/viewport";
import "../src/styles/tokens.primitive.css";
import "../src/styles/tokens.system-fixed.css";
import "../src/styles/tokens.responsive.css";
import "../src/styles/reset.css";
import "../src/styles/fonts.css";

export const globalTypes = {
  brand: {
    name: "Brand",
    description: "Design system brand",
    defaultValue: "mozzart",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "mozzart", title: "Mozzart" },
        { value: "germania", title: "Germania" },
      ],
    },
  },
  theme: {
    name: "Theme",
    description: "Light or dark theme",
    defaultValue: "dark",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

/**
 * Sloj: primitive (statički) → alias (brend) → mapped (tema) → fixed + responsive (statički).
 * `data-brand` / `data-theme` samo označavaju izbor; sadržaj `tokens.alias.*` i
 * `tokens.mapped.*` ubacujemo u dva `style` taga (raw) da nema Vite CSS keš problema.
 */
const ALIAS_STYLE_ID = "kaizen-alias-token-vars";
const MAPPED_STYLE_ID = "kaizen-mapped-token-vars";

const aliasCssRaw = import.meta.glob<string>("../src/styles/tokens.alias.*.css", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const mappedCssRaw = import.meta.glob<string>("../src/styles/tokens.mapped.*.css", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

let activeLayerKey: string | null = null;

function applyAliasAndMappedLayers(brand: string, theme: string) {
  const aliasKey = `../src/styles/tokens.alias.${brand}.css`;
  const mappedKey = `../src/styles/tokens.mapped.${theme}.css`;
  const aliasCss = aliasCssRaw[aliasKey];
  const mappedCss = mappedCssRaw[mappedKey];
  if (typeof aliasCss !== "string") {
    console.warn(`[Storybook] Missing alias CSS: ${aliasKey}`);
    return;
  }
  if (typeof mappedCss !== "string") {
    console.warn(`[Storybook] Missing mapped CSS: ${mappedKey}`);
    return;
  }

  let aliasEl = document.getElementById(ALIAS_STYLE_ID);
  if (!aliasEl) {
    aliasEl = document.createElement("style");
    aliasEl.id = ALIAS_STYLE_ID;
    document.head.appendChild(aliasEl);
  }
  aliasEl.textContent = aliasCss;

  let mappedEl = document.getElementById(MAPPED_STYLE_ID);
  if (!mappedEl) {
    mappedEl = document.createElement("style");
    mappedEl.id = MAPPED_STYLE_ID;
    document.head.appendChild(mappedEl);
  }
  mappedEl.textContent = mappedCss;
}

function injectCanvasOverride() {
  const id = "kaizen-canvas-override";
  if (document.getElementById(id)) return;
  const el = document.createElement("style");
  el.id = id;
  el.textContent =
    ".sb-show-main { background-color: var(--neutral-950); }";
  document.head.appendChild(el);
}

const withBrandTheme = (storyFn: any, context: any) => {
  const brand = context.globals.brand ?? "mozzart";
  const theme = context.globals.theme;

  document.documentElement.setAttribute(
    "data-theme",
    theme === "dark" ? "dark" : "light"
  );

  document.documentElement.setAttribute("data-brand", brand);

  injectCanvasOverride();

  return storyFn();
};

const preview: Preview = {
  initialGlobals: {
    viewport: { value: "desktop", isRotated: false },
  },
  loaders: [
    async (context) => {
      const brand = context.globals.brand ?? "mozzart";
      const theme = context.globals.theme ?? "dark";
      const layerKey = `${brand}|${theme}`;

      if (activeLayerKey !== layerKey) {
        applyAliasAndMappedLayers(brand, theme);
        activeLayerKey = layerKey;
      }

      return {};
    },
  ],
  decorators: [withBrandTheme],
  parameters: {
    backgrounds: { disable: true },

    layout: "centered",

    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    viewport: {
      options: {
        mobile: {
          name: "Mobile (390px)",
          styles: { width: "390px", height: "100%" },
          type: "mobile",
        },
        tablet: {
          name: "Tablet (768px)",
          styles: { width: "768px", height: "100%" },
          type: "tablet",
        },
        desktop: {
          name: "Desktop (1280px)",
          styles: { width: "1280px", height: "100%" },
          type: "desktop",
        },
        "desktop-large": {
          name: "Desktop Large (1920px)",
          styles: { width: "1920px", height: "100%" },
          type: "desktop",
        },
      } satisfies ViewportMap,
    },

    options: {
      storySort: {
        method: "alphabetical",
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
