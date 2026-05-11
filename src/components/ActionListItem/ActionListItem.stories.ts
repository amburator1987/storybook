import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ActionListItem from "./ActionListItem.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1674";

const meta = {
  title: "Components/ActionListItem",
  component: ActionListItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "An action list item is a single interactive row in a vertical action list. " +
          "Used as the foundation of menus, selection panels, and sidebar navigation.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["Default", "Hover", "Selected", "Focus"],
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
    state: "Default",
    showLeadIcon: true,
    showSubhead: true,
    showTrailIcon: true,
    leadIconName: "activity",
  },
} satisfies Meta<typeof ActionListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: { state: "Hover" },
};

export const Selected: Story = {
  args: { state: "Selected" },
};

export const Focus: Story = {
  args: { state: "Focus" },
};

export const NoLeadIcon: Story = {
  args: { showLeadIcon: false },
};

export const NoSubhead: Story = {
  args: { showSubhead: false },
};

export const Minimal: Story = {
  args: {
    showLeadIcon: false,
    showSubhead: false,
    showTrailIcon: false,
  },
};

/** Full Figma matrix: 4 states (Default / Hover / Selected / Focus). */
export const AllStates: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Matches the Figma component set matrix (node 6507:1674).",
      },
    },
  },
  render: () => ({
    components: { ActionListItem },
    template: `
      <div style="display:flex;flex-direction:column;background:#1e2733;">
        <ActionListItem state="Default">Action List</ActionListItem>
        <ActionListItem state="Selected">Action List</ActionListItem>
        <ActionListItem state="Hover">Action List</ActionListItem>
        <ActionListItem state="Focus">Action List</ActionListItem>
      </div>
    `,
  }),
};
