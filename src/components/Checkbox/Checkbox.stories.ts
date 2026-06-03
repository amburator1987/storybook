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
          'Dvije veličine (`sm`, `lg`), tri stanja odabira (`unchecked`, `checked`, `undefined`), ' +
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
      options: ['unchecked', 'checked', 'undefined'],
      description: 'Stanje odabira. `undefined` = indeterminate.',
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

// ------------------------------------
// Default
// ------------------------------------

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
  name: 'Indeterminate (undefined)',
  args: { selection: 'undefined', state: 'default' },
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
// All variants matrix
// ------------------------------------

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Figma matrica: 2 veličine × 3 stanja odabira × 4 interaktivna stanja = 24 varijante.',
      },
    },
  },

  render: () => ({
    components: { Checkbox },
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;padding:32px;background:var(--surface-default-body,#1e2733);border-radius:8px;">

        <template v-for="sz in ['sm', 'lg']" :key="sz">
          <div style="display:flex;flex-direction:column;gap:16px;">
            <p style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">
              size {{ sz }}
            </p>

            <div style="display:grid;grid-template-columns:120px repeat(4,80px);gap:12px;align-items:center;">
              <!-- Header row -->
              <span style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;"></span>
              <span v-for="st in ['default','hover','focus','disabled']" :key="st"
                    style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;text-align:center;">
                {{ st }}
              </span>

              <!-- unchecked row -->
              <span style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;">unchecked</span>
              <Checkbox v-for="st in ['default','hover','focus','disabled']" :key="st"
                        :size="sz" selection="unchecked" :state="st" />

              <!-- checked row -->
              <span style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;">checked</span>
              <Checkbox v-for="st in ['default','hover','focus','disabled']" :key="st"
                        :size="sz" selection="checked" :state="st" />

              <!-- undefined row -->
              <span style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;">undefined</span>
              <Checkbox v-for="st in ['default','hover','focus','disabled']" :key="st"
                        :size="sz" selection="undefined" :state="st" />
            </div>
          </div>
        </template>

      </div>
    `,
  }),
};
