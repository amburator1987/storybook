# Datepicker

Kalendarski odabir datuma. Navigacija po mjesecima strelicama lijevo/desno; klik na dan bira datum.

## Kada koristiti

- Unos datuma u formi (rezervacija, filteri, zakazivanje)
- Ne koristiti za raspon datuma — za to je potrebna zasebna RangePicker varijanta

## Figma

[Datepicker — node 8337:1960](https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8337-1960)

## API

### Props

| Prop         | Type   | Default     | Description                        |
|--------------|--------|-------------|------------------------------------|
| `modelValue` | `Date` | `undefined` | Odabrani datum. Koristi `v-model`. |

### Events

| Event                | Payload | Description                    |
|----------------------|---------|--------------------------------|
| `update:modelValue`  | `Date`  | Emituje se klikom na dan. |

## Primjeri

```vue
<!-- Bez selekcije -->
<Datepicker />

<!-- Sa predodabranim datumom -->
<Datepicker v-model="selectedDate" />
```

## Accessibility

- `<header>` sa nav buttonima koji imaju `aria-label`
- Day cells imaju `aria-pressed` i `aria-label` sa punim datumom
- `role="grid"` na griidu dana, `role="columnheader"` na danima sedmice
- `focus-visible` outline na nav i day cellovima

## Token mapping

| Concern                | CSS variable                            |
|------------------------|-----------------------------------------|
| Container bg           | `--surface-default-body`                |
| Container radius       | `--radius-sm`                           |
| Container padding      | `--spacing-2xl`                         |
| Header height          | `--spacing-5xl`                         |
| Nav icon color         | `--icon-default-default`                |
| Month label font-size  | `--typography-font-size-h6`             |
| Month label color      | `--text-default-headings`               |
| Cell size              | `--spacing-5xl` (via aspect-ratio: 1)   |
| Cell radius            | `--radius-s`                            |
| Cell border            | `--border-width-1` `--border-default-default` |
| Selected cell bg       | `--surface-default-default`             |
| Indicator dot color    | `--surface-secondary-default`           |
| Day text color         | `--text-default-label`                  |
| Gap between cells      | `--border-width-1`                      |

## Storybook

`Components / Datepicker`

- **Default** — tekući mjesec bez selekcije
- **With Selection** — danas predodabran (filled cell + indicator dot)
- **Interactive** — v-model demo sa prikazom odabranog datuma ispod pickera
