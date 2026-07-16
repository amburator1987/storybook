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
    <!-- Chevron left (16) -->
    <svg
      v-else-if="name === 'chevron-left'"
      :class="$style['kzn-c-icon__svg']"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4L6 8L10 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <!-- Chevron right (16) -->
    <svg
      v-else-if="name === 'chevron-right'"
      :class="$style['kzn-c-icon__svg']"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <!-- Activity — Figma reference glyph (8026:1509), exact vector path -->
    <svg
      v-else-if="name === 'activity'"
      :class="$style['kzn-c-icon__svg']"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 1.66667C15.7174 1.66667 16.3543 2.12572 16.5811 2.80629L25 28.0629L28.4189 17.8063C28.6457 17.1257 29.2826 16.6667 30 16.6667H36.6667C37.5871 16.6667 38.3333 17.4129 38.3333 18.3333C38.3333 19.2538 37.5871 20 36.6667 20H31.2013L26.5811 33.8604C26.3543 34.5409 25.7174 35 25 35C24.2826 35 23.6457 34.5409 23.4189 33.8604L15 8.6038L11.5811 18.8604C11.3543 19.5409 10.7174 20 10 20H3.33333C2.41286 20 1.66667 19.2538 1.66667 18.3333C1.66667 17.4129 2.41286 16.6667 3.33333 16.6667H8.79873L13.4189 2.80629C13.6457 2.12572 14.2826 1.66667 15 1.66667Z"
        fill="currentColor"
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
export type IconName = "chevron-down" | "chevron-up" | "chevron-left" | "chevron-right" | "document" | "activity";

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
