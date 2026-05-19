import type { Meta, StoryObj } from "@storybook/vue3-vite";
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

/**
 * Replicates the Figma component set frame (node 6507:1994).
 * Uses v-bind with a setup array so the `style` prop bypasses
 * Vue's template-compiler CSS normalization of static style="…" attributes.
 */
export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    docs: {
      description: {
        story:
          "Replicates the Figma frame (node 6507:1994). " +
          "Top 4 rows: type=text — brand · action · warrning · info. " +
          "Bottom 4 rows: type=dot — same style order.",
      },
    },
  },
  render: () => ({
    components: { Badge },
    setup() {
      const items = [
        { style: "brand",    type: "text" },
        { style: "action",   type: "text" },
        { style: "warrning", type: "text" },
        { style: "info",     type: "text" },
        { style: "brand",    type: "dot"  },
        { style: "action",   type: "dot"  },
        { style: "warrning", type: "dot"  },
        { style: "info",     type: "dot"  },
      ];
      return { items };
    },
    template: `
      <div style="
        display:inline-flex;
        flex-direction:column;
        align-items:center;
        gap:24px;
        padding:24px;
        background:var(--surface-default-body,#1a1d2e);
        border-radius:8px;
      ">
        <Badge
          v-for="item in items"
          :key="item.style + item.type"
          v-bind="item"
        />
      </div>
    `,
  }),
};
