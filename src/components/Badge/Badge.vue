<template>
  <span
    :class="[
      $style['kzn-c-badge'],
      $style[`kzn-c-badge--${style}`],
      $style[`kzn-c-badge--${type}`],
    ]"
  >
    <slot v-if="type === 'text'">99</slot>
  </span>
</template>

<script setup lang="ts">
export type BadgeStyle = "brand" | "action" | "warrning" | "info" | "neutral";
export type BadgeType  = "text" | "dot";

withDefaults(
  defineProps<{
    /** Figma property `style`. */
    style?: BadgeStyle;
    /** Figma property `type`. `dot` = 8×8 pill, no text. */
    type?: BadgeType;
  }>(),
  {
    style: "brand",
    type: "text",
  }
);

defineSlots<{
  default?: () => any;
}>();
</script>

<style module src="./Badge.module.css"></style>
