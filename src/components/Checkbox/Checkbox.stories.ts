import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Checkbox from './Checkbox.vue';

const FIGMA_URL =
  'https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8360-1195';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Selection control za odabir jedne ili više opcija. Svaki checkbox radi neovisno. ' +
          'Dvije veličine (`sm`, `lg`), tri stanja odabira (`unchecked`, `checked`, `inderteminate`), ' +
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
      options: ['sm', 'lg'],
      description: 'Veličina ikone. `sm` = 16px, `lg` = 24px.',
    },
    selection: {
      control: 'select',
      options: ['unchecked', 'checked', 'inderteminate'],
      description: 'Stanje odabira. `inderteminate` = indeterminate (Figma spelling).',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled'],
      description: 'Interaktivno stanje.',
    },
    hasLabel: {
      control: 'boolean',
      description: 'Prikazuje ili skriva label.',
    },
  },
  args: {
    size:      'sm',
    selection: 'unchecked',
    state:     'default',
    hasLabel:  true,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Selection variants
// ------------------------------------

export const Unchecked: Story = {
  args: { selection: 'unchecked', state: 'default' },
};

export const Checked: Story = {
  args: { selection: 'checked', state: 'default' },
};

export const Indeterminate: Story = {
  name: 'Indeterminate',
  args: { selection: 'inderteminate', state: 'default' },
};

// ------------------------------------
// State variants
// ------------------------------------

export const StateHover: Story = {
  name: 'State: hover',
  args: { selection: 'unchecked', state: 'hover' },
};

export const StateFocus: Story = {
  name: 'State: focus',
  args: { selection: 'checked', state: 'focus' },
};

export const StateDisabled: Story = {
  name: 'State: disabled',
  args: { selection: 'unchecked', state: 'disabled' },
};

// ------------------------------------
// Size variants
// ------------------------------------

export const SizeSm: Story = {
  name: 'Size: sm',
  args: { size: 'sm', selection: 'checked', state: 'default' },
};

export const SizeLg: Story = {
  name: 'Size: lg',
  args: { size: 'lg', selection: 'checked', state: 'default' },
};

// ------------------------------------
// No label
// ------------------------------------

export const NoLabel: Story = {
  name: 'Without label',
  args: { selection: 'checked', state: 'default', hasLabel: false },
};

// ------------------------------------
// All Variants — tačna replika Figma frame-a (node 8360:1195)
// Frame: 526×168px — koordinate iz Figma metadata
// ------------------------------------

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: {
    docs: {
      description: {
        story:
          'Tačna replika Figma frame-a (node 8360:1195, 526×168px). ' +
          'Pozicije su preuzete direktno iz Figma metadata koordinata.',
      },
    },
  },
  render: () => ({
    components: { Checkbox },
    template: `
      <div style="position:relative;width:526px;height:168px;background:var(--surface-default-body,#1e2733);">

        <!-- Row 1 (y=16, sm): unchecked ×4 states, checked ×3 states -->
        <Checkbox style="position:absolute;left:22.5px;top:16px;"  size="sm" selection="unchecked"    state="default"  />
        <Checkbox style="position:absolute;left:93.5px;top:16px;"  size="sm" selection="unchecked"    state="hover"    />
        <Checkbox style="position:absolute;left:164.5px;top:16px;" size="sm" selection="unchecked"    state="focus"    />
        <Checkbox style="position:absolute;left:235.5px;top:16px;" size="sm" selection="unchecked"    state="disabled" />
        <Checkbox style="position:absolute;left:306.5px;top:16px;" size="sm" selection="checked"      state="default"  />
        <Checkbox style="position:absolute;left:377.5px;top:16px;" size="sm" selection="checked"      state="hover"    />
        <Checkbox style="position:absolute;left:448.5px;top:16px;" size="sm" selection="checked"      state="focus"    />

        <!-- Row 2 (y=52, sm + 1 lg): checked disabled, inderteminate ×4 states, lg unchecked default -->
        <Checkbox style="position:absolute;left:51.5px;top:52px;"  size="sm" selection="checked"       state="disabled" />
        <Checkbox style="position:absolute;left:122.5px;top:52px;" size="sm" selection="inderteminate" state="default"  />
        <Checkbox style="position:absolute;left:193.5px;top:52px;" size="sm" selection="inderteminate" state="hover"    />
        <Checkbox style="position:absolute;left:264.5px;top:52px;" size="sm" selection="inderteminate" state="focus"    />
        <Checkbox style="position:absolute;left:335.5px;top:52px;" size="sm" selection="inderteminate" state="disabled" />
        <Checkbox style="position:absolute;left:406.5px;top:48px;" size="lg" selection="unchecked"     state="default"  />

        <!-- Row 3 (y=88, lg): unchecked ×3 states, checked ×3 states -->
        <Checkbox style="position:absolute;left:19px;top:88px;"   size="lg" selection="unchecked"    state="hover"    />
        <Checkbox style="position:absolute;left:103px;top:88px;"  size="lg" selection="unchecked"    state="focus"    />
        <Checkbox style="position:absolute;left:187px;top:88px;"  size="lg" selection="unchecked"    state="disabled" />
        <Checkbox style="position:absolute;left:271px;top:88px;"  size="lg" selection="checked"      state="default"  />
        <Checkbox style="position:absolute;left:355px;top:88px;"  size="lg" selection="checked"      state="hover"    />
        <Checkbox style="position:absolute;left:439px;top:88px;"  size="lg" selection="checked"      state="focus"    />

        <!-- Row 4 (y=128, lg): checked disabled, inderteminate ×4 states -->
        <Checkbox style="position:absolute;left:61px;top:128px;"  size="lg" selection="checked"      state="disabled" />
        <Checkbox style="position:absolute;left:145px;top:128px;" size="lg" selection="inderteminate" state="default"  />
        <Checkbox style="position:absolute;left:229px;top:128px;" size="lg" selection="inderteminate" state="hover"    />
        <Checkbox style="position:absolute;left:313px;top:128px;" size="lg" selection="inderteminate" state="focus"    />
        <Checkbox style="position:absolute;left:397px;top:128px;" size="lg" selection="inderteminate" state="disabled" />

      </div>
    `,
  }),
};
