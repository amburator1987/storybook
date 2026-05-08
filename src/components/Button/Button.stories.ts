import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";

const FIGMA_BUTTON_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8091-1786";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Kaizen Button — from Figma component set `button` (node 8091:1786).\n\n" +
          `[Open in Figma](${FIGMA_BUTTON_URL})`,
      },
    },
    design: {
      type: "figma",
      url: FIGMA_BUTTON_URL,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "brand", "secondary"],
      description: "Figma property `type`.",
    },
    size: {
      control: "select",
      options: ["sm"],
      description: "Figma property `size` (only `sm` in file).",
    },
    disabled: { control: "boolean" },
    pressed: {
      control: "boolean",
      description: "Static pressed overlay for docs; real use relies on `:active`.",
    },
    hideIcon: { control: "boolean" },
    iconName: {
      control: "select",
      options: ["chevron-down", "chevron-up", "document", "activity"],
      description: "Glyph for built-in `Icon` (overridable via `icon` slot).",
    },
    iconSize: {
      control: "select",
      options: ["small", "default", "lg", "xl"],
      description: "Figma `Icon` property `size` (passed to `<Icon :size=\"…\" />`).",
    },
    demoFocus: {
      control: "boolean",
      description:
        "Applies the same focus ring as `:focus-visible` (for docs/screenshots only).",
      table: { category: "Storybook" },
    },
  },
  args: {
    variant: "primary",
    size: "sm",
    disabled: false,
    pressed: false,
    hideIcon: false,
    iconName: "chevron-down",
    iconSize: "small",
    demoFocus: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Brand: Story = {
  args: { variant: "brand" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Disabled: Story = {
  args: { variant: "primary", disabled: true },
};

export const Pressed: Story = {
  args: { variant: "primary", pressed: true },
};

/** All variants with the focus ring visible (simulated via `.kzn-c-button--demo-focus`, not real focus). */
export const Focus: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Uses `demoFocus` so the `:focus-visible` outline appears without tabbing. " +
          "Does not move focus for assistive tech.",
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div
        style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;padding:24px;background:#1e2733;border-radius:8px;"
      >
        <Button variant="primary" demo-focus>ButtonText</Button>
        <Button variant="brand" demo-focus>ButtonText</Button>
        <Button variant="secondary" demo-focus>ButtonText</Button>
      </div>
    `,
  }),
};

export const NoIcon: Story = {
  args: { hideIcon: true },
};

/** 3×3 matrix matching Figma variant matrix (default / pressed / disabled × rows). */
export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div
        style="display:flex;flex-direction:column;gap:16px;padding:24px;background:#1e2733;border-radius:8px;"
      >
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="primary">ButtonText</Button>
          <Button variant="primary" pressed>ButtonText</Button>
          <Button variant="primary" disabled>ButtonText</Button>
        </div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="brand">ButtonText</Button>
          <Button variant="brand" pressed>ButtonText</Button>
          <Button variant="brand" disabled>ButtonText</Button>
        </div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="secondary">ButtonText</Button>
          <Button variant="secondary" pressed>ButtonText</Button>
          <Button variant="secondary" disabled>ButtonText</Button>
        </div>
      </div>
    `,
  }),
};
