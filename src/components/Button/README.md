# Button

Buttons allow users to perform an action or navigate to another page. Four visual types for hierarchy (`primary`, `secondary`, `danger`, `tertiary`), three sizes, and optional leading/trailing icons.

Use Button for actions that advance a user flow. Avoid using it for navigation links — use an `<a>` with button styling instead.

## Figma

- Component set: https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8091-1786
- Specs: https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8268-444
- Node ID: `8091:1786`

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"primary" \| "secondary" \| "danger" \| "tertiary"` | `"primary"` | Figma property `type`. Visual hierarchy / semantic meaning. |
| `size` | `"sm" \| "md" \| "lg"` | `"sm"` | Figma property `size`. sm=32px, md=40px, lg=48px height. |
| `state` | `"default" \| "pressed" \| "disabled" \| "focus"` | `"default"` | Figma property `state`. `disabled` maps to native disabled; `focus` renders the focus ring statically (useful in Storybook docs/screenshots). |
| `iconLeftShow` | `boolean` | `true` | Figma property `icon-left-show`. Show/hide the leading icon. |
| `iconRightShow` | `boolean` | `false` | Figma property `icon-right-show`. Show/hide the trailing icon. |
| `iconName` | `IconName` | `"activity"` | Glyph name for the leading icon (overridable via `icon-left` slot). |
| `iconRightName` | `IconName` | `"activity"` | Glyph name for the trailing icon (overridable via `icon-right` slot). |

### Slots

| Slot | Purpose |
|------|---------|
| `default` | Button label text. Defaults to `"ButtonText"`. |
| `icon-left` | Custom leading icon element. Defaults to `<Icon :name="iconName" size="small" />`. |
| `icon-right` | Custom trailing icon element. Defaults to `<Icon :name="iconRightName" size="small" />`. |

### Events

The component is a native `<button>` — all native button events (`click`, `keydown`, etc.) work out of the box.

## Usage examples

**Basic primary button:**
```vue
<Button type="primary">Save changes</Button>
```

**Danger button with custom icon:**
```vue
<Button type="danger" size="md">
  <template #icon-left><Icon name="document" size="small" /></template>
  Delete account
</Button>
```

**Text-only secondary button (no icons):**
```vue
<Button type="secondary" :icon-left-show="false">Cancel</Button>
```

**Disabled state:**
```vue
<Button type="primary" state="disabled">Submit</Button>
```

## Accessibility notes

- Renders as a native `<button type="button">` — fully keyboard and screen reader accessible.
- `state="disabled"` sets the native `disabled` attribute; `aria-pressed` is set when `state="pressed"`.
- Disabled buttons are skipped from tab order by default (native browser behaviour).
- Focus rings use `outline` with `outline-offset: 4px` — never removed in `:focus-visible`.
- Icon slots are wrapped in `aria-hidden="true"` spans — decorative icons do not pollute the accessible name.

## Token mapping

| Concern | CSS variable |
|---------|-------------|
| primary background | `--surface-primary-default` |
| secondary background | `--surface-secondary-default` |
| danger background | `--surface-error-default` |
| tertiary background | `--surface-default-default-elevated` |
| primary text | `--text-default-body` |
| secondary text | `--text-on-color-body` |
| danger text | `--text-error-on-color` |
| border radius | `--radius-round` (9999px) |
| height sm/md/lg | `--scale-32` / `--scale-40` / `--scale-48` |
| padding left | `--spacing-lg` (8px) |
| padding right | `--spacing-xl` (12px) |
| icon gap | `--spacing-lg` (8px) |
| font size | `--typography-font-size-paragraph-sm` (14px) |
| focus ring width | `--border-width-2` (2px) |
| focus ring offset | `--scale-4` (4px) |
| hover overlay | `--states-hover` |
| pressed overlay | `--states-pressed` |
| disabled overlay | `--states-disabled` |

## Storybook

- Story location: `Components/Button`
- Stories: `Default`, `Primary`, `Secondary`, `Danger`, `Tertiary`, `Pressed`, `Disabled`, `Focus`, `Size: sm/md/lg`, `NoIcon`, `WithIconRight`, `BothIcons`, `AllVariants`
- `AllVariants` shows the full Figma matrix: 4 types × 4 states × 3 sizes + icon variants.
