/**
 * Foundation / Elevation
 * Figma frame: 8417:1149  "Frame 13"
 *
 * Three elevation levels — None (Small), Elevation-01 (Medium), Elevation-02 (Large) —
 * each bound to the real Kaizen box-shadow tokens from tokens.system-fixed.css:
 * --elevation-{level}-position-x/-position-y/-blur/-spread/-shade.
 */

import type { Meta, StoryObj } from "@storybook/vue3-vite";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8417-1149";

const meta: Meta = {
  title: "Foundation/Elevation",
  parameters: {
    layout: "fullscreen",
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

const CHIP =
  "display:inline-flex;align-items:center;padding:2px 8px;border-radius:4px;background:#1c2530;border:1px solid #303c49;font-family:ui-monospace,'SF Mono',Consolas,monospace;font-size:11px;line-height:16px;color:#9ba3af;white-space:nowrap;";

const LEVELS = [
  { label: "Small", token: "none" },
  { label: "Medium", token: "elevation-01" },
  { label: "Large", token: "elevation-02" },
];

const levels = LEVELS.map((l) => {
  const xVar = `--elevation-${l.token}-position-x`;
  const yVar = `--elevation-${l.token}-position-y`;
  const blurVar = `--elevation-${l.token}-blur`;
  const spreadVar = `--elevation-${l.token}-spread`;
  const shadeVar = `--elevation-${l.token}-shade`;
  return {
    label: l.label,
    token: l.token,
    tokens: [xVar, yVar, blurVar, spreadVar, shadeVar, "--border-width-2", "--violet-200"],
    circleStyle: `background:var(--surface-primary-default);border:var(--border-width-2, 2px) solid var(--violet-200, #825acb);border-radius:var(--border-radius-round, 9999px);width:147px;height:147px;box-shadow:var(${xVar}) var(${yVar}) var(${blurVar}) var(${spreadVar}) var(${shadeVar});`,
  };
});

export const Default: Story = {
  name: "Elevation",
  render: () => ({
    setup() {
      return { levels };
    },
    template: `
<div style="background:var(--surface-default-body);min-height:100vh;font-family:var(--font-family-primary);">
  <div style="max-width:1264px;margin:0 auto;padding:56px 24px;box-sizing:border-box;">

    <!-- Intro -->
    <div style="margin-bottom:56px;">
      <p style="margin:0 0 8px 0;font-family:var(--font-family-primary);font-weight:var(--font-weight-secondary);font-size:32px;line-height:40px;color:var(--text-default-headings);">Elevation</p>
      <p style="margin:0;font-family:var(--font-family-primary);font-weight:var(--font-weight-primary);font-size:14px;line-height:20px;color:var(--text-default-body);max-width:640px;">
        Three elevation levels, each a box-shadow built from 5 tokens (position-x, position-y, blur, spread, shade)
        from <code style="${CHIP}">tokens.system-fixed.css</code>. Elevation itself doesn't change with Brand/Theme,
        but the circle fill (<code style="${CHIP}">--surface-primary-default</code>) does — use the Storybook
        toolbar to confirm.
      </p>
    </div>

    <!-- Levels -->
    <div style="display:flex;gap:64px;align-items:flex-start;justify-content:center;flex-wrap:wrap;padding:40px 0;">
      <div v-for="lvl in levels" :key="lvl.label" style="display:flex;flex-direction:column;align-items:center;gap:24px;">
        <p style="margin:0;font-family:var(--font-family-primary);font-weight:var(--font-weight-primary);font-size:20px;line-height:24px;color:var(--foundation-white, #ffffff);text-align:center;">{{ lvl.label }}</p>
        <div :style="lvl.circleStyle"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <span style="${CHIP}">elevation/{{ lvl.token }}</span>
          <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;max-width:220px;">
            <span v-for="t in lvl.tokens" :key="t" style="${CHIP}">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
    `,
  }),
};
