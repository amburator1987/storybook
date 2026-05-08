<template>
  <button
    type="button"
    :class="[
      $style['kzn-c-button'],
      $style[`kzn-c-button--${variant}`],
      { [$style['kzn-c-button--pressed']]: pressed },
      { [$style['kzn-c-button--demo-focus']]: demoFocus },
    ]"
    :disabled="disabled"
    :aria-pressed="pressed ? true : undefined"
    :data-figma-node-id="figmaNodeId"
  >
    <span v-if="!hideIcon" :class="$style['kzn-c-button__icon']" aria-hidden="true">
      <slot name="icon">
        <Icon :name="iconName" :size="iconSize" />
      </slot>
    </span>
    <span :class="$style['kzn-c-button__label']">
      <slot>{{ defaultLabel }}</slot>
    </span>
    <span v-if="showIconRight" :class="$style['kzn-c-button__icon']" aria-hidden="true">
      <slot name="icon-right">
        <Icon :name="iconRightName" :size="iconRightSize" />
      </slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Icon from "../Icon/Icon.vue";
import type { IconName, IconSize } from "../Icon/Icon.vue";

/**
 * Kaizen Button - pill control with optional leading icon.
 *
 * Source: Figma component set `button` (node 8091:1786)
 * https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8091-1786
 *
 * Figma component properties:
 *   - `type`  -> `variant` (`primary` | `brand` | `secondary`)
 *   - `state` -> native `disabled`, interactive hover/active, optional `pressed` for static demos
 *   - `size`  -> only `sm` in Figma; reserved for future sizes
 *
 * Leading glyph: `Icon` via `iconName` / `iconSize`, or `icon` slot to override.
 */
export type ButtonVariant = "primary" | "brand" | "secondary";
export type ButtonSize = "sm";

type ButtonStateKey = "default" | "pressed" | "disabled";

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    /** Static pressed look (e.g. Storybook); real clicks use :active. */
    pressed?: boolean;
    hideIcon?: boolean;
    /** Figma `icon-right-show` — shows trailing icon after label. */
    showIconRight?: boolean;
    /** Storybook / screenshots: show the same ring as `:focus-visible` without keyboard focus. */
    demoFocus?: boolean;
    /** Passed to `Icon` when the default `icon` slot is used. */
    iconName?: IconName;
    iconSize?: IconSize;
    /** Passed to trailing `Icon` when the default `icon-right` slot is used. */
    iconRightName?: IconName;
    iconRightSize?: IconSize;
  }>(),
  {
    variant: "primary",
    size: "sm",
    disabled: false,
    pressed: false,
    hideIcon: false,
    showIconRight: false,
    demoFocus: false,
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

const defaultLabel = "ButtonText";

const FIGMA_NODE_IDS: Record<ButtonVariant, Record<ButtonStateKey, string>> = {
  primary: {
    default: "8091:1787",
    pressed: "8091:1789",
    disabled: "8091:1791",
  },
  brand: {
    default: "8091:1793",
    pressed: "8091:1795",
    disabled: "8091:1797",
  },
  secondary: {
    default: "8091:1799",
    pressed: "8091:1801",
    disabled: "8091:1803",
  },
};

const figmaNodeId = computed(() => {
  const state: ButtonStateKey = props.disabled
    ? "disabled"
    : props.pressed
      ? "pressed"
      : "default";
  return FIGMA_NODE_IDS[props.variant][state];
});
</script>

<style module src="./Button.module.css"></style>
