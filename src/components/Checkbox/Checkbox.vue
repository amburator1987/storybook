<template>
  <label
    :class="[
      $style['kzn-c-checkbox'],
      $style[`kzn-c-checkbox--${size}`],
      { [$style['kzn-c-checkbox--disabled']]: checkbox === 'disabled' },
    ]"
  >
    <input
      type="checkbox"
      :class="$style['kzn-c-checkbox__input']"
      :checked="checkbox === 'checked'"
      :disabled="checkbox === 'disabled'"
      @change="handleChange"
    />
    <span
      :class="[$style['kzn-c-checkbox__icon'], $style[`kzn-c-checkbox__icon--${checkbox}`]]"
      aria-hidden="true"
    >
      <svg
        v-if="checkbox === 'checked'"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
        <path
          d="M4 8L6.5 10.5L12 5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg v-else viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5" />
      </svg>
    </span>
    <span :class="$style['kzn-c-checkbox__label']">
      <slot>Label</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
export type CheckboxState = 'checked' | 'unchecked' | 'disabled';
export type CheckboxSize = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    /** Figma property `checkbox`. Visual and interactive state. */
    checkbox?: CheckboxState;
    /** Figma property `size`. Controls icon dimensions and label typography. */
    size?: CheckboxSize;
  }>(),
  {
    checkbox: 'unchecked',
    size: 'sm',
  }
);

const emit = defineEmits<{
  'update:checkbox': [value: CheckboxState];
}>();

defineSlots<{
  default?: () => any;
}>();

function handleChange(e: Event) {
  if (props.checkbox === 'disabled') return;
  const input = e.target as HTMLInputElement;
  emit('update:checkbox', input.checked ? 'checked' : 'unchecked');
}
</script>

<style module src="./Checkbox.module.css"></style>
