import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ActionList from "./ActionList.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1674";

const meta = {
  title: "Components/ActionList",
  component: ActionList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A single interactive row in a vertical action list. " +
          "Two types (`closed` / `open`), three states (`default`, `hover`, `focus`). " +
          "Supports lead icon, title, subheading, counter and trail icon. " +
          "Use as the primary item inside menus, dropdowns, side panels and accordions.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["closed", "open"],
      description:
        "Figma property `type`. `open` = expanded item — yellow left accent bar, chevron-up, aria-expanded=true.",
    },
    state: {
      control: "select",
      options: ["default", "hover", "focus"],
      description: "Figma property `State`.",
    },
    showLeadIcon: {
      control: "boolean",
      description: "Figma property `showLeadIcon`.",
    },
    showSubhead: {
      control: "boolean",
      description: "Figma property `showSubhead`.",
    },
    showTrailIcon: {
      control: "boolean",
      description: "Figma property `showTrailIcon`.",
    },
    leadIconName: {
      control: "select",
      options: ["activity", "document", "chevron-down", "chevron-up"],
      description: "Glyph for the lead icon (overridable via `lead-icon` slot).",
    },
  },
  args: {
    type: "closed",
    state: "default",
    showLeadIcon: true,
    showSubhead: true,
    showTrailIcon: true,
    leadIconName: "activity",
  },
} satisfies Meta<typeof ActionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Type
// ------------------------------------

export const Closed: Story = {
  args: { type: "closed" },
};

export const Open: Story = {
  args: { type: "open" },
};

// ------------------------------------
// States
// ------------------------------------

export const Hover: Story = {
  args: { state: "hover" },
};

export const Focus: Story = {
  args: { state: "focus" },
};

// ------------------------------------
// Slot variants
// ------------------------------------

export const NoLeadIcon: Story = {
  args: { showLeadIcon: false },
};

export const NoSubhead: Story = {
  args: { showSubhead: false },
};

export const Minimal: Story = {
  args: { showLeadIcon: false, showSubhead: false, showTrailIcon: false },
};

// ------------------------------------
// All variants — Figma frame replica
// Frame node 6507:1674 — 414×416px
// 6 rows × 48px, gap 16px, padding 24px top/bottom
// ------------------------------------

/** Replica of the Figma component set frame — 2 types × 3 states. */
export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    docs: {
      description: {
        story:
          "Replicates the Figma component set frame (node 6507:1674). " +
          "Rows 1–3: type=closed (default · hover · focus). " +
          "Rows 4–6: type=open (default · hover · focus).",
      },
    },
  },
  render: () => ({
    components: { ActionList },
    template: `
      <div style="
        display:inline-flex;
        flex-direction:column;
        gap:16px;
        background:var(--surface-default-body,#1e2733);
        padding:24px 0;
        border-radius:4px;
      ">
        <ActionList type="closed" state="default">Action List</ActionList>
        <ActionList type="closed" state="hover">Action List</ActionList>
        <ActionList type="closed" state="focus">Action List</ActionList>
        <ActionList type="open"   state="default">Action List</ActionList>
        <ActionList type="open"   state="hover">Action List</ActionList>
        <ActionList type="open"   state="focus">Action List</ActionList>
      </div>
    `,
  }),
};
