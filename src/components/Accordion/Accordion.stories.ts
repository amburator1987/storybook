import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Accordion from './Accordion.vue';

const FIGMA_URL =
  'https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1674';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Accordion is a vertical list item for interactive actions or options, supporting open/closed ' +
          'states and rich visuals like icons and counters. Serves as the foundational building block ' +
          'for menus, selection panels, and sidebars.\n\n' +
          '**Props:** `type` (closed/open), `state` (default/hover/focus), `showLeadIcon`, `showSubhead`, `showTrailIcon`.\n\n' +
          `[Open in Figma](${FIGMA_URL})`,
      },
    },
    design: { type: 'figma', url: FIGMA_URL },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['closed', 'open'],
      description:
        'Figma property `type`. `open` = expanded item — yellow left accent bar, chevron-up, aria-expanded=true.',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus'],
      description: 'Figma property `State`.',
    },
    showLeadIcon: {
      control: 'boolean',
      description: 'Figma property `showLeadIcon`.',
    },
    showSubhead: {
      control: 'boolean',
      description: 'Figma property `showSubhead`.',
    },
    showTrailIcon: {
      control: 'boolean',
      description: 'Figma property `showTrailIcon`.',
    },
    leadIconName: {
      control: 'select',
      options: ['activity', 'document', 'chevron-down', 'chevron-up'],
      description: 'Glyph for the lead icon (overridable via `lead-icon` slot).',
    },
  },
  args: {
    type:          'closed',
    state:         'default',
    showLeadIcon:  true,
    showSubhead:   true,
    showTrailIcon: true,
    leadIconName:  'activity',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// ------------------------------------
// Type variants
// ------------------------------------

export const Closed: Story = {
  args: { type: 'closed' },
};

export const Open: Story = {
  args: { type: 'open' },
};

// ------------------------------------
// State variants
// ------------------------------------

export const Hover: Story = {
  args: { state: 'hover' },
};

export const Focus: Story = {
  args: { state: 'focus' },
};

// ------------------------------------
// Slot variants
// ------------------------------------

export const NoLeadIcon: Story = {
  name: 'Without lead icon',
  args: { showLeadIcon: false },
};

export const NoSubhead: Story = {
  name: 'Without subhead',
  args: { showSubhead: false },
};

export const Minimal: Story = {
  args: { showLeadIcon: false, showSubhead: false, showTrailIcon: false },
};

// ------------------------------------
// All variants — replica of Figma frame 6507:1674
// 414×416px · 6 rows × 48px · gap 16px
// ------------------------------------

/** Replica of the Figma component set frame — 2 types × 3 states. */
export const AllVariants: Story = {
  name: 'All Variants',
  parameters: {
    docs: {
      description: {
        story:
          'Replicira Figma component set frame (node 6507:1674). ' +
          'Rows 1–3: type=closed (default · hover · focus). ' +
          'Rows 4–6: type=open (default · hover · focus).',
      },
    },
  },
  render: () => ({
    components: { Accordion },
    template: `
      <div style="
        display:inline-flex;
        flex-direction:column;
        gap:16px;
        background:var(--surface-default-body,#1e2733);
        padding:24px 0;
        border-radius:4px;
      ">
        <Accordion type="closed" state="default">Accordion</Accordion>
        <Accordion type="closed" state="hover">Accordion</Accordion>
        <Accordion type="closed" state="focus">Accordion</Accordion>
        <Accordion type="open"   state="default">Accordion</Accordion>
        <Accordion type="open"   state="hover">Accordion</Accordion>
        <Accordion type="open"   state="focus">Accordion</Accordion>
      </div>
    `,
  }),
};
