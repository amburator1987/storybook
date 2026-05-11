import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";

const FIGMA_URL =
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
          "Buttons allow users to perform an action or navigate to another page. " +
          "Three types (`primary`, `brand`, `secondary`), pill shape, optional leading and trailing icons.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "brand", "secondary"],
      description: "Figma property `type`.",
    },
    size: {
      control: "select",
      options: ["sm"],
      description: "Only `sm` available in Figma (reserved for future).",
    },
    state: {
      control: "select",
      options: ["default", "pressed", "disabled", "focus"],
      description:
        "Figma property `state`. `disabled` maps to native disabled; `focus` renders the focus ring statically (for docs/screenshots).",
    },
    hideIcon: {
      control: "boolean",
      description: "Hide the leading icon (text-only button).",
    },
    showIconRight: {
      control: "boolean",
      description: "Show a trailing icon after the label.",
    },
    iconName: {
      control: "select",
      options: ["chevron-down", "chevron-up", "document", "activity"],
      description: "Glyph for the leading icon (overridable via `icon` slot).",
    },
    iconSize: {
      control: "select",
      options: ["small", "default", "lg", "xl"],
    },
    iconRightName: {
      control: "select",
      options: ["chevron-down", "chevron-up", "document", "activity"],
      description: "Glyph for the trailing icon (overridable via `icon-right` slot).",
    },
    iconRightSize: {
      control: "select",
      options: ["small", "default", "lg", "xl"],
    },
  },
  args: {
    type: "primary",
    size: "sm",
    state: "default",
    hideIcon: false,
    showIconRight: false,
    iconName: "chevron-down",
    iconSize: "small",
    iconRightName: "chevron-down",
    iconRightSize: "small",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Brand: Story = {
  args: { type: "brand" },
};

export const Secondary: Story = {
  args: { type: "secondary" },
};

export const Pressed: Story = {
  args: { state: "pressed" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const Focus: Story = {
  args: { state: "focus" },
};

export const NoIcon: Story = {
  args: { hideIcon: true },
};

export const WithIconRight: Story = {
  args: { showIconRight: true },
};

export const BothIcons: Story = {
  args: {
    showIconRight: true,
    iconName: "chevron-up",
    iconRightName: "chevron-down",
  },
};

/** Full Figma matrix: 3 types × 4 states (default / pressed / disabled / focus). */
export const AllVariants: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Matches the Figma component set matrix (node 8091:1786).",
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;flex-direction:column;gap:20px;padding:32px;background:#1e2733;border-radius:8px;">
        <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
          <Button type="primary" state="default">Primary</Button>
          <Button type="primary" state="pressed">Primary</Button>
          <Button type="primary" state="disabled">Primary</Button>
          <Button type="primary" state="focus">Primary</Button>
        </div>
        <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
          <Button type="brand" state="default">Brand</Button>
          <Button type="brand" state="pressed">Brand</Button>
          <Button type="brand" state="disabled">Brand</Button>
          <Button type="brand" state="focus">Brand</Button>
        </div>
        <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
          <Button type="secondary" state="default">Secondary</Button>
          <Button type="secondary" state="pressed">Secondary</Button>
          <Button type="secondary" state="disabled">Secondary</Button>
          <Button type="secondary" state="focus">Secondary</Button>
        </div>
      </div>
    `,
  }),
};
