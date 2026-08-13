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
          "koja traje odredjeni period i sklanja se sama. `intent` odredjuje boju " +
          "(Neutral / Attention / Error), a `showButton` prikazuje opcionalno dugme za akciju. " +
          "Close ikonica je uvek prisutna.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["Neutral", "Attention", "Error"],
      description: "Figma property `Intent`. Drives background/text/icon color.",
    },
    showButton: {
      control: "boolean",
      description: "Figma property `ShowButton`. Shows the inline action button when true.",
    },
  },
  args: {
    intent: "Neutral",
    showButton: true,
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Variants
// ------------------------------------

export const Neutral: Story = {
  args: { intent: "Neutral" },
};

export const Attention: Story = {
  args: { intent: "Attention" },
};

export const ErrorIntent: Story = {
  name: "Error",
  args: { intent: "Error" },
};

export const NoButton: Story = {
  name: "Without Button",
  args: { intent: "Neutral", showButton: false },
};

// ------------------------------------
// All variants — Figma frame replica
// node 8621:1957 — Neutral, Error, Attention, stacked
// ------------------------------------

export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    docs: {
      description: {
        story: "Replicates the Figma frame (node 8621:1957): Neutral, Error, Attention.",
      },
    },
  },
  render: () => ({
    render() {
      return h(
        "div",
        { style: "display:flex;flex-direction:column;gap:16px;" },
        [
          h(Snackbar, { intent: "Neutral" }),
          h(Snackbar, { intent: "Error" }),
          h(Snackbar, { intent: "Attention" }),
        ],
      );
    },
  }),
};
