import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import Datepicker from "./Datepicker.vue";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8337-1960";

// Helper: date in current month
function d(day: number): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), day);
}

const meta = {
  title: "Components/Datepicker",
  component: Datepicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Kalendarski odabir datuma. Navigacija strelicama; klik bira dan. " +
          "Žuta tačka označava dane sa transakcijama (`transactions` prop). " +
          "Onemogućeni dani se ne mogu selektovati (`disabledDates` prop).\n\n" +
          "**Cell states:** `unselected` · `unselected-guider` (tačka) · " +
          "`selected` · `selected-guider` (tačka) · `disabled`\n\n" +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "date",
      description: "Odabrani datum (v-model).",
    },
    transactions: {
      control: false,
      description: "Niz datuma koji imaju transakcije — prikazuje žutu tačku.",
    },
    disabledDates: {
      control: false,
      description: "Niz datuma koji su onemogućeni za odabir.",
    },
  },
  args: {
    modelValue:    undefined,
    transactions:  [],
    disabledDates: [],
  },
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// ------------------------------------
// Default — no selection, no transactions
// ------------------------------------

export const Default: Story = {
  name: "Default",
};

// ------------------------------------
// With selection — selected, no transaction
// ------------------------------------

export const Selected: Story = {
  name: "Selected (no transaction)",
  args: {
    modelValue: d(15),
  },
  parameters: {
    docs: {
      description: { story: "Dan 15 je selektovan — `selected` state (tamni fill, bez tačke)." },
    },
  },
};

// ------------------------------------
// Selected + transaction — selected-guider
// ------------------------------------

export const SelectedGuider: Story = {
  name: "Selected + transaction",
  args: {
    modelValue:   d(15),
    transactions: [d(15), d(8), d(22)],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Dan 15 je selektovan I ima transakciju — `selected-guider` state (tamni fill + žuta tačka). " +
          "Dani 8 i 22 imaju samo tačku — `unselected-guider` state.",
      },
    },
  },
};

// ------------------------------------
// All states visible
// ------------------------------------

export const AllStates: Story = {
  name: "All States",
  args: {
    modelValue:    d(10),
    transactions:  [d(5), d(10), d(18), d(25)],
    disabledDates: [d(1), d(2), d(3), d(28), d(29), d(30)],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sva stanja istovremeno: " +
          "`unselected` (obični dani), " +
          "`unselected-guider` (tačka na 5, 18, 25), " +
          "`selected-guider` (selektovan + tačka na 10), " +
          "`disabled` (1–3 i 28–30).",
      },
    },
  },
};

// ------------------------------------
// Interactive — v-model demo
// ------------------------------------

export const Interactive: Story = {
  name: "Interactive (v-model)",
  parameters: {
    docs: {
      description: {
        story: "Klikni na dan da ga selektuješ. Žuta tačka = transakcija postoji.",
      },
    },
  },
  render: () => ({
    components: { Datepicker },
    setup() {
      const now = new Date();
      const selected = ref<Date | undefined>(undefined);
      const transactions = [
        new Date(now.getFullYear(), now.getMonth(), 3),
        new Date(now.getFullYear(), now.getMonth(), 7),
        new Date(now.getFullYear(), now.getMonth(), 14),
        new Date(now.getFullYear(), now.getMonth(), 21),
        new Date(now.getFullYear(), now.getMonth(), 27),
      ];
      const disabledDates = [
        new Date(now.getFullYear(), now.getMonth(), 1),
        new Date(now.getFullYear(), now.getMonth(), 2),
      ];
      const label = () =>
        selected.value
          ? selected.value.toLocaleDateString("sr-Latn", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "—";
      return { selected, transactions, disabledDates, label };
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">
        <Datepicker
          v-model="selected"
          :transactions="transactions"
          :disabledDates="disabledDates"
        />
        <p style="font-family:var(--font-family-primary);font-size:var(--typography-font-size-paragraph-xs);color:var(--text-default-label);">
          Odabrano: {{ label() }}
        </p>
      </div>
    `,
  }),
};
