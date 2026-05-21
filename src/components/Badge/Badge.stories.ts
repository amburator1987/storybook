import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h } from "vue";
import Badge from "./Badge.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1994";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Compact label / counter component. " +
          "Two types (`text` / `dot`), four styles (`brand`, `action`, `warrning`, `info`). " +
          "The `dot` variant is a solid 8×8 pill used as a visual indicator with no text content.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "select",
      options: ["brand", "action", "warrning", "info"],
      description:
        "Figma property `style`. Note: `warrning` preserves the original Figma typo.",
    },
    type: {
      control: "select",
      options: ["text", "dot"],
      description:
        "Figma property `type`. `text` = label with slot; `dot` = 8×8 pill, no text.",
    },
  },
  args: {
    style: "brand",
    type: "text",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Style variants
// ------------------------------------

export const Brand: Story = {
  args: { style: "brand" },
};

export const Action: Story = {
  args: { style: "action" },
};

export const Warrning: Story = {
  args: { style: "warrning" },
};

export const Info: Story = {
  args: { style: "info" },
};

// ------------------------------------
// Type variants
// ------------------------------------

export const Text: Story = {
  name: "Type: text",
  args: { type: "text" },
};

export const Dot: Story = {
  name: "Type: dot",
  args: { type: "dot" },
};

// ------------------------------------
// All variants — Figma frame replica
// node 6507:1994 — 69×312px
// Vertical column: 4 text badges then 4 dot badges, gap=24px, padding=24px
// ------------------------------------

export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    docs: {
      description: {
        story:
          "Replicates the Figma frame (node 6507:1994). " +
          "Top 4: type=text — brand · action · warrning · info. " +
          "Bottom 4: type=dot — same style order.",
      },
    },
  },
  render: () => ({
    render() {
      return h(
        "div",
        { style: "display:inline-flex;flex-direction:column;align-items:center;gap:16px;" },
        [
          h(Badge, { style: "brand",    type: "text" }, { default: () => "99" }),
          h(Badge, { style: "action",   type: "text" }, { default: () => "99" }),
          h(Badge, { style: "warrning", type: "text" }, { default: () => "99" }),
          h(Badge, { style: "info",     type: "text" }, { default: () => "99" }),
          h(Badge, { style: "brand",    type: "dot"  }),
          h(Badge, { style: "action",   type: "dot"  }),
          h(Badge, { style: "warrning", type: "dot"  }),
          h(Badge, { style: "info",     type: "dot"  }),
        ],
      );
    },
  }),
};
