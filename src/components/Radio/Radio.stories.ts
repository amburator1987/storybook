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
// All Variants — tačna replika Figma frame-a (node 8364:1323)
// Frame: 806×96px — koordinate iz Figma metadata
// ------------------------------------

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: {
    docs: {
      description: {
        story:
          'Tačna replika Figma frame-a (node 8364:1323, 806×96px). ' +
          'Pozicije su preuzete direktno iz Figma metadata koordinata.',
      },
    },
  },
  render: () => ({
    components: { Radio },
    template: `
      <div style="position:relative;width:806px;height:96px;background:var(--surface-default-body,#1e2733);">

        <!-- Row 1 (y=20, sm): unchecked ×4 states, checked ×4 states -->
        <Radio style="position:absolute;left:43px;top:20px;"  size="sm" selection="unchecked" state="default"  />
        <Radio style="position:absolute;left:114px;top:20px;" size="sm" selection="unchecked" state="hover"    />
        <Radio style="position:absolute;left:185px;top:20px;" size="sm" selection="unchecked" state="focus"    />
        <Radio style="position:absolute;left:256px;top:20px;" size="sm" selection="unchecked" state="disabled" />
        <Radio style="position:absolute;left:327px;top:20px;" size="sm" selection="checked"   state="default"  />
        <Radio style="position:absolute;left:398px;top:20px;" size="sm" selection="checked"   state="hover"    />
        <Radio style="position:absolute;left:469px;top:20px;" size="sm" selection="checked"   state="focus"    />
        <Radio style="position:absolute;left:540px;top:20px;" size="sm" selection="checked"   state="disabled" />

        <!-- Row 1 cont. (y=16, lg): unchecked default + hover -->
        <Radio style="position:absolute;left:611px;top:16px;" size="lg" selection="unchecked" state="default"  />
        <Radio style="position:absolute;left:695px;top:16px;" size="lg" selection="unchecked" state="hover"    />

        <!-- Row 2 (y=56, lg): unchecked focus+disabled, checked ×4 states -->
        <Radio style="position:absolute;left:159px;top:56px;" size="lg" selection="unchecked" state="focus"    />
        <Radio style="position:absolute;left:243px;top:56px;" size="lg" selection="unchecked" state="disabled" />
        <Radio style="position:absolute;left:327px;top:56px;" size="lg" selection="checked"   state="default"  />
        <Radio style="position:absolute;left:411px;top:56px;" size="lg" selection="checked"   state="hover"    />
        <Radio style="position:absolute;left:495px;top:56px;" size="lg" selection="checked"   state="focus"    />
        <Radio style="position:absolute;left:579px;top:56px;" size="lg" selection="checked"   state="disabled" />

      </div>
    `,
  }),
};
