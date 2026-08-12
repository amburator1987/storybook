# Snackbar

Toast notifikacija koja obaveštava korisnika o izvršenoj akciji. Traje određeni period i sklanja se sama; `action` varijanta se dodatno može manuelno skloniti klikom na close ikonicu. Ne koristiti za blokirajuće greške koje zahtevaju potvrdu — za to koristiti `Dialog`.

## Figma

- **Component set**: https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8621-1957
- **Node ID**: `8621:1957`
- **Properties** (Figma → Vue prop):
  - `snackbar` → `snackbar`
- **Variants** (2 total): `action`, `noAction`

## API

### Props

| Prop       | Type                     | Default    | Description                                                              |
| ---------- | ------------------------ | ---------- | ------------------------------------------------------------------------- |
| `snackbar` | `"action" \| "noAction"` | `"action"` | Figma property `snackbar`. `action` shows a close icon; `noAction` does not. |

### Slots

| Slot      | Purpose                                                                   |
| --------- | -------------------------------------------------------------------------- |
| `default` | Message text. Defaults to `"Single line description for user to pay attention"`. |

### Events

| Event   | Payload | Description                                          |
| ------- | ------- | ----------------------------------------------------- |
| `close` | none    | Emitted when the close icon is clicked (`action` only). |

## Usage examples

### Basic (auto-dismiss, no manual close)

```vue
<Snackbar snackbar="noAction">Promena je uspešno sačuvana</Snackbar>
```

### With manual close

```vue
<Snackbar snackbar="action" @close="dismiss">
  Fajl je uspešno otpremljen
</Snackbar>
```

## Accessibility notes

- Root renders with `role="status"` and `aria-live="polite"` so screen readers announce the message when it appears.
- The close icon renders as a real `<button type="button">` with `aria-label="Close"`, so it's keyboard-focusable and activatable via Enter/Space natively.
- The `Icon` glyph inside the close button is decorative (`aria-hidden`) since the button itself carries the label.

## Token mapping

| Concern                | CSS variable                              |
| ----------------------- | ------------------------------------------ |
| Background             | `--surface-default-body`                  |
| Border                  | `--border-width-1` / `--border-default-default` |
| Border radius           | `--border-radius-s`                       |
| Padding                 | `--spacing-2xl` (16px)                    |
| Gap (message ↔ close)   | `--spacing-2xl` (16px)                    |
| Message font family     | `--font-family-primary`                   |
| Message font weight     | `--font-weight-primary`                   |
| Message font size       | `--typography-font-size-paragraph-sm`     |
| Message line height     | `--typography-line-height-paragraph-sm`   |
| Message letter spacing  | `--typography-letter-spacing-paragraph-default` |
| Message color           | `--text-default-headings`                 |
| Close icon color        | `--icon-default-default`                  |
| Close icon size         | `--icon-size-sm` (16px, via `Icon size="small"`) |

## Storybook

- Title: **Components / Snackbar**
- Stories: `Default`, `Action`, `NoAction`, `All Variants`
