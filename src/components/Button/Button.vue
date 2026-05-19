<template>
  <button
    type="button"
    :class="[
      $style['kzn-c-button'],
      $style[`kzn-c-button--${type}`],
      $style[`kzn-c-button--${size}`],
      { [$style['kzn-c-button--pressed']]: state === 'pressed' },
      { [$style['kzn-c-button--focus']]: state === 'focus' },
    ]"
    :disabled="state === 'disabled'"
    :aria-pressed="state === 'pressed' ? true : undefined"
  >
    <span v-if="iconLeftShow" :class="$style['kzn-c-button__icon']" aria-hidden="true">
      <slot name="icon-left">
        <Icon :name="iconName" size="small" />
      </slot>
    </span>
    <span :class="$style['kzn-c-button__label']">
      <slot>ButtonText</slot>
    </span>
    <span v-if="iconRightShow" :class="$style['kzn-c-button__icon']" aria-hidden="true">
      <slot name="icon-right">
        <Icon :name="iconRightName" size="small" />
      </slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import type { IconName } from "../Icon/Icon.vue";

export type ButtonType = "primary" | "secondary" | "danger" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";
/** Figma property `state` — enum, matches component set variant names exactly. */
export type ButtonState = "default" | "pressed" | "disabled" | "focus";

withDefaults(
  defineProps<{
    /** Figma property `type`. */
    type?: ButtonType;
    /** Figma property `size`. Controls button height: sm=32px, md=40px, lg=48px. */
    size?: ButtonSize;
    /** Figma property `state`. `disabled` → native disabled; `focus` → static focus ring. */
    state?: ButtonState;
    /** Figma property `icon-left-show`. */
    iconLeftShow?: boolean;
    /** Figma property `icon-right-show`. */
    iconRightShow?: boolean;
    iconName?: IconName;
    iconRightName?: IconName;
  }>(),
  {
    type: "primary",
    size: "sm",
    state: "default",
    iconLeftShow: true,
    iconRightShow: false,
    iconName: "activity",
    iconRightName: "activity",
  }
);

defineSlots<{
  default?: () => any;
  "icon-left"?: () => any;
  "icon-right"?: () => any;
}>();
</script>

<style module src="./Button.module.css"></style>
