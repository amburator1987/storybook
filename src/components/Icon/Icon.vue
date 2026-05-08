<template>
  <span
    class="kzn-c-icon"
    :class="$style[`kzn-c-icon--${size}`]"
    :data-figma-node-id="figmaNodeId"
    role="img"
    :aria-label="label"
    :aria-hidden="label ? undefined : true"
  >
    <!-- Chevron down (16) -->
    <svg
      v-if="name === 'chevron-down'"
      :class="$style['kzn-c-icon__svg']"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <!-- Chevron up (16) -->
    <svg
      v-else-if="name === 'chevron-up'"
      :class="$style['kzn-c-icon__svg']"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10L8 6L12 10"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <!-- Document / list (accordion lead) -->
    <svg
      v-else-if="name === 'document'"
      :class="$style['kzn-c-icon__svg']"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 2.5h8A1.5 1.5 0 0113.5 4v9A1.5 1.5 0 0112 14.5H4A1.5 1.5 0 012.5 13V4A1.5 1.5 0 014 2.5z"
        stroke="currentColor"
        stroke-width="1.2"
      />
      <path
        d="M5 6.5h6M5 9.5h4"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
      />
    </svg>
    <!-- Activity — Figma reference glyph (8026:1509) -->
    <svg
      v-else-if="name === 'activity'"
      :class="$style['kzn-c-icon__svg']"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12h3.5l2-5 2.5 10 2.5-13 2 8H20"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * Kaizen icon — fixed glyphs, token-driven frame size.
 *
 * Figma: `icon` (8026:1509) — component property `size` = `small` | `default` | `lg` | `xl`
 * (layer 16 / 24 / 32 / 40 px → tokeni `icon-size/sm` … u `tokens.system-fixed.css`, vidi CLAUDE.md).
 * https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8026-1509
 *
 * Color: `icon/default/default` → `var(--icon-default-default)`.
 */
export type IconSize = "small" | "default" | "lg" | "xl";
export type IconName = "chevron-down" | "chevron-up" | "document" | "activity";

const props = withDefaults(
  defineProps<{
    name: IconName;
    /** Figma component property `size` (variant names `size=small` … `size=xl`). */
    size?: IconSize;
    /** When set, icon is exposed to assistive tech; otherwise decorative. */
    label?: string;
  }>(),
  {
    size: "small",
  }
);

const FIGMA_SIZE_NODE_IDS: Record<IconSize, string> = {
  small: "8026:1510",
  default: "8026:1508",
  lg: "8026:1513",
  xl: "8026:1523",
};

const figmaNodeId = computed(() => FIGMA_SIZE_NODE_IDS[props.size]);
</script>

<style module src="./Icon.module.css"></style>
