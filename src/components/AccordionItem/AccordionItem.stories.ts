import type { Meta, StoryObj } from "@storybook/vue3-vite";
import AccordionItem from "./AccordionItem.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1674";

const meta = {
  title: "Components/AccordionItem",
  component: AccordionItem,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "Kaizen accordion item header — from Figma `accordion-item` (6507:1674).\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: {
      type: "figma",
      url: FIGMA_URL,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    expanded: { control: "boolean", description: "Figma `State=Selected`." },
    forceHover: {
      control: "boolean",
      description: "Figma `State=Hover` surface (for static demos).",
    },
    showLeadIcon: { control: "boolean" },
    showAdditionalIcon: { control: "boolean" },
    showSubhead: { control: "boolean" },
    showTrailIcon: { control: "boolean" },
    showCounter: { control: "boolean" },
    leadIconName: {
      control: "select",
      options: ["chevron-down", "chevron-up", "document", "activity"],
      description: "Figma `icon` in `icon-holder` — glyph for the lead icon.",
    },
    iconSize: {
      control: "select",
      options: ["small", "default", "lg", "xl"],
      description: "Figma `Icon` property `size` (lead + chevron).",
    },
  },
  args: {
    expanded: false,
    forceHover: false,
    showLeadIcon: true,
    showAdditionalIcon: false,
    showSubhead: true,
    showTrailIcon: true,
    showCounter: true,
    leadIconName: "activity",
    iconSize: "small",
  },
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Expanded: Story = {
  args: { expanded: true },
};

export const HoverStatic: Story = {
  args: { forceHover: true },
};

/** Mirrors the three Figma component states (Default / Selected / Hover). */
export const AllStates: Story = {
  render: () => ({
    components: { AccordionItem },
    template: `
      <div style="display:flex;flex-direction:column;gap:8px;width:400px;max-width:100%;">
        <AccordionItem />
        <AccordionItem expanded />
        <AccordionItem :force-hover="true" />
      </div>
    `,
  }),
};

export const Minimal: Story = {
  args: {
    showLeadIcon: false,
    showSubhead: false,
    showCounter: false,
  },
};

/** All available lead icon glyphs in a single row. */
export const LeadIconVariants: Story = {
  render: () => ({
    components: { AccordionItem },
    template: `
      <div style="display:flex;flex-direction:column;gap:8px;width:400px;">
        <AccordionItem lead-icon-name="activity" />
        <AccordionItem lead-icon-name="document" />
        <AccordionItem lead-icon-name="chevron-down" />
        <AccordionItem lead-icon-name="chevron-up" />
      </div>
    `,
  }),
};
