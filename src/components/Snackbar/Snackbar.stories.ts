import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h } from "vue";
import Snackbar from "./Snackbar.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8621-1957";

const meta = {
  title: "Components/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toast notifikacija se koristi za obavestenje o izvrsenoj akciji korisnika " +
          "koja traje odredjeni period i sklanja se sama. `action` varijanta se " +
          "manuelno moze skloniti klikom na close ikonicu; `noAction` nema close.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    snackbar: {
      control: "select",
      options: ["action", "noAction"],
      description:
        "Figma property `snackbar`. `action` = manual close icon shown; `noAction` = no close icon.",
    },
  },
  args: {
    snackbar: "action",
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Variants
// ------------------------------------

export const Action: Story = {
  args: { snackbar: "action" },
};

export const NoAction: Story = {
  args: { snackbar: "noAction" },
};

// ------------------------------------
// All variants — Figma frame replica
// node 8621:1957 — action then noAction, stacked
// ------------------------------------

export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    docs: {
      description: {
        story:
          "Replicates the Figma frame (node 8621:1957). " +
          "Top: `snackbar=action`. Bottom: `snackbar=noAction`.",
      },
    },
  },
  render: () => ({
    render() {
      return h(
        "div",
        { style: "display:flex;flex-direction:column;gap:16px;" },
        [
          h(Snackbar, { snackbar: "action" }),
          h(Snackbar, { snackbar: "noAction" }),
        ],
      );
    },
  }),
};
