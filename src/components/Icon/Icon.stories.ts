import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Icon from "./Icon.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8026-1509";

const meta = {
  title: "Components/Icon",
  component: Icon,
  decorators: [
    () => ({
      template:
        '<div style="box-sizing:border-box;width:100%;min-height:120px;padding:var(--scaler-24);display:flex;align-items:center;justify-content:center;background:var(--surface-default-body);"><story /></div>',
    }),
  ],
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Kaizen `Icon` — Figma `icon` (8026:1509). Property **`size`**: `small` | `default` | `lg` | `xl` (layer 16 / 24 / 32 / 40 px → tokeni `icon-size/sm`, `icon-size/default`, `icon-size/lg`, `icon-size/xlg` u `tokens.system-fixed.css`, vidi CLAUDE.md).\n\n" +
          "Boja: `icon/default/default` → `var(--icon-default-default)`.\n\n" +
          "Preview: `var(--surface-default-body)`.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: ["activity", "chevron-down", "chevron-up", "document"],
    },
    size: {
      control: "select",
      options: ["small", "default", "lg", "xl"],
      description: "Figma component property `size` (variants `size=small` … `size=xl`).",
    },
  },
  args: {
    name: "activity",
    size: "small",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display:flex;align-items:flex-end;gap:24px;">
        <Icon name="activity" size="small" />
        <Icon name="activity" size="default" />
        <Icon name="activity" size="lg" />
        <Icon name="activity" size="xl" />
      </div>
    `,
  }),
};
