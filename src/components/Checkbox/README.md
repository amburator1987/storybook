# Checkbox

## 1) Overview

Selection control za odabir jedne ili više opcija iz liste. Svaki checkbox radi neovisno, a odabrana stanja su vizualno prikazana. Koristi se za multi-select scenarije.

**Kada koristiti:** odabir jedne ili više stavki iz skupa opcija.  
**Kada ne koristiti:** za isključivi odabir (koristiti Radio), za toggle on/off akciju (koristiti Toggle/Switch).

---

## 2) Figma

[Checkbox component set — node 8360:1195](https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8360-1195)

---

## 3) API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'lg'` | `'sm'` | Veličina ikone: sm=16px, lg=24px |
| `selection` | `'unchecked' \| 'checked' \| 'undefined'` | `'unchecked'` | Stanje odabira; `undefined` = indeterminate |
| `state` | `'default' \| 'hover' \| 'focus' \| 'disabled'` | `'default'` | Interaktivno stanje |
| `hasLabel` | `boolean` | `true` | Prikazuje / skriva label pored ikone |

### Slots

| Slot | Purpose |
|------|---------|
| `default` | Tekst labela. Fallback: `"Label"` |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:selection` | `CheckboxSelection` | Emitira se pri kliku; payload je `'checked'` ili `'unchecked'` |

---

## 4) Usage examples

```vue
<!-- Basic unchecked checkbox -->
<Checkbox selection="unchecked" @update:selection="val => console.log(val)">
  Prihvati uvjete
</Checkbox>

<!-- Controlled checked + disabled -->
<Checkbox
  size="lg"
  selection="checked"
  state="disabled"
>
  Automatski odabrano
</Checkbox>

<!-- Indeterminate (select all) -->
<Checkbox
  selection="undefined"
  @update:selection="handleSelectAll"
>
  Odaberi sve
</Checkbox>

<!-- Without label -->
<Checkbox selection="checked" :hasLabel="false" />
```

---

## 5) Accessibility notes

- Nativni `<input type="checkbox">` je uvijek u DOM-u (visually hidden), što osigurava podršku za AT i keyboard.
- `indeterminate` DOM property se postavlja via `ref` kada je `selection === 'undefined'`.
- `disabled` state: `<input>` ima `:disabled` atribut; cursor je `not-allowed` na wrapperu.
- Focus ring se prikazuje pri `:focus-visible` (keyboard focus) — ne na mouse click.
- Za grupe checkboxova koristiti `<fieldset>` + `<legend>` na razini liste.

---

## 6) Token mapping

| Concern | CSS variable |
|---------|-------------|
| Gap (icon ↔ label) | `--spacing-lg` |
| Icon size sm | `--icon-size-sm` |
| Icon size lg | `--icon-size-default` |
| Box border radius | `--radius-xs` |
| Border width sm | `--border-width-1` |
| Border width lg | `--border-width-2` |
| Unchecked border (default) | `--icon-default-default` |
| Unchecked border (hover) | `--icon-default-default-hover` |
| Unchecked border (disabled/focus) | `--icon-disabled-default` |
| Checked bg (default) | `--icon-secondary-default` |
| Checked bg (hover) | `--icon-secondary-default-hover` |
| Checked/undefined bg (disabled) | `--icon-disabled-default` |
| Focus ring (unchecked) | `--border-default-focus` |
| Focus ring (checked/undefined) | `--border-secondary-focus` |
| Inner icon color | `--icon-secondary-on-color` |
| Inner icon color (disabled) | `--icon-disabled-on-color` |
| Label text | `--text-default-body` |
| Label text (disabled) | `--text-disabled-default` |
| Font family | `--font-family-primary` |
| Font weight | `--font-weight-primary` |
| Label sm | `--typography-font-size-paragraph-xs` / `--typography-line-height-paragraph-xs` / `--typography-letter-spacing-paragraph-xs` |
| Label lg | `--typography-font-size-paragraph-sm` / `--typography-line-height-paragraph-sm` / `--typography-letter-spacing-paragraph-sm` |

---

## 7) Storybook

Story lokacija: **Components / Checkbox**

Stories:
- `Default` — sm, unchecked, default
- `Unchecked` / `Checked` / `Indeterminate` — per-selection varijante
- `StateHover` / `StateFocus` / `StateDisabled` — per-state varijante
- `SizeSm` / `SizeLg` — size varijante
- `NoLabel` — bez labela
- `AllVariants` — puna matrica 2×3×4 (24 varijante)

Controls: `size`, `selection`, `state`, `hasLabel` — sve su dostupne kao Storybook controls.
