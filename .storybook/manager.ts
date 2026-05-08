import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Kaizen Storybook",
    brandUrl: "/",
    appBg: "#0b1220",
    appContentBg: "#0f172a",
    barBg: "#0b1220",
    barTextColor: "#cbd5e1",
    barSelectedColor: "#f59e0b",
    panelBg: "#0f172a",
    panelBorder: "#1f2937",
    inputBg: "#0b1220",
    inputBorder: "#1f2937",
    inputTextColor: "#e2e8f0",
    textColor: "#e2e8f0",
    textInverseColor: "#0b1220",
    colorPrimary: "#f59e0b",
    colorSecondary: "#fbbf24",
  }),
  sidebar: {
    showRoots: true,
  },
});

