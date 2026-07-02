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
// All variants — tačna replika Figma frame-a (node 8412:1906)
// Frame: 806×136px — koordinate iz Figma metadata
// ------------------------------------

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: {
    docs: {
      description: {
        story:
          'Tačna replika Figma frame-a (node 8412:1906, 806×136px). ' +
          'Pozicije su preuzete direktno iz Figma metadata koordinata.',
      },
    },
  },
  render: () => ({
    components: { Chip },
    template: `
      <div style="position:relative;width:806px;height:136px;background:var(--surface-default-body,#1e2733);">

        <!-- Row 1 (y=28, sm): isChecked=true ×4, isChecked=false ×4 -->
        <Chip style="position:absolute;left:35.5px;top:28px;"  size="sm" :isChecked="true"  state="default"  />
        <Chip style="position:absolute;left:104.5px;top:28px;" size="sm" :isChecked="true"  state="hover"    />
        <Chip style="position:absolute;left:173.5px;top:28px;" size="sm" :isChecked="true"  state="focus"    />
        <Chip style="position:absolute;left:242.5px;top:28px;" size="sm" :isChecked="true"  state="disabled" />
        <Chip style="position:absolute;left:311.5px;top:28px;" size="sm" :isChecked="false" state="default"  />
        <Chip style="position:absolute;left:380.5px;top:28px;" size="sm" :isChecked="false" state="hover"    />
        <Chip style="position:absolute;left:449.5px;top:28px;" size="sm" :isChecked="false" state="focus"    />
        <Chip style="position:absolute;left:518.5px;top:28px;" size="sm" :isChecked="false" state="disabled" />

        <!-- Row 1 cont. (y=24, md): isChecked=true ×3 -->
        <Chip style="position:absolute;left:587.5px;top:24px;" size="md" :isChecked="true"  state="default"  />
        <Chip style="position:absolute;left:656.5px;top:24px;" size="md" :isChecked="true"  state="hover"    />
        <Chip style="position:absolute;left:725.5px;top:24px;" size="md" :isChecked="true"  state="focus"    />

        <!-- Row 2 (y=80, md): isChecked=true disabled, isChecked=false ×4 -->
        <Chip style="position:absolute;left:242.5px;top:80px;" size="md" :isChecked="true"  state="disabled" />
        <Chip style="position:absolute;left:311.5px;top:80px;" size="md" :isChecked="false" state="default"  />
        <Chip style="position:absolute;left:380.5px;top:80px;" size="md" :isChecked="false" state="hover"    />
        <Chip style="position:absolute;left:449.5px;top:80px;" size="md" :isChecked="false" state="focus"    />
        <Chip style="position:absolute;left:518.5px;top:80px;" size="md" :isChecked="false" state="disabled" />

      </div>
    `,
  }),
};
