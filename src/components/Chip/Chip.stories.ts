import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Chip from './Chip.vue';

const FIGMA_URL =
  'https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8412-1906';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Chip je selektabilni filter element koji korisnicima omogućava ' +
          'odabir opcija, filtriranje sadržaja i okidanje akcija. ' +
          'Dvije veličine (`sm` = 24px, `md` = 32px), ' +
          'četiri interaktivna stanja (`default`, `hover`, `focus`, `disabled`).\n\n' +
          `[Otvori u Figmi](${FIGMA_URL})`,
      },
    },
    design: { type: 'figma', url: FIGMA_URL },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Veličina chipa. `sm` = 24px, `md` = 32px.',
    },
    isChecked: {
      control: 'boolean',
      description: 'Označava je li chip selektiran.',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled'],
      description: 'Interaktivno stanje.',
    },
  },
  args: {
    size:      'sm',
    isChecked: false,
    state:     'default',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// ------------------------------------
// Default
// ------------------------------------

export const Default: Story = {};

// ------------------------------------
// Checked / Unchecked
// ------------------------------------

export const Unchecked: Story = {
  args: { isChecked: false, state: 'default' },
};

export const Checked: Story = {
  args: { isChecked: true, state: 'default' },
};

// ------------------------------------
// States
// ------------------------------------

export const StateHover: Story = {
  name: 'State: hover',
  args: { isChecked: false, state: 'hover' },
};

export const StateFocus: Story = {
  name: 'State: focus',
  args: { isChecked: false, state: 'focus' },
};

export const StateDisabled: Story = {
  name: 'State: disabled',
  args: { isChecked: false, state: 'disabled' },
};

// ------------------------------------
// Sizes
// ------------------------------------

export const SizeSm: Story = {
  name: 'Size: sm (24px)',
  args: { size: 'sm', isChecked: false },
};

export const SizeMd: Story = {
  name: 'Size: md (32px)',
  args: { size: 'md', isChecked: false },
};

// ------------------------------------
// Chip group — real usage
// ------------------------------------

export const ChipGroup: Story = {
  name: 'Chip group (real usage)',
  parameters: {
    docs: {
      description: {
        story: 'Primjer grupe chipova s jednim selektiranim — single-select filter.',
      },
    },
  },
  render: () => ({
    components: { Chip },
    data() {
      return { selected: 'sport' };
    },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding:24px;background:var(--surface-default-body,#1e2733);border-radius:8px;">
        <Chip
          v-for="opt in ['sport', 'casino', 'live', 'virtuals', 'esport']"
          :key="opt"
          :isChecked="selected === opt"
          @update:isChecked="selected = opt"
        >{{ opt }}</Chip>
        <p style="width:100%;margin:8px 0 0;font-size:11px;color:var(--text-default-caption,#efefef);font-family:sans-serif;">
          Selected: {{ selected }}
        </p>
      </div>
    `,
  }),
};

// ------------------------------------
// All variants — Figma matrix
// ------------------------------------

export const AllVariants: Story = {
  name: 'All variants',
  parameters: {
    docs: {
      description: {
        story:
          'Figma matrica: 2 veličine × 2 stanja odabira × 4 interaktivna stanja.',
      },
    },
  },
  render: () => ({
    components: { Chip },
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:var(--surface-default-body,#1e2733);border-radius:8px;">

        <template v-for="size in ['sm', 'md']" :key="size">
          <div style="display:flex;flex-direction:column;gap:12px;">
            <p style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">
              {{ size }}
            </p>
            <div style="display:grid;grid-template-columns:100px repeat(4,90px);gap:8px;align-items:center;">
              <span></span>
              <span v-for="st in ['default','hover','focus','disabled']" :key="st"
                    style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;text-align:center;">
                {{ st }}
              </span>

              <span style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;">unchecked</span>
              <Chip
                v-for="st in ['default','hover','focus','disabled']" :key="'u-'+st"
                :size="size"
                :isChecked="false"
                :state="st"
              />

              <span style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;">checked</span>
              <Chip
                v-for="st in ['default','hover','focus','disabled']" :key="'c-'+st"
                :size="size"
                :isChecked="true"
                :state="st"
              />
            </div>
          </div>
        </template>

      </div>
    `,
  }),
};
