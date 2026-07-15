import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import Dialog from "./Dialog.vue";
import Button from "../Button/Button.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8322-1725";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal dialog used to present information, notifications, or confirmation requests " +
          "that temporarily suspend interaction with the underlying interface.\n\n" +
          "- `footerType`: `inline` (default) = Cancel+Confirm side-by-side flex:1; `stacked` = Confirm primary on top, Cancel tertiary below (full-width)\n" +
          "- `size`: `default`=360px, `medium`=760px, `mobile`=100% + 16px side padding on overlay\n\n" +
          "Visibility is controlled by the parent via `v-if`. " +
          "Wrap in `<Transition name=\"kzn-dialog\">` to animate open/close.\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    footerType: {
      control: "select",
      options: ["inline", "stacked"],
      description:
        "Figma `FooterType`. `inline` = Cancel+Confirm side-by-side (flex:1). `stacked` = Confirm primary top, Cancel tertiary bottom (full-width).",
    },
    size: {
      control: "select",
      options: ["default", "medium", "mobile"],
      description:
        "Figma `size`. default=360px, medium=760px, mobile=100% (overlay gets 16px side padding).",
    },
    overlay: {
      control: "boolean",
      description:
        "Shows backdrop overlay + Teleports to body. Disable in Storybook to render inline.",
    },
  },
  args: {
    footerType: "inline",
    size: "default",
    overlay: false,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Size variants
// ------------------------------------

export const SizeDefault: Story = {
  name: "Size: default (360px)",
  args: { size: "default" },
};

export const SizeMedium: Story = {
  name: "Size: medium (760px)",
  args: { size: "medium" },
};

export const SizeMobile: Story = {
  name: "Size: mobile (100%)",
  render: () => ({
    components: { Dialog },
    template: `
      <div style="width:414px;padding-inline:var(--spacing-2xl,16px);background:rgba(0,0,0,0.6);border-radius:8px;">
        <Dialog :overlay="false" size="mobile">
          <template #header>Header</template>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
        </Dialog>
      </div>
    `,
  }),
};

// ------------------------------------
// FooterType variants
// ------------------------------------

export const FooterTypeInline: Story = {
  name: "FooterType: inline",
  args: { footerType: "inline" },
};

export const FooterTypeStacked: Story = {
  name: "FooterType: stacked",
  args: { footerType: "stacked" },
};

// ------------------------------------
// Interactive — parent controls visibility via v-if
// ------------------------------------

export const Interactive: Story = {
  name: "Interactive (toggle)",
  args: { overlay: true },
  parameters: {
    docs: {
      description: {
        story:
          "Klik na dugme otvara dialog. Confirm ili Cancel ga zatvara. " +
          "Klik na overlay ga zatvara. " +
          "Dialog je kontrolisan `v-if` na parent strani — nema internog `open` prop-a.",
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
      <Button type="primary" size="lg" :iconLeftShow="false" :iconRightShow="false" @click="isOpen = true">
        Open Dialog
      </Button>
      <Transition name="kzn-dialog">
        <Dialog
          v-if="isOpen"
          @close="isOpen = false"
          @confirm="isOpen = false"
        >
          <template #header>Confirm action</template>
          Are you sure you want to proceed? This action cannot be undone.
        </Dialog>
      </Transition>
    `,
  }),
};

// ------------------------------------
// All Variants — Figma frame node 8322:1725
// ------------------------------------

export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    docs: {
      description: {
        story:
          "FooterType × size — sve kombinacije iz Figma frame-a (node 8322:1725).",
      },
    },
  },
  render: () => ({
    components: { Dialog },
    template: `
      <div style="display:flex;flex-direction:column;gap:48px;align-items:flex-start;">
        <div v-for="footer in ['inline','stacked']" :key="footer">
          <p style="margin:0 0 16px;font-size:11px;font-family:sans-serif;color:#efefef;text-transform:uppercase;letter-spacing:.08em;">FooterType: {{ footer }}</p>
          <div style="display:flex;flex-direction:column;gap:24px;align-items:flex-start;">
            <div v-for="s in ['default','medium','mobile']" :key="s">
              <p style="margin:0 0 8px;font-size:10px;font-family:sans-serif;color:#9ba3af;text-transform:uppercase;letter-spacing:.06em;">size: {{ s }}</p>
              <div v-if="s === 'mobile'" style="width:414px;padding-inline:var(--spacing-2xl,16px);background:rgba(0,0,0,0.6);border-radius:8px;">
                <Dialog :overlay="false" :footerType="footer" size="mobile">
                  <template #header>Header</template>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </Dialog>
              </div>
              <Dialog v-else :overlay="false" :footerType="footer" :size="s">
                <template #header>Header</template>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
