# Badge

Compact label / counter component used to flag or count items the user
should notice. Recreated 1:1 from the Figma `badge` component set.

## Figma

- **Component set**: https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1994&t=hVNG5MaEmQHZtlRa-0
- **Node ID**: `6507:1994`
- **Properties** (Figma → Vue prop):
  - `badge` → `variant`
- **Variants** (4 total): `brand|action|warrning|info`

| `variant` | Figma node ID | Size  |
| --------- | ------------- | ----- |
| brand     | `6507:1995`   | 16×16 |
| action    | `6507:2015`   | 16×16 |
| warrning  | `6507:1997`   | 16×16 |
| info      | `6507:1999`   | 16×16 |

> Figma component description: *"Product description, badge used to counter
> or number something, good for classifying things that matter to user to
> see and act on."*

## API

### Props

| Prop      | Type                                          | Default     | Description                                                          |
| --------- | --------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| `variant` | `"brand" \| "action" \| "warrning" \| "info"` | `"brand"`   | Figma property `badge`. The `warrning` typo is preserved from Figma. |

### Slots

| Slot      | Purpose                                                                                |
| --------- | -------------------------------------------------------------------------------------- |
| `default` | Badge content. When omitted, renders `99` (Figma default). |

### Events

None — the badge is non-interactive.

## Usage examples

### Default (brand counter)

```vue
<Badge />
```

### Numeric counter

```vue
<Badge variant="info">99</Badge>
```

> Note: current implementation matches the `6507:1994` frame (counter-only). No `text` variant prop.

## Accessibility notes

- Renders as a non-interactive `<span>`.
- Default slot is treated as real content. If used purely decoratively,
  add `aria-hidden="true"` at the call site.
- Color pairs (`surface/* on text/*-on-color`) come from the design system,
  so contrast is owned by the token layer — the component never decides
  contrast on its own.
- The element exposes `data-figma-node-id="<variant-node>"` so designers
  can match the rendered DOM back to the Figma source.

## Token mapping

CSS variable names are exactly as written in the Figma Code panel,
kebab-cased because the JSON-to-CSS pipeline replaces `/` with `-`.
No collection prefix is added.

### Colors (layered CSS)

Load redosled: `tokens.primitive.css` → `tokens.alias.{mozzart|germania}.css` →
`tokens.mapped.{dark|light}.css`. Semantičke boje u mapped fajlu su često
`var(--primary-400)` itd.; vrednost `--primary-400` dolazi iz aktivnog alias sloja.

| Concern                         | Figma token              | CSS variable                    |
| ------------------------------- | ------------------------ | ------------------------------- |
| Background — brand              | `surface/primary/default`     | `--surface-primary-default`     |
| Background — action             | `surface/secondary/default`   | `--surface-secondary-default`   |
| Background — warrning           | `surface/error/default`       | `--surface-error-default`       |
| Background — info               | `surface/information/default` | `--surface-information-default` |
| Text — brand · text             | `text/default/headings`       | `--text-default-headings`       |
| Text — brand · counter          | `text/default/body`           | `--text-default-body`           |
| Text — action (any)             | `text/primary/on-color`       | `--text-primary-on-color`       |
| Text — warrning (any)           | `text/error/on-color`         | `--text-error-on-color`         |
| Text — info (any)               | `text/information/on-color`   | `--text-information-on-color`   |
| Radius (pill)                   | `radius/xl`                   | `--radius-xl`                   |
| Font family (brand-aware)       | `font/Family-primary`         | `--font-family-primary`         |
| Font weight (brand-aware)       | `font/Weight-secondary`       | `--font-weight-secondary`       |

### Sizing & spacing

| Concern                                     | Figma token                       | CSS variable                          | Source file                |
| ------------------------------------------- | --------------------------------- | ------------------------------------- | -------------------------- |
| Counter min/max width                       | `icon-size/sm` (16)               | `--icon-size-sm`                      | `tokens.system-fixed.css`  |
| Padding — brand counter                     | `padding/3xs` (0)                 | `--padding-3xs`                       | `tokens.responsive.css`    |
| Padding — action/warrning/info counter      | *literal `4px` in Figma*          | `4px` (literal)                       | inline                     |
| Padding — text variants                     | `padding/s` (8)                   | `--padding-s`                         | `tokens.responsive.css`    |
| Font size                                   | `typography/font-size/label`      | `--typography-font-size-label`      | `tokens.responsive.css`    |
| Line height                                 | `typography/line-height/label`    | `--typography-line-height-label`      | `tokens.responsive.css`    |
| Letter spacing                              | `typography/letter-spacing/label` | `--typography-letter-spacing-label`   | `tokens.responsive.css`    |

> **Why brand-aware font tokens instead of the Figma names?** Figma's Code
> panel references `--typography/family/body/font-family` and
> `--typography/weight/font-weight-secondary`, but those aliases do not exist
> in the current JSON exports. The closest existing aliases that *do* switch
> with the active brand are `--font-family-primary` and `--font-weight-secondary`
> from `core-alias`, so the badge follows the brand automatically (Mozzart →
> Proxima Nova, Germania → Roboto, etc.).

## Storybook

- Title: **Components / Badge**
- Stories: `Default`, `Counter`, `Text`, `AllVariants`
