import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Checkbox from "./Checkbox.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8287-1739";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A selection control that allows users to choose one or more options from a list. " +
          "Each checkbox operates independently. Three states (`checked`, `unchecked`, `disabled`), " +
          "three sizes (`sm`, `md`, `lg`).\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    checkbox: {
      control: "select",
      options: ["checked", "unchecked", "disabled"],
      description: "Figma property `checkbox`. Visual and interactive state.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Figma property `size`. sm=16px icon, md=24px icon, lg=32px icon.",
    },
  },
  args: {
    checkbox: "unchecked",
    size: "sm",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// States
// ------------------------------------

export const Checked: Story = {
  args: { checkbox: "checked" },
};

export const Unchecked: Story = {
  args: { checkbox: "unchecked" },
};

export const Disabled: Story = {
  args: { checkbox: "disabled" },
};

// ------------------------------------
// Sizes
// ------------------------------------

export const SizeSm: Story = {
  name: "Size: sm",
  args: { checkbox: "checked", size: "sm" },
};

export const SizeMd: Story = {
  name: "Size: md",
  args: { checkbox: "checked", size: "md" },
};

export const SizeLg: Story = {
  name: "Size: lg",
  args: { checkbox: "checked", size: "lg" },
};

// ------------------------------------
// All variants matrix
// ------------------------------------

/** Figma matrix: 3 states × 3 sizes. */
export const AllVariants: Story = {
  args: {
    checkbox: "checked"
  },

  parameters: {
    docs: {
      description: {
        story: "Matches the Figma component set: 3 states × 3 sizes.",
      },
    },
  },

  render: () => ({
    components: { Checkbox },
    template: `
      <div style="display:flex;flex-direction:column;gap:40px;padding:32px;background:var(--surface-default-body,#1e2733);border-radius:8px;">

        <section style="display:flex;flex-direction:column;gap:12px;">
          <h3 style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">size sm</h3>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <Checkbox checkbox="checked" size="sm">Checked</Checkbox>
            <Checkbox checkbox="unchecked" size="sm">Unchecked</Checkbox>
            <Checkbox checkbox="disabled" size="sm">Disabled</Checkbox>
          </div>
        </section>

        <section style="display:flex;flex-direction:column;gap:12px;">
          <h3 style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">size md</h3>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <Checkbox checkbox="checked" size="md">Checked</Checkbox>
            <Checkbox checkbox="unchecked" size="md">Unchecked</Checkbox>
            <Checkbox checkbox="disabled" size="md">Disabled</Checkbox>
          </div>
        </section>

        <section style="display:flex;flex-direction:column;gap:12px;">
          <h3 style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">size lg</h3>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <Checkbox checkbox="checked" size="lg">Checked</Checkbox>
            <Checkbox checkbox="unchecked" size="lg">Unchecked</Checkbox>
            <Checkbox checkbox="disabled" size="lg">Disabled</Checkbox>
          </div>
        </section>

      </div>
    `,
  })
};
