# Checkbox

## 1) Overview

Kontrola odabira koja korisniku omogućava da bira jednu ili više opcija iz liste. Svaki checkbox funkcioniše samostalno — odabrani state je vizuelno prikazan bojom ikone i oznake.

**Kada koristiti:** višestruki odabir opcija, filteri, forme.  
**Kada ne koristiti:** isključiv odabir jedne opcije (koristiti Radio), potvrdu radnje (koristiti Toggle/Switch).

---

## 2) Figma

- **Link:** https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8287-1739
- **Node ID:** `8287:1739`

---

## 3) API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checkbox` | `"checked" \| "unchecked" \| "disabled"` | `"unchecked"` | Figma property `checkbox`. Vizuelni i interaktivni state. |
| `size` | `"sm" \| "md" \| "lg"` | `"sm"` | Figma property `size`. Kontroliše veličinu ikone i tipografiju oznake. |

### Slots

| Slot | Svrha |
|------|-------|
| `default` | Tekst oznake (label). Default: `"Label"`. |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:checkbox` | `"checked" \| "unchecked"` | Emituje se pri kliku; disabled state ne emituje. |

Primjer `v-model:checkbox`:

```vue
<Checkbox v-model:checkbox="myState" size="md">Prihvatam uslove</Checkbox>
```

---

## 4) Usage examples

### Basic — nekontrolisani prikaz

```vue
<Checkbox checkbox="unchecked" size="sm">Newsletter</Checkbox>
<Checkbox checkbox="checked" size="sm">Prihvatam uvjete</Checkbox>
<Checkbox checkbox="disabled" size="sm">Nedostupno</Checkbox>
```

### Kontrolisana upotreba (v-model)

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { CheckboxState } from './Checkbox.vue';

const agree = ref<CheckboxState>('unchecked');
</script>

<template>
  <Checkbox v-model:checkbox="agree" size="md">
    Prihvatam uslove korišćenja
  </Checkbox>
  <p>State: {{ agree }}</p>
</template>
```

### Edge case — veličine u listi opcija

```vue
<div style="display:flex;flex-direction:column;gap:8px;">
  <Checkbox checkbox="checked" size="lg">Velika opcija (lg)</Checkbox>
  <Checkbox checkbox="unchecked" size="md">Srednja opcija (md)</Checkbox>
  <Checkbox checkbox="disabled" size="sm">Mala onemogućena (sm)</Checkbox>
</div>
```

---

## 5) Accessibility notes

- Koristi nativni `<input type="checkbox">` koji je vizuelno skriven ali dostupan screen readerima i tastaturnoj navigaciji.
- Cijeli `<label>` element je klikabilan — klik na oznaku (tekst) mijenja state.
- **Keyboard:** `Space` toggleuje state; `Tab` / `Shift+Tab` za navigaciju.
- **Focus ring:** vidljiv outline via `:focus-visible` na vizuelnoj ikoni (ne na nativnom inputu).
- `disabled` state: nativni `disabled` atribut na inputu, `cursor: not-allowed` na labelu.
- ARIA: nema potrebe za ručnim `aria-*` atributima — nativni `<input type="checkbox">` osigurava semantiku.
- Kontrast: `--icon-secondary-default` (gold) na tamnoj pozadini zadovoljava WCAG AA 4.5:1 za veliku ikonografiju.

---

## 6) Token mapping

| Concern | CSS variable |
|---------|-------------|
| Gap (icon ↔ label) | `--spacing-lg` |
| Icon size (sm) | `--icon-size-sm` |
| Icon size (md) | `--icon-size-default` |
| Icon size (lg) | `--icon-size-lg` |
| Icon color — checked | `--icon-secondary-default` |
| Icon color — unchecked | `--icon-default-default` |
| Icon color — unchecked hover | `--icon-default-default-hover` |
| Icon color — disabled | `--icon-disabled-default` |
| Label color — active | `--text-default-body` |
| Label color — disabled | `--text-disabled-default` |
| Label font family | `--font-family-primary` |
| Label font size (sm) | `--typography-font-size-paragraph-xs` |
| Label font size (md) | `--typography-font-size-paragraph-sm` |
| Label font size (lg) | `--typography-font-size-paragraph-lg` |
| Label line height (sm) | `--typography-line-height-paragraph-xs` |
| Label line height (md) | `--typography-line-height-paragraph-sm` |
| Label line height (lg) | `--typography-line-height-paragraph-lg` |
| Focus ring border | `--border-secondary-focus` |
| Focus ring width | `--border-width-2` |
| Focus ring offset | `--scale-4` |
| Icon border radius | `--radius-xs` |

---

## 7) Storybook

- **Lokacija:** `Components/Checkbox`
- **Stories:** `Default`, `Checked`, `Unchecked`, `Disabled`, `Size: sm`, `Size: md`, `Size: lg`, `AllVariants`
- **Controls:** `checkbox` (select), `size` (select), `default` slot (text)
- `AllVariants` story prikazuje kompletnu Figma matricu 3 stanja × 3 veličine
