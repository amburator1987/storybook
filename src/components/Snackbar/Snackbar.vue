<template>
  <div
    :class="[$style['kzn-c-snackbar'], $style[`kzn-c-snackbar--${intent.toLowerCase()}`]]"
    role="status"
    aria-live="polite"
  >
    <div :class="$style['kzn-c-snackbar__content']">
      <span :class="$style['kzn-c-snackbar__icon']">
        <Icon name="info" size="default" />
      </span>
      <div :class="$style['kzn-c-snackbar__main']">
        <p :class="$style['kzn-c-snackbar__heading']">
          <slot name="heading">Heading</slot>
        </p>
        <p :class="$style['kzn-c-snackbar__message']">
          <slot>Single line description for user to pay attention</slot>
        </p>
        <div v-if="showButton" :class="$style['kzn-c-snackbar__button-holder']">
          <Button :type="intent === 'Error' ? 'danger' : 'tertiary'" size="md" @click="emit('action')">
            <slot name="button">Button</slot>
          </Button>
        </div>
      </div>
    </div>
    <button
      type="button"
      :class="$style['kzn-c-snackbar__close']"
      aria-label="Close"
      @click="emit('close')"
    >
      <Icon name="close" size="default" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import Button from "../Button/Button.vue";

/**
 * Kaizen snackbar — auto-dismissing toast notification.
 *
 * Figma: `snackbar` (8621:1957) — component property `Intent` = `Neutral` | `Attention` | `Error`,
 * boolean property `ShowButton` (default true).
 * https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8621-1957
 */
export type SnackbarIntent = "Neutral" | "Attention" | "Error";

withDefaults(
  defineProps<{
    /** Figma property `Intent`. Drives background/text/icon color. */
    intent?: SnackbarIntent;
    /** Figma property `ShowButton`. Shows the inline action button when true. */
    showButton?: boolean;
  }>(),
  {
    intent: "Neutral",
    showButton: true,
  }
);

const emit = defineEmits<{
  close: [];
  action: [];
}>();

defineSlots<{
  default?: () => unknown;
  heading?: () => unknown;
  button?: () => unknown;
}>();
</script>

<style module src="./Snackbar.module.css"></style>
