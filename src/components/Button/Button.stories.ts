import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8091-1786";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Buttons allow users to perform an action or navigate to another page. " +
          "Four types (`primary`, `secondary`, `danger`, `tertiary`), three sizes (`sm`, `md`, `lg`), " +
          "pill shape, optional leading and trailing icons.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "secondary", "danger", "tertiary"],
      description: "Figma property `type`.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Figma property `size`. sm=32px, md=40px, lg=48px.",
    },
    state: {
      control: "select",
      options: ["default", "pressed", "disabled", "focus"],
      description:
        "Figma property `state`. `disabled` maps to native disabled; `focus` renders the focus ring statically.",
    },
    iconLeftShow: {
      control: "boolean",
      description: "Figma property `icon-left-show`. Show leading icon.",
    },
    iconRightShow: {
      control: "boolean",
      description: "Figma property `icon-right-show`. Show trailing icon.",
    },
    iconName: {
      control: "select",
      options: ["activity", "chevron-down", "chevron-up", "document"],
      description: "Glyph for the leading icon (overridable via `icon-left` slot).",
    },
    iconRightName: {
      control: "select",
      options: ["activity", "chevron-down", "chevron-up", "document"],
      description: "Glyph for the trailing icon (overridable via `icon-right` slot).",
    },
  },
  args: {
    type: "primary",
    size: "sm",
    state: "default",
    iconLeftShow: true,
    iconRightShow: false,
    iconName: "activity",
    iconRightName: "activity",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Types
// ------------------------------------

export const Primary: Story = {
  args: { type: "primary" },
};

export const Secondary: Story = {
  args: { type: "secondary" },
};

export const Danger: Story = {
  args: { type: "danger" },
};

export const Tertiary: Story = {
  args: { type: "tertiary" },
};

// ------------------------------------
// States
// ------------------------------------

export const Pressed: Story = {
  args: { state: "pressed" },
};

export const Disabled: Story = {
  args: { state: "disabled" },
};

export const Focus: Story = {
  args: { state: "focus" },
};

// ------------------------------------
// Sizes
// ------------------------------------

export const SizeSm: Story = {
  name: "Size: sm",
  args: { size: "sm" },
};

export const SizeMd: Story = {
  name: "Size: md",
  args: { size: "md" },
};

export const SizeLg: Story = {
  name: "Size: lg",
  args: { size: "lg" },
};

// ------------------------------------
// Icon variants
// ------------------------------------

export const NoIcon: Story = {
  args: { iconLeftShow: false, iconRightShow: false },
};

export const WithIconRight: Story = {
  args: { iconLeftShow: false, iconRightShow: true },
};

export const BothIcons: Story = {
  args: { iconLeftShow: true, iconRightShow: true },
};

// ------------------------------------
// All variants — Figma frame replica
// Figma frame node 8091:1786 — 712×704px
// Layout: 4 state columns × (4 types × 3 sizes) rows
// Column width: 143px | Gap: 16px | Padding: 24px 46px
// ------------------------------------

const LABEL = `
  font-size:10px;
  font-family:sans-serif;
  text-transform:uppercase;
  letter-spacing:.07em;
  color:var(--text-default-caption,#9ca3af);
  font-weight:600;
  white-space:nowrap;
`;

const DIVIDER = `
  grid-column:1/-1;
  display:flex;
  align-items:center;
  gap:12px;
  padding:8px 0 0;
`;

const DIVIDER_LINE = `
  flex:1;
  height:1px;
  background:var(--border-default-default-elevated,#313540);
`;

/** Exact replica of the Figma component set frame — 4 states × 4 types × 3 sizes. */
export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    docs: {
      description: {
        story:
          "Replicates the Figma component set frame (node 8091:1786). " +
          "Columns → states: default · pressed · disabled · focus. " +
          "Rows → types: primary · secondary · tertiary · danger. " +
          "Sections → sizes: sm · md · lg.",
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="
        display:inline-flex;
        flex-direction:column;
        background:var(--surface-default-body,#1a1f2e);
        padding:24px 46px;
        border-radius:4px;
        box-sizing:border-box;
      ">

        <!-- ── State column headers ── -->
        <div style="
          display:grid;
          grid-template-columns:repeat(4,143px);
          gap:16px;
          margin-bottom:16px;
        ">
          <span style="${LABEL}text-align:center;">default</span>
          <span style="${LABEL}text-align:center;">pressed</span>
          <span style="${LABEL}text-align:center;">disabled</span>
          <span style="${LABEL}text-align:center;">focus</span>
        </div>

        <!-- ══════════════════════════ SM ══════════════════════════ -->
        <div style="display:grid;grid-template-columns:repeat(4,143px);gap:16px;align-items:center;justify-items:center;">

          <!-- SM divider row -->
          <div style="${DIVIDER}">
            <span style="${LABEL}">sm</span>
            <span style="${DIVIDER_LINE}"></span>
          </div>

          <!-- primary sm -->
          <Button type="primary"   state="default"  size="sm">ButtonText</Button>
          <Button type="primary"   state="pressed"  size="sm">ButtonText</Button>
          <Button type="primary"   state="disabled" size="sm">ButtonText</Button>
          <Button type="primary"   state="focus"    size="sm">ButtonText</Button>

          <!-- secondary sm -->
          <Button type="secondary" state="default"  size="sm">ButtonText</Button>
          <Button type="secondary" state="pressed"  size="sm">ButtonText</Button>
          <Button type="secondary" state="disabled" size="sm">ButtonText</Button>
          <Button type="secondary" state="focus"    size="sm">ButtonText</Button>

          <!-- tertiary sm -->
          <Button type="tertiary"  state="default"  size="sm">ButtonText</Button>
          <Button type="tertiary"  state="pressed"  size="sm">ButtonText</Button>
          <Button type="tertiary"  state="disabled" size="sm">ButtonText</Button>
          <Button type="tertiary"  state="focus"    size="sm">ButtonText</Button>

          <!-- danger sm -->
          <Button type="danger"    state="default"  size="sm">ButtonText</Button>
          <Button type="danger"    state="pressed"  size="sm">ButtonText</Button>
          <Button type="danger"    state="disabled" size="sm">ButtonText</Button>
          <Button type="danger"    state="focus"    size="sm">ButtonText</Button>

        </div>

        <!-- ══════════════════════════ MD ══════════════════════════ -->
        <div style="display:grid;grid-template-columns:repeat(4,143px);gap:16px;align-items:center;justify-items:center;margin-top:16px;">

          <!-- MD divider row -->
          <div style="${DIVIDER}">
            <span style="${LABEL}">md</span>
            <span style="${DIVIDER_LINE}"></span>
          </div>

          <!-- primary md -->
          <Button type="primary"   state="default"  size="md">ButtonText</Button>
          <Button type="primary"   state="pressed"  size="md">ButtonText</Button>
          <Button type="primary"   state="disabled" size="md">ButtonText</Button>
          <Button type="primary"   state="focus"    size="md">ButtonText</Button>

          <!-- secondary md -->
          <Button type="secondary" state="default"  size="md">ButtonText</Button>
          <Button type="secondary" state="pressed"  size="md">ButtonText</Button>
          <Button type="secondary" state="disabled" size="md">ButtonText</Button>
          <Button type="secondary" state="focus"    size="md">ButtonText</Button>

          <!-- tertiary md -->
          <Button type="tertiary"  state="default"  size="md">ButtonText</Button>
          <Button type="tertiary"  state="pressed"  size="md">ButtonText</Button>
          <Button type="tertiary"  state="disabled" size="md">ButtonText</Button>
          <Button type="tertiary"  state="focus"    size="md">ButtonText</Button>

          <!-- danger md -->
          <Button type="danger"    state="default"  size="md">ButtonText</Button>
          <Button type="danger"    state="pressed"  size="md">ButtonText</Button>
          <Button type="danger"    state="disabled" size="md">ButtonText</Button>
          <Button type="danger"    state="focus"    size="md">ButtonText</Button>

        </div>

        <!-- ══════════════════════════ LG ══════════════════════════ -->
        <div style="display:grid;grid-template-columns:repeat(4,143px);gap:16px;align-items:center;justify-items:center;margin-top:16px;">

          <!-- LG divider row -->
          <div style="${DIVIDER}">
            <span style="${LABEL}">lg</span>
            <span style="${DIVIDER_LINE}"></span>
          </div>

          <!-- primary lg -->
          <Button type="primary"   state="default"  size="lg">ButtonText</Button>
          <Button type="primary"   state="pressed"  size="lg">ButtonText</Button>
          <Button type="primary"   state="disabled" size="lg">ButtonText</Button>
          <Button type="primary"   state="focus"    size="lg">ButtonText</Button>

          <!-- secondary lg -->
          <Button type="secondary" state="default"  size="lg">ButtonText</Button>
          <Button type="secondary" state="pressed"  size="lg">ButtonText</Button>
          <Button type="secondary" state="disabled" size="lg">ButtonText</Button>
          <Button type="secondary" state="focus"    size="lg">ButtonText</Button>

          <!-- tertiary lg -->
          <Button type="tertiary"  state="default"  size="lg">ButtonText</Button>
          <Button type="tertiary"  state="pressed"  size="lg">ButtonText</Button>
          <Button type="tertiary"  state="disabled" size="lg">ButtonText</Button>
          <Button type="tertiary"  state="focus"    size="lg">ButtonText</Button>

          <!-- danger lg -->
          <Button type="danger"    state="default"  size="lg">ButtonText</Button>
          <Button type="danger"    state="pressed"  size="lg">ButtonText</Button>
          <Button type="danger"    state="disabled" size="lg">ButtonText</Button>
          <Button type="danger"    state="focus"    size="lg">ButtonText</Button>

        </div>

      </div>
    `,
  }),
};
