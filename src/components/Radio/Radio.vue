<template>
  <label
    :class="[
      $style.radio,
      $style[`radio--${size}`],
      $style[`radio--${selection}`],
      $style[`radio--${state}`],
    ]"
  >
    <input
      ref="inputRef"
      type="radio"
      :class="$style['radio__input']"
      :checked="selection === 'checked'"
      :disabled="state === 'disabled'"
      :name="name"
      :value="value"
      @change="handleChange"
    />

    <!--
      Icon exported from Figma node 8364:1328.
      fill="currentColor" — boja se kontrolira CSS color propertyjem.
      Checked inner dot: CSS ::after pseudo-element na .radio__box.
    -->
    <span :class="$style['radio__box']" aria-hidden="true">
      <svg
        viewBox="0 0 16 16"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.666656 8.00001C0.666656 3.94992 3.9499 0.666672 7.99999 0.666672C12.0501 0.666672 15.3333 3.94992 15.3333 8.00001C15.3333 12.0501 12.0501 15.3333 7.99999 15.3333C3.9499 15.3333 0.666656 12.0501 0.666656 8.00001ZM7.99999 2.00001C4.68628 2.00001 1.99999 4.6863 1.99999 8.00001C1.99999 11.3137 4.68628 14 7.99999 14C11.3137 14 14 11.3137 14 8.00001C14 4.6863 11.3137 2.00001 7.99999 2.00001Z"
          fill="currentColor"
        />
      </svg>
    </span>

    <span v-if="hasLabel" :class="$style['radio__label']">
      <slot>Label</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export type RadioSize      = 'sm' | 'lg';
export type RadioSelection = 'unchecked' | 'checked';
export type RadioState     = 'default' | 'hover' | 'focus' | 'disabled';

withDefaults(
  defineProps<{
    /** Figma property `size`. sm = 16px, lg = 24px. */
    size?:      RadioSize;
    /** Figma property `selection`. */
    selection?: RadioSelection;
    /** Figma property `state`. */
    state?:     RadioState;
    /** Figma property `hasLabel`. */
    hasLabel?:  boolean;
    /** Nativni HTML atribut — grupa radio buttona. */
    name?:      string;
    /** Nativni HTML atribut — vrijednost ove opcije. */
    value?:     string;
  }>(),
  {
    size:      'sm',
    selection: 'unchecked',
    state:     'default',
    hasLabel:  true,
    name:      undefined,
    value:     undefined,
  }
);

const emit = defineEmits<{
  'update:selection': [value: RadioSelection];
}>();

defineSlots<{ default?: () => unknown }>();

const inputRef = ref<HTMLInputElement | null>(null);

function handleChange() {
  emit('update:selection', 'checked');
}
</script>

<style module src="./Radio.module.css"></style>
