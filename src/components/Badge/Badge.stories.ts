import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Badge from "./Badge.vue";

const FIGMA_BADGE_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1994&t=hVNG5MaEmQHZtlRa-0";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Kaizen Badge — recreated 1:1 from Figma component set `badge` " +
          `(node 6507:1994).\n\n[Open in Figma](${FIGMA_BADGE_URL})`,
      },
    },
    design: {
      type: "figma",
      url: FIGMA_BADGE_URL,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["brand", "action", "warrning", "info"],
      description:
        "Figma property `badge`. Note: keeps the original `warrning` typo from the design.",
    },
  },
  args: {
    variant: "brand",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — brand counter, matches the Figma component default. */
export const Default: Story = {};

/** Counter (numeric badge). */
export const Counter: Story = {
  args: { variant: "info" },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: `<Badge v-bind="args">99</Badge>`,
  }),
};

/** All variants matching the Figma frame layout. */
export const AllVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;align-items:center;font-family:system-ui;">
        <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
          <Badge variant="brand">99</Badge>
          <Badge variant="action">99</Badge>
          <Badge variant="warrning">99</Badge>
          <Badge variant="info">99</Badge>
        </div>
      </div>
    `,
  }),
};
