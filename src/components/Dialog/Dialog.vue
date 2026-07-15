<template>
  <Teleport to="body" :disabled="!overlay">
    <div
      v-bind="overlay ? {
        class: [$style['kzn-c-dialog-overlay'], size === 'mobile' && $style['kzn-c-dialog-overlay--mobile']],
        onClick: () => emit('close'),
      } : {}"
    >
      <div
        :class="[
          $style['kzn-c-dialog'],
          size !== 'default' && $style[`kzn-c-dialog--${size}`],
        ]"
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

        <!-- Actions footer -->
        <div :class="[$style['kzn-c-dialog__actions'], footerType === 'inline' && $style['kzn-c-dialog__actions--inline']]">
          <slot name="actions">
            <!-- stacked: Confirm (primary, top) + Cancel (tertiary, bottom) -->
            <template v-if="footerType === 'stacked'">
              <Button
                type="primary"
                size="lg"
                :iconLeftShow="false"
                :iconRightShow="false"
                :class="$style['kzn-c-dialog__btn']"
                @click="emit('confirm')"
              >Confirm</Button>
              <Button
                type="tertiary"
                size="lg"
                :iconLeftShow="false"
                :iconRightShow="false"
                :class="$style['kzn-c-dialog__btn']"
                @click="emit('close')"
              >Cancel</Button>
            </template>
            <!-- inline: Cancel (tertiary, left) + Confirm (primary, right) -->
            <template v-else>
              <Button
                type="tertiary"
                size="lg"
                :iconLeftShow="false"
                :iconRightShow="false"
                :class="$style['kzn-c-dialog__btn']"
                @click="emit('close')"
              >Cancel</Button>
              <Button
                type="primary"
                size="lg"
                :iconLeftShow="false"
                :iconRightShow="false"
                :class="$style['kzn-c-dialog__btn']"
                @click="emit('confirm')"
              >Confirm</Button>
            </template>
          </slot>
        </div>

        <!-- Close button — top-right, always visible -->
        <button :class="$style['kzn-c-dialog__close']" @click="emit('close')" aria-label="Close dialog">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import Button from "../Button/Button.vue";

export type DialogFooterType = "stacked" | "inline";
export type DialogSize = "default" | "medium" | "mobile";

withDefaults(
  defineProps<{
    /** Figma property `FooterType`. stacked = full-width stacked buttons. inline = side-by-side flex:1 buttons. */
    footerType?: DialogFooterType;
    /** Figma property `size`. Controls dialog width: default=360px, medium=760px, mobile=100%. */
    size?: DialogSize;
    /** When false, renders inline without backdrop — use in Storybook. */
    overlay?: boolean;
  }>(),
  {
    footerType: "inline",
    size: "default",
    overlay: true,
  }
);

const emit = defineEmits<{
  /** Emitted when overlay or close button is clicked, or Cancel is activated. */
  close: [];
  /** Emitted when the primary Confirm button is activated. */
  confirm: [];
}>();

defineSlots<{
  /** Dialog title — rendered with h6 typography. */
  header?: () => any;
  /** Dialog body / description text. */
  default?: () => any;
  /** Overrides the default action buttons. */
  actions?: () => any;
}>();

const titleId = `kzn-dialog-title-${Math.random().toString(36).slice(2, 9)}`;
</script>

<style module src="./Dialog.module.css"></style>
