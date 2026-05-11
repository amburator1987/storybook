<template>
  <button
    type="button"
    :class="[
      $style['kzn-c-button'],
      $style[`kzn-c-button--${type}`],
      { [$style['kzn-c-button--pressed']]: state === 'pressed' },
      { [$style['kzn-c-button--focus']]: state === 'focus' },
    ]"
    :disabled="state === 'disabled'"
    :aria-pressed="state === 'pressed' ? true : undefined"
  >
    <span v-if="!hideIcon" :class="$style['kzn-c-button__icon']" aria-hidden="true">
      <slot name="icon">
        <Icon :name="iconName" :size="iconSize" />
      </slot>
    </span>
    <span :class="$style['kzn-c-button__label']">
      <slot>ButtonText</slot>
    </span>
    <span v-if="showIconRight" :class="$style['kzn-c-button__icon']" aria-hidden="true">
      <slot name="icon-right">
        <Icon :name="iconRightName" :size="iconRightSize" />
      </slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import type { IconName, IconSize } from "../Icon/Icon.vue";

export type ButtonType = "primary" | "brand" | "secondary";
export type ButtonSize = "sm";
/** Figma property `state` — enum, matches component set variant names exactly. */
export type ButtonState = "default" | "pressed" | "disabled" | "focus";

withDefaults(
  defineProps<{
    /** Figma property `type`. */
    type?: ButtonType;
    /** Only `sm` available in Figma (reserved for future sizes). */
    size?: ButtonSize;
    /** Figma property `state`. `disabled` → native disabled; `focus` → static focus ring (docs/screenshots). */
    state?: ButtonState;
    /** Hide the leading icon (text-only button). */
    hideIcon?: boolean;
    /** Show a trailing icon after the label. */
    showIconRight?: boolean;
    iconName?: IconName;
    iconSize?: IconSize;
    iconRightName?: IconName;
    iconRightSize?: IconSize;
  }>(),
  {
    type: "primary",
    size: "sm",
    state: "default",
    hideIcon: false,
    showIconRight: false,
    iconName: "chevron-down",
    iconSize: "small",
    iconRightName: "chevron-down",
    iconRightSize: "small",
  }
);

defineSlots<{
  default?: () => unknown;
  icon?: () => unknown;
  "icon-right"?: () => unknown;
}>();
</script>

<style module src="./Button.module.css"></style>
