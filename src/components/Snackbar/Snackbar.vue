<template>
  <div :class="$style['kzn-c-snackbar']" role="status" aria-live="polite">
    <span :class="$style['kzn-c-snackbar__message']">
      <slot>Single line description for user to pay attention</slot>
    </span>
    <button
      v-if="snackbar === 'action'"
      type="button"
      :class="$style['kzn-c-snackbar__close']"
      aria-label="Close"
      @click="emit('close')"
    >
      <Icon name="close" size="small" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";

/**
 * Kaizen snackbar — auto-dismissing toast notification.
 *
 * Figma: `snackbar` (8621:1957) — component property `snackbar` = `action` | `noAction`.
 * https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8621-1957
 */
export type SnackbarVariant = "action" | "noAction";

withDefaults(
  defineProps<{
    /** Figma property `snackbar`. `action` shows a manual close icon; `noAction` does not. */
    snackbar?: SnackbarVariant;
  }>(),
  {
    snackbar: "action",
  }
);

const emit = defineEmits<{
  close: [];
}>();

defineSlots<{
  default?: () => unknown;
}>();
</script>

<style module src="./Snackbar.module.css"></style>
