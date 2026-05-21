<template>
  <Teleport to="body" :disabled="!overlay">
    <Transition name="kzn-dialog">
      <div
        v-if="open"
        v-bind="overlay ? { class: $style['kzn-c-dialog-overlay'], onClick: () => emit('close') } : {}"
      >
        <div
          :class="$style['kzn-c-dialog']"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          @click.stop
        >
          <!-- Text content -->
          <div :class="$style['kzn-c-dialog__text']">
            <p :id="titleId" :class="$style['kzn-c-dialog__header']">
              <slot name="header">Header</slot>
            </p>
            <p :class="$style['kzn-c-dialog__body']">
              <slot>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</slot>
            </p>
          </div>

          <!-- Actions footer (footerType=Default → stacked buttons) -->
          <div :class="$style['kzn-c-dialog__actions']">
            <slot name="actions">
              <Button
                type="primary"
                size="lg"
                :iconLeftShow="false"
                :iconRightShow="false"
                :class="$style['kzn-c-dialog__btn']"
                @click="emit('confirm')"
              >ButtonText</Button>
              <Button
                type="tertiary"
                size="lg"
                :iconLeftShow="false"
                :iconRightShow="false"
                :class="$style['kzn-c-dialog__btn']"
                @click="emit('close')"
              >ButtonText</Button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import Button from "../Button/Button.vue";

export type DialogFooterType = "Default";

withDefaults(
  defineProps<{
    /** Controls dialog visibility. */
    open?: boolean;
    /** Figma property `FooterType`. Currently only "Default" (stacked buttons). */
    footerType?: DialogFooterType;
    /** When false, renders only the dialog panel without the backdrop overlay and Teleport. Use in Storybook. */
    overlay?: boolean;
  }>(),
  {
    open: false,
    footerType: "Default",
    overlay: true,
  }
);

const emit = defineEmits<{
  /** Emitted when overlay is clicked or cancel button is activated. */
  close: [];
  /** Emitted when the primary confirm button is activated. */
  confirm: [];
}>();

defineSlots<{
  /** Dialog title — rendered with h6-style typography. */
  header?: () => any;
  /** Dialog body / description text. */
  default?: () => any;
  /** Overrides the default stacked action buttons. */
  actions?: () => any;
}>();

// Stable per-instance ID — set once at component setup, not reactive.
const titleId = `kzn-dialog-title-${Math.random().toString(36).slice(2, 9)}`;
</script>

<style module src="./Dialog.module.css"></style>
