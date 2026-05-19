import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Icon from "./Icon.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8026-1509";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Kaizen `Icon` — Figma `icon` (8026:1509). " +
          "Property **`size`**: `small` | `default` | `lg` | `xl` " +
          "(16 / 24 / 32 / 40 px → tokeni `--icon-size-sm`, `--icon-size-default`, `--icon-size-lg`, `--icon-size-xlg`).\n\n" +
          "Boja: `icon/default/default` → `var(--icon-default-default)`.\n\n" +
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
      description: "Glyph name.",
    },
    size: {
      control: "select",
      options: ["small", "default", "lg", "xl"],
      description: "Figma property `size`. small=16px, default=24px, lg=32px, xl=40px.",
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

// ------------------------------------
// Size variants — po jedna story per Figma size varijante
// ------------------------------------

export const Small: Story = {
  name: "Size: small",
  args: { size: "small" },
};

export const DefaultSize: Story = {
  name: "Size: default",
  args: { size: "default" },
};

export const Large: Story = {
  name: "Size: lg",
  args: { size: "lg" },
};

export const ExtraLarge: Story = {
  name: "Size: xl",
  args: { size: "xl" },
};

// ------------------------------------
// All variants — sve veličine × svi glifovi
// ------------------------------------

const LABEL_STYLE =
  "font-size:10px;font-family:sans-serif;text-transform:uppercase;letter-spacing:.07em;" +
  "color:var(--text-default-caption,#9ca3af);font-weight:600;text-align:center;";

/** Sve size varijante — activity glyph. */
export const AllVariants: Story = {
  name: "All Variants",
  render: () => ({
    components: { Icon },
    template: `
      <div style="display:inline-flex;flex-direction:column;align-items:center;gap:16px;padding:24px;">
        <span style="${LABEL_STYLE}">small</span>
        <Icon name="activity" size="small" />
        <span style="${LABEL_STYLE}">default</span>
        <Icon name="activity" size="default" />
        <span style="${LABEL_STYLE}">lg</span>
        <Icon name="activity" size="lg" />
        <span style="${LABEL_STYLE}">xl</span>
        <Icon name="activity" size="xl" />
      </div>
    `,
  }),
};
