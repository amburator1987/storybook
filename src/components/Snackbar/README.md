# Snackbar

Toast notifikacija koja obaveštava korisnika o izvršenoj akciji. Traje određeni period i sklanja se sama; može se manuelno skloniti klikom na close ikonicu. `intent` određuje boju (Neutral / Attention / Error), a opcionalno dugme (`showButton`) pokreće dodatnu akciju. Ne koristiti za blokirajuće greške koje zahtevaju potvrdu — za to koristiti `Dialog`.

## Figma

- **Component set**: https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8621-1957
- **Node ID**: `8621:1957`
- **Properties** (Figma → Vue prop):
  - `Intent` → `intent`
  - `ShowButton` → `showButton`
- **Variants** (3 total): `Neutral`, `Attention`, `Error`

## API

### Props

| Prop         | Type                                   | Default     | Description                                                    |
| ------------ | --------------------------------------- | ----------- | ---------------------------------------------------------------- |
| `intent`     | `"Neutral" \| "Attention" \| "Error"`   | `"Neutral"` | Figma property `Intent`. Drives background/text/icon color.      |
| `showButton` | `boolean`                                | `true`      | Figma property `ShowButton`. Shows the inline action button.     |

### Slots

| Slot      | Purpose                                                                           |
| --------- | ---------------------------------------------------------------------------------- |
| `heading` | Bold heading text. Defaults to `"Heading"`.                                       |
| `default` | Message/description text. Defaults to `"Single line description for user to pay attention"`. |
| `button`  | Label for the action button (only rendered when `showButton` is `true`). Defaults to `"Button"`. |

### Events

| Event    | Payload | Description                                              |
| -------- | ------- | ---------------------------------------------------------- |
| `close`  | none    | Emitted when the close icon is clicked.                    |
| `action` | none    | Emitted when the action button is clicked (`showButton` only). |

## Usage examples

### Basic (auto-dismiss, no action button)

```vue
<Snackbar intent="Neutral" :show-button="false" @close="dismiss">
  Promena je uspešno sačuvana
</Snackbar>
```

### With heading and action button

```vue
<Snackbar intent="Error" @close="dismiss" @action="retryUpload">
  <template #heading>Upload failed</template>
  Fajl nije uspešno otpremljen, pokušajte ponovo.
  <template #button>Retry</template>
</Snackbar>
```

## Accessibility notes

- Root renders with `role="status"` and `aria-live="polite"` so screen readers announce the message when it appears.
- The close icon renders as a real `<button type="button">` with `aria-label="Close"`, so it's keyboard-focusable and activatable via Enter/Space natively.
- The action button reuses the `Button` component (`tertiary` for Neutral/Attention, `danger` for Error), which already carries its own focus ring and disabled handling.
- The `Icon` glyphs inside both buttons are decorative; the buttons themselves carry the accessible label/content.

## Token mapping

| Concern                          | CSS variable                                                        |
| --------------------------------- | ----------------------------------------------------------------------- |
| Border                            | `--border-width-1` / `--border-default-default`                        |
| Border radius                     | `--border-radius-s`                                                    |
| Elevation                         | `--elevation-elevation-02-position-x/-position-y/-blur/-spread/-shade` |
| Padding                           | `--spacing-2xl` (16px)                                                  |
| Gap (root: content ↔ close)       | `--spacing-2xl` (16px)                                                  |
| Gap (icon ↔ main content)         | `--spacing-xl` (12px)                                                  |
| Gap (heading/message/button)      | `--spacing-lg` (8px)                                                    |
| Background — Neutral              | `--surface-default-body`                                               |
| Background — Attention            | `--surface-warrning-on-color`                                          |
| Background — Error                | `--surface-error-on-color`                                             |
| Heading/message color — Neutral   | `--text-default-headings`                                              |
| Heading/message color — Attention | `--text-on-color-headings`                                             |
| Heading/message color — Error     | `--text-error-default`                                                 |
| Icon color — Neutral              | `--icon-default-default` (hover: `--icon-default-default-hover`)       |
| Icon color — Attention            | `--icon-warrning-default` (hover: `--icon-warrning-default-hover`)     |
| Icon color — Error                | `--icon-error-default` (hover: `--icon-error-default-hover`)           |
| Heading font                      | `--font-family-primary` / `--font-weight-secondary` / `--typography-font-size-h6` / `--typography-line-height-h6` |
| Message font                      | `--font-family-primary` / `--font-weight-primary` / `--typography-font-size-paragraph-default` / `--typography-line-height-paragraph-default` |
| Leading/close icon size           | `--icon-size-default` (24px, via `Icon size="default"`)                |

## Storybook

- Title: **Components / Snackbar**
- Stories: `Default`, `Neutral`, `Attention`, `Error`, `Without Button`, `All Variants`
- `intent` control is a select (`Neutral` / `Attention` / `Error`); `showButton` is a boolean toggle.
