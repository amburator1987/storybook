# Dialog

Modal dialog used to present information, notifications, or confirmation requests that temporarily suspend the user's interaction with the underlying interface until they address the content. Renders via `<Teleport to="body">` with a dark overlay backdrop.

Do not use for non-blocking messages (use Toast/Snackbar instead) or for complex multi-step flows (use a full-page view).

## Figma

- **Component set**: https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8322-1745
- **Node ID**: `8322:1745`
- **Properties** (Figma → Vue prop):
  - `FooterType` → `footerType` (`"Default"` = stacked buttons)
- **Variants**: 1 (`FooterType=Default`)

## API

### Props

| Prop         | Type         | Default     | Description                                             |
| ------------ | ------------ | ----------- | ------------------------------------------------------- |
| `open`       | `boolean`    | `false`     | Controls dialog visibility. Teleports overlay to body.  |
| `footerType` | `"Default"`  | `"Default"` | Figma property `FooterType`. Stacked-button footer.     |

### Slots

| Slot      | Purpose                                                                    |
| --------- | -------------------------------------------------------------------------- |
| `header`  | Dialog title — h6 typography, white, truncated. Default: `"Header"`.      |
| `default` | Body / description text — paragraph-xs, regular weight.                   |
| `actions` | Overrides the default two stacked buttons (primary + tertiary, `size=lg`). |

### Events

| Event     | Payload | Description                                              |
| --------- | ------- | -------------------------------------------------------- |
| `close`   | —       | Emitted on overlay click or tertiary button activation.  |
| `confirm` | —       | Emitted on primary button activation.                    |

## Usage examples

### Confirmation dialog

```vue
<script setup>
import { ref } from 'vue';
import Dialog from '@/components/Dialog/Dialog.vue';

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Delete item</Button>

  <Dialog
    :open="open"
    @close="open = false"
    @confirm="handleDelete(); open = false"
  >
    <template #header>Delete item?</template>
    This action is permanent and cannot be undone.
  </Dialog>
</template>
```

### Custom actions slot

```vue
<Dialog :open="open" @close="open = false">
  <template #header>Export data</template>
  Choose a format for your export.

  <template #actions>
    <Button type="primary" size="lg" @click="exportCSV">Export CSV</Button>
    <Button type="secondary" size="lg" @click="exportJSON">Export JSON</Button>
    <Button type="tertiary" size="lg" @click="open = false">Cancel</Button>
  </template>
</Dialog>
```

## Accessibility notes

- `role="dialog"` and `aria-modal="true"` are set on the panel.
- `aria-labelledby` links the panel to the title element (auto-generated stable ID per instance).
- Clicking the overlay backdrop emits `close` — consumers should bind `@close="open = false"`.
- ESC key is **not** handled natively (unlike the `<dialog>` element). Add a `@keydown.esc` at call site if needed:
  ```vue
  <Dialog :open="open" @close="open = false" @keydown.esc="open = false" />
  ```
- Ensure keyboard focus moves into the dialog when it opens. Use Vue's `<Transition>` `@after-enter` hook to call `.focus()` on the first interactive element.

## Token mapping

| Concern                | CSS variable                              |
| ---------------------- | ----------------------------------------- |
| Panel background       | `--surface-default-body`                  |
| Panel border-radius    | `--radius-md`                             |
| Panel vertical padding | `--spacing-3xl` (24px)                    |
| Section gap            | `--spacing-lg` (8px)                      |
| Section side padding   | `--spacing-3xl` (24px)                    |
| Title font family      | `--font-family-primary`                   |
| Title font weight      | `--font-weight-secondary` (Semi Bold)     |
| Title font size        | `--typography-font-size-h6` (20px)        |
| Title line height      | `--typography-line-height-h6` (24px)      |
| Title letter spacing   | `--typography-letter-spacing-h6`          |
| Title color            | `--text-default-headings`                 |
| Body font family       | `--font-family-primary`                   |
| Body font weight       | `--font-weight-primary` (Regular)         |
| Body font size         | `--typography-font-size-paragraph-xs` (12px)    |
| Body line height       | `--typography-line-height-paragraph-xs` (16px)  |
| Body letter spacing    | `--typography-letter-spacing-paragraph-default` |
| Body color             | `--text-default-body`                     |

## Storybook

- Title: **Components / Dialog**
- Stories: `Default`, `Interactive (toggle)`, `All Variants`
- Controls: `open` (boolean), `footerType` (select)
