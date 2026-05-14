# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

This is a **Vue 3** component library (Single File Components + TypeScript) built with **Vite** and **Storybook** using `@storybook/vue3-vite`. Token pipeline uses **Style Dictionary**. Multi-brand (Mozzart/Germania) and multi-theme (dark/light) support via CSS custom properties.

## Development Commands

npm run tokens — Build design tokens once
npm run tokens:watch — Watch token JSON and rebuild CSS variables
npm run storybook — Start Storybook
npm run build — Build the project
npm run build-storybook — Build Storybook for production

## Architecture & Structure

### Component Development Workflow
- Components live in `src/components/<Name>/`
- Each component includes:
  - `ComponentName.vue` — Vue 3 SFC (`<script setup lang="ts">`)
  - `ComponentName.module.css` — BEM-style CSS Modules with design tokens
  - `ComponentName.stories.ts` — Storybook stories with `autodocs` tag
  - Optional `README.md` — usage, Figma link, API, token mapping
- Global styles imported in `.storybook/preview.ts` and `src/main.ts`

### Token Pipeline

- Token sources: `tokens/json/**` (Token Studio exports per collection)
- Build config: `tokens/build.mjs` (Style Dictionary)
- Output files in `src/styles/`:
  - `tokens.primitive.css` — raw values (colors, scale)
  - `tokens.alias.mozzart.css` — Mozzart brand aliases
  - `tokens.alias.germania.css` — Germania brand aliases
  - `tokens.mapped.dark.css` — dark theme semantic tokens
  - `tokens.mapped.light.css` — light theme semantic tokens
  - `tokens.system-fixed.css` — fixed values (radius, icon sizes, border widths)
  - `tokens.responsive.css` — responsive typography/spacing (@media queries)
  - `fonts.css` — @font-face for Proxima Nova (Mozzart)
  - `reset.css` — CSS reset

### Token Naming Rules
- CSS variable names must match exactly as shown in Figma Code panel
- No prefixes added (no kzn-, core-mapped-, or any other prefix)
- Example: Figma shows var(--surface-primary-default) → write exactly var(--surface-primary-default)

### Theme & Brand Switching
- Brand switching: data-brand="mozzart|germania" on html element
- Theme switching: data-theme="dark|light" on html element
- Viewport: Storybook viewport addon (mobile 390px / tablet 768px / desktop 1280px / desktop-large 1920px)
- Google Fonts (Roboto for Germania) imported in index.html head

### Token Collection Hierarchy
core-primitive (raw values)
      ↓
core-alias/Mozzart or Germania (brand decisions)
      ↓
core-mapped/dark or light (theme decisions)
      +
system-fixed (fixed, brand/theme agnostic)
system-responsive (responsive, @media per breakpoint)

### Responsive Breakpoints
- :root → desktop (1628px, default)
- @media (max-width: 768px) → tablet
- @media (max-width: 414px) → mobile
- @media (min-width: 2550px) → desktop-large

## Figma MCP - obavezan redosled čitanja komponente
Pre kreiranja bilo koje komponente obavezno pozovi redom:
1. get_design_context — layout, dimenzije, tokeni, varijante
2. get_variable_defs — tačne CSS varijable
3. get_metadata — props, booleani, slotovi

Ne kreiraj komponentu dok nisi pozvao sva tri toola.

## Čitanje tokena i propsa
- Token nazivi moraju biti tačno kako ih prikazuje Figma Code panel — bez izmena
- Props, varijante i booleani moraju biti tačno kako su definisani u Figmi — bez izmišljanja
- Uvek koristi desktop vrednosti za tokene (neki frejmovi su snimljeni u mobile modu — ignoriši mobile, uzmi desktop kao default)

## Component Documentation Template

Svaka komponenta mora imati src/components/<Name>/README.md:

### 1) Overview
- Šta je komponenta (1-2 rečenice)
- Kada koristiti / kada ne koristiti

### 2) Figma
- Link do komponente u Figmi (direktan node link)
- Node ID

### 3) API

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|

#### Slots
| Slot | Purpose |
|------|---------|

#### Events
| Event | Payload | Description |
|-------|---------|-------------|

### 4) Usage examples
Minimum 2 primera — basic i edge case.

### 5) Accessibility notes
- Keyboard interaction
- ARIA atributi
- Contrast requirements

### 6) Token mapping
| Concern | CSS variable |
|---------|-------------|

### 7) Storybook
- Story location
- Controls/argTypes napomene

## Storybook Stories
- Svaka komponenta mora imati autodocs tag u meta objektu
- Stories moraju imati: Default, AllVariants, i po jedna story po varijanti iz Figme
- parameters.design.url mora sadržati Figma link ka komponenti

## Key Dependencies
- Vue 3, Vite, TypeScript
- Storybook @storybook/vue3-vite
- Style Dictionary (token build)
- Proxima Nova (local OTF, Mozzart)
- Roboto (Google Fonts, Germania)

# Dimenzije ikonica
Uvek koristi token vrednosti za width i height ikonica, ne vrednosti iz SVG viewBox ili bounding box-a. Dimenzije se čitaju iz Figma Layer properties, ne iz SVG path-a.


## Props pravila
- Ako je Figma property enum (npr. state: default, pressed, disabled, focus) → Vue prop mora biti string union type, NIKAD boolean
- Boolean props se prave SAMO ako je Figma property eksplicitno boolean (true/false toggle)
- Ne konvertuj enum varijante u više boolean propsa
- Imena propsa moraju biti tačno kako su nazvani u Figma properties panelu — bez izmišljanja, bez preimenovanja
- Ako Figma kaže `icon-right-show` → prop se zove `iconRightShow` (camelCase konverzija je jedina dozvoljena izmena)
- Nikad ne hardkoduj dimenzionalne vrednosti (px, rem) — uvek koristi token iz Figme
- border-width, outline-width, gap, padding, margin — sve mora biti token