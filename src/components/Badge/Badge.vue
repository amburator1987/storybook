<template>
  <span
    :class="[
      $style['kzn-c-badge'],
      $style[`kzn-c-badge--${variant}`],
    ]"
    :data-figma-node-id="figmaNodeId"
  >
    <slot>{{ defaultContent }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * Kaizen Badge — compact counter / label.
 *
 * Source of truth: Figma frame `badge` (node 6507:1994)
 * https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1994&t=dZErsjoqHF5sdRLw-0
 */
export type BadgeVariant = "brand" | "action" | "warrning" | "info";

const props = withDefaults(
  defineProps<{
    /** Figma property `badge`. */
    variant?: BadgeVariant;
  }>(),
  {
    variant: "brand",
  }
);

defineSlots<{
  /** Badge content. Defaults to `9` for counter, `Text` for text. */
  default?: () => unknown;
}>();

/** Mirrors the Figma sub-node IDs so designers can trace the rendered variant. */
const FIGMA_NODE_IDS: Record<BadgeVariant, string> = {
  brand: "6507:1995",
  action: "6507:2015",
  warrning: "6507:1997",
  info: "6507:1999",
};

const figmaNodeId = computed(() => FIGMA_NODE_IDS[props.variant]);
const defaultContent = computed(() => "99");
</script>

<style module src="./Badge.module.css"></style>
