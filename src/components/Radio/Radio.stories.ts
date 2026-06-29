import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Radio from './Radio.vue';

const FIGMA_URL =
  'https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8364-1323';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Selection control za odabir jedne opcije iz liste. ' +
          'Radio buttoni rade kao grupa — samo jedan može biti odabran. ' +
          'Jedna veličina (`sm` = 16px), dva stanja odabira (`unchecked`, `checked`), ' +
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
      options: ['unchecked', 'checked'],
      description: 'Stanje odabira.',
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
} satisfies Meta<typeof Radio>;

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

// ------------------------------------
// State variants
// ------------------------------------

export const StateHover: Story = {
  name: 'State: hover',
  args: { selection: 'unchecked', state: 'hover' },
};

export const StateFocus: Story = {
  name: 'State: focus',
  args: { selection: 'unchecked', state: 'focus' },
};

export const StateDisabled: Story = {
  name: 'State: disabled',
  args: { selection: 'unchecked', state: 'disabled' },
};

// ------------------------------------
// Size variants
// ------------------------------------

export const SizeSm: Story = {
  name: 'Size: sm (16px)',
  args: { size: 'sm', selection: 'unchecked', state: 'default' },
};

export const SizeLg: Story = {
  name: 'Size: lg (24px)',
  args: { size: 'lg', selection: 'unchecked', state: 'default' },
};

// ------------------------------------
// Without label
// ------------------------------------

export const NoLabel: Story = {
  name: 'Without label',
  args: { selection: 'unchecked', state: 'default', hasLabel: false },
};

// ------------------------------------
// Radio group — real usage example
// ------------------------------------

export const RadioGroup: Story = {
  name: 'Radio group (real usage)',
  parameters: {
    docs: {
      description: {
        story: 'Primjer grupe radio buttona s nativnim name/value atributima.',
      },
    },
  },
  render: () => ({
    components: { Radio },
    data() {
      return { selected: 'option-a' };
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;padding:24px;background:var(--surface-default-body,#1e2733);border-radius:8px;">
        <Radio
          name="example"
          value="option-a"
          :selection="selected === 'option-a' ? 'checked' : 'unchecked'"
          @update:selection="selected = 'option-a'"
        >Option A</Radio>
        <Radio
          name="example"
          value="option-b"
          :selection="selected === 'option-b' ? 'checked' : 'unchecked'"
          @update:selection="selected = 'option-b'"
        >Option B</Radio>
        <Radio
          name="example"
          value="option-c"
          :selection="selected === 'option-c' ? 'checked' : 'unchecked'"
          @update:selection="selected = 'option-c'"
        >Option C</Radio>
        <p style="margin:8px 0 0;font-size:11px;color:var(--text-default-caption,#efefef);font-family:sans-serif;">
          Selected: {{ selected }}
        </p>
      </div>
    `,
  }),
};

// ------------------------------------
// All variants — Figma frame replica (+ checked)
// ------------------------------------

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Figma matrica (node 8364:1323): 1 veličina × 2 stanja odabira × 4 interaktivna stanja.',
      },
    },
  },
  render: () => ({
    components: { Radio },
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:var(--surface-default-body,#1e2733);border-radius:8px;">

        <template v-for="sel in ['unchecked', 'checked']" :key="sel">
          <div style="display:flex;flex-direction:column;gap:12px;">
            <p style="margin:0;color:var(--text-default-caption,#efefef);font-size:11px;text-transform:uppercase;letter-spacing:.08em;font-family:sans-serif;">
              {{ sel }}
            </p>
            <div style="display:grid;grid-template-columns:80px repeat(4,90px);gap:8px;align-items:center;">
              <span></span>
              <span v-for="st in ['default','hover','focus','disabled']" :key="st"
                    style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;text-align:center;">
                {{ st }}
              </span>

              <span style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;">sm</span>
              <Radio
                v-for="st in ['default','hover','focus','disabled']" :key="'sm-'+st"
                size="sm"
                :selection="sel"
                :state="st"
              />

              <span style="color:var(--text-default-caption,#efefef);font-size:10px;font-family:sans-serif;">lg</span>
              <Radio
                v-for="st in ['default','hover','focus','disabled']" :key="'lg-'+st"
                size="lg"
                :selection="sel"
                :state="st"
              />
            </div>
          </div>
        </template>

      </div>
    `,
  }),
};
