# Badge

Compact label or visual-indicator component used to flag or count items. Two types: `text` (pill with label) and `dot` (solid 8×8 circle). Use `text` for numeric counters or short labels; use `dot` for presence / activity indicators where no text is needed.

## Figma

- **Component set**: https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1994
- **Node ID**: `6507:1994`
- **Properties** (Figma → Vue prop):
  - `style` → `style`
  - `type` → `type`
- **Variants** (8 total): 4 styles × 2 types

## API

### Props

| Prop    | Type                                           | Default   | Description                                                          |
| ------- | ---------------------------------------------- | --------- | -------------------------------------------------------------------- |
| `style` | `"brand" \| "action" \| "warrning" \| "info"` | `"brand"` | Figma property `style`. `warrning` preserves the original Figma typo. |
| `type`  | `"text" \| "dot"`                              | `"text"`  | Figma property `type`. `dot` = 8×8 pill with no text.                |

### Slots

| Slot      | Purpose                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| `default` | Text content for `type="text"`. Ignored when `type="dot"`. Defaults to `99`. |

### Events

None — the badge is non-interactive.

## Usage examples

### Text badge (counter)

```vue
<Badge style="brand">99</Badge>
<Badge style="info">3</Badge>
```

### Dot badge (indicator)

```vue
<Badge style="action" type="dot" />
<Badge style="warrning" type="dot" />
```

## Accessibility notes

- Renders as a non-interactive `<span>`.
- For `type="dot"`, add `aria-label` at the call site when the dot carries semantic meaning (e.g. "3 unread notifications").
- Dot badges used purely for decoration should receive `aria-hidden="true"` at the call site.
- Color contrast is owned by the token layer — the component uses semantic surface/text pairs from the design system.

## Token mapping

| Concern               | CSS variable                    |
| --------------------- | ------------------------------- |
| Background — brand    | `--surface-primary-default`     |
| Background — action   | `--surface-secondary-default`   |
| Background — warrning | `--surface-error-default`       |
| Background — info     | `--surface-information-default` |
| Text — brand          | `--text-default-body`           |
| Text — action         | `--text-primary-on-color`       |
| Text — warrning       | `--text-error-on-color`         |
| Text — info           | `--text-information-on-color`   |
| Border radius         | `--radius-xl`                   |
| Font family           | `--font-family-primary`         |
| Font weight           | `--font-weight-secondary`       |
| Font size             | `--typography-font-size-label`  |
| Line height           | `--typography-line-height-label` |
| Letter spacing        | `--typography-letter-spacing-label` |
| Text height / min-w   | `--icon-size-sm` (16px)         |
| Horizontal padding    | `--spacing-md` (4px)            |
| Dot size              | `--spacing-lg` (8px)            |

## Storybook

- Title: **Components / Badge**
- Stories: `Default`, `Brand`, `Action`, `Warrning`, `Info`, `Type: text`, `Type: dot`, `All Variants`
