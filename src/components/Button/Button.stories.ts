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
// All variants matrix
// ------------------------------------

/** Figma matrix: 4 types × 4 states × 3 sizes. */
export const AllVariants: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Matches the Figma component set: 4 types × 4 states (rows) and 3 sizes.",
      },
    },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;flex-direction:column;gap:40px;padding:32px;background:var(--surface-default-body,#1e2733);border-radius:8px;min-width:720px;">

        <section style="display:flex;flex-direction:column;gap:12px;">
          <h3 style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">type × state — size sm</h3>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
              <Button type="primary" state="default" size="sm">primary</Button>
              <Button type="primary" state="pressed" size="sm">pressed</Button>
              <Button type="primary" state="disabled" size="sm">disabled</Button>
              <Button type="primary" state="focus" size="sm">focus</Button>
            </div>
            <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
              <Button type="secondary" state="default" size="sm">secondary</Button>
              <Button type="secondary" state="pressed" size="sm">pressed</Button>
              <Button type="secondary" state="disabled" size="sm">disabled</Button>
              <Button type="secondary" state="focus" size="sm">focus</Button>
            </div>
            <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
              <Button type="danger" state="default" size="sm">danger</Button>
              <Button type="danger" state="pressed" size="sm">pressed</Button>
              <Button type="danger" state="disabled" size="sm">disabled</Button>
              <Button type="danger" state="focus" size="sm">focus</Button>
            </div>
            <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
              <Button type="tertiary" state="default" size="sm">tertiary</Button>
              <Button type="tertiary" state="pressed" size="sm">pressed</Button>
              <Button type="tertiary" state="disabled" size="sm">disabled</Button>
              <Button type="tertiary" state="focus" size="sm">focus</Button>
            </div>
          </div>
        </section>

        <section style="display:flex;flex-direction:column;gap:12px;">
          <h3 style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">sizes — primary · default</h3>
          <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
            <Button type="primary" size="sm">sm (32px)</Button>
            <Button type="primary" size="md">md (40px)</Button>
            <Button type="primary" size="lg">lg (48px)</Button>
          </div>
        </section>

        <section style="display:flex;flex-direction:column;gap:12px;">
          <h3 style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">icon variants — primary sm</h3>
          <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
            <Button type="primary" :icon-left-show="true" :icon-right-show="false">left icon</Button>
            <Button type="primary" :icon-left-show="false" :icon-right-show="true">right icon</Button>
            <Button type="primary" :icon-left-show="true" :icon-right-show="true">both icons</Button>
            <Button type="primary" :icon-left-show="false" :icon-right-show="false">no icons</Button>
          </div>
        </section>

      </div>
    `,
  }),
};
