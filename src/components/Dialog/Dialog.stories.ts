import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import Dialog from "./Dialog.vue";
import Button from "../Button/Button.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8322-1745";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal dialog used to present information, notifications, or confirmation requests " +
          "that temporarily suspend interaction with the underlying interface. " +
          "One variant: `footerType=Default` (two stacked full-width buttons).\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls dialog visibility.",
    },
    footerType: {
      control: "select",
      options: ["Default"],
      description: "Figma property `FooterType`. Stacked buttons layout.",
    },
    overlay: {
      control: "boolean",
      description: "Shows backdrop overlay. Disable in Storybook to see only the dialog panel.",
    },
  },
  args: {
    open: true,
    footerType: "Default",
    overlay: false,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Interactive — toggle open/close
// ------------------------------------

export const Interactive: Story = {
  name: "Interactive (toggle)",
  parameters: {
    docs: {
      description: {
        story:
          "Click the trigger button to open the dialog. Confirm or Cancel closes it. " +
          "Clicking the overlay also closes it.",
      },
    },
  },
  render: () => ({
    components: { Dialog, Button },
    setup() {
      const isOpen = ref(false);
      return { isOpen };
    },
    template: `
      <Button type="primary" size="md" :iconLeftShow="false" :iconRightShow="false" @click="isOpen = true">
        Open Dialog
      </Button>
      <Dialog
        :open="isOpen"
        @close="isOpen = false"
        @confirm="isOpen = false"
      >
        <template #header>Confirm action</template>
        Are you sure you want to proceed? This action cannot be undone.
      </Dialog>
    `,
  }),
};

// ------------------------------------
// All Variants — Figma frame replica
// node 8322:1745 — 400×248px, FooterType=Default
// ------------------------------------

export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    docs: {
      description: {
        story:
          "Replicates the Figma component set frame (node 8322:1745). " +
          "FooterType=Default: two stacked full-width buttons (primary + tertiary).",
      },
    },
  },
  render: () => ({
    components: { Dialog },
    template: `
      <Dialog :open="true" :overlay="false">
        <template #header>Header</template>
        Lorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem ipusmLorem
        ipusmLorem ipusmLorem ipusmLorem ipusm
      </Dialog>
    `,
  }),
};
