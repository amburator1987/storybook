/**
 * Foundation / Typography
 * Figma frame: 8285:120  "Frame 2578"  1264×3550px
 *
 * Full type scale (H1–H6, Paragraph Large/Default/Small/Xtra Small, Caption, Label).
 * Every row is bound to the REAL Kaizen CSS custom properties (not hardcoded values) —
 * font-family, font-weight, font-size, line-height, letter-spacing and color all come
 * from tokens already built by Style Dictionary (tokens.responsive.css, tokens.alias.*.css,
 * tokens.mapped.*.css). Use the Storybook toolbar (Brand / Theme) above the canvas to swap
 * brand and theme live — this page re-renders instantly since it's pure CSS var() cascading,
 * no JS needed.
 */

import type { Meta, StoryObj } from "@storybook/vue3-vite";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8285-120";

const meta: Meta = {
  title: "Foundation/Typography",
  parameters: {
    layout: "fullscreen",
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

const LOREM =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// Figma node ids — H1..H6: 8285:122/125/128/131/134/137, Paragraphs: 140/143/146/149, Caption: 152, Label: 155
const SCALE = [
  { label: "H1", key: "h1", weightVar: "--font-weight-secondary", weightName: "Semibold", colorVar: "--text-default-headings", gap: 32 },
  { label: "H2", key: "h2", weightVar: "--font-weight-secondary", weightName: "Semibold", colorVar: "--text-default-headings", gap: 32 },
  { label: "H3", key: "h3", weightVar: "--font-weight-secondary", weightName: "Semibold", colorVar: "--text-default-headings", gap: 32 },
  { label: "H4", key: "h4", weightVar: "--font-weight-secondary", weightName: "Semibold", colorVar: "--text-default-headings", gap: 32 },
  { label: "H5", key: "h5", weightVar: "--font-weight-primary", weightName: "Regular", colorVar: "--text-default-headings", gap: 32 },
  { label: "H6", key: "h6", weightVar: "--font-weight-primary", weightName: "Regular", colorVar: "--text-default-headings", gap: 32 },
  { label: "Paragraph Large", key: "paragraph-lg", weightVar: "--font-weight-primary", weightName: "Regular", colorVar: "--text-default-body", gap: 32 },
  { label: "Paragraph Default", key: "paragraph-default", weightVar: "--font-weight-primary", weightName: "Regular", colorVar: "--text-default-body", gap: 32 },
  { label: "Paragraph Small", key: "paragraph-sm", weightVar: "--font-weight-primary", weightName: "Regular", colorVar: "--text-default-body", gap: 32 },
  { label: "Paragraph Xtra Small", key: "paragraph-xs", weightVar: "--font-weight-primary", weightName: "Regular", colorVar: "--text-default-body", gap: 32 },
  { label: "Caption", key: "caption", weightVar: "--font-weight-primary", weightName: "Regular", colorVar: "--text-default-body", gap: 8 },
  { label: "Label", key: "label", weightVar: "--font-weight-primary", weightName: "Regular", colorVar: "--text-default-body", gap: 8 },
];

const CHIP =
  "display:inline-flex;align-items:center;padding:2px 8px;border-radius:4px;background:#1c2530;border:1px solid #303c49;font-family:ui-monospace,'SF Mono',Consolas,monospace;font-size:11px;line-height:16px;color:#9ba3af;white-space:nowrap;";

const rows = SCALE.map((r) => {
  const sizeVar = `--typography-font-size-${r.key}`;
  const lineVar = `--typography-line-height-${r.key}`;
  const trackVar = `--typography-letter-spacing-${r.key}`;
  return {
    label: r.label,
    gap: r.gap,
    tokens: [
      "--font-family-primary",
      `${r.weightVar} (${r.weightName})`,
      sizeVar,
      lineVar,
      trackVar,
      r.colorVar,
    ],
    style: `font-family:var(--font-family-primary);font-weight:var(${r.weightVar});font-size:var(${sizeVar});line-height:var(${lineVar});letter-spacing:var(${trackVar});color:var(${r.colorVar});`,
  };
});

export const Default: Story = {
  name: "Typography",
  render: () => ({
    setup() {
      return { rows, LOREM };
    },
    template: `
<div style="background:var(--surface-default-body);min-height:100vh;font-family:var(--font-family-primary);">
  <div style="max-width:1264px;margin:0 auto;padding:56px 24px;box-sizing:border-box;">

    <!-- Intro -->
    <div style="margin-bottom:56px;">
      <p style="margin:0 0 8px 0;font-family:var(--font-family-primary);font-weight:var(--font-weight-secondary);font-size:32px;line-height:40px;color:var(--text-default-headings);">Typography</p>
      <p style="margin:0;font-family:var(--font-family-primary);font-weight:var(--font-weight-primary);font-size:14px;line-height:20px;color:var(--text-default-body);max-width:640px;">
        Full type scale — every row below renders with the real Kaizen tokens (chips under each label), not hardcoded values.
        Use the <strong>Brand</strong> and <strong>Theme</strong> selectors in the Storybook toolbar above to swap
        <code style="${CHIP}">--font-family-primary</code> (Inter ↔ Roboto) and the color/theme tokens live — this page
        re-renders instantly since everything below is plain CSS var() cascading.
      </p>
    </div>

    <!-- Scale -->
    <div style="display:flex;flex-direction:column;width:100%;">
      <div v-for="(row, i) in rows" :key="row.label" :style="{ display:'flex', flexDirection:'column', gap: row.gap + 'px', width:'100%', paddingBottom: '56px', marginBottom: i < rows.length - 1 ? '0' : '0' }">
        <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;">
          <span v-for="t in row.tokens" :key="t" style="${CHIP}">{{ t }}</span>
        </div>
        <p :style="row.style + 'margin:0;'">{{ row.label }}</p>
        <p :style="row.style + 'margin:0;word-break:break-word;'">{{ LOREM }}</p>
      </div>
    </div>

  </div>
</div>
    `,
  }),
};
