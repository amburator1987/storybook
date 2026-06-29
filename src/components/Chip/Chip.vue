<template>
  <button
    type="button"
    :class="[
      $style.chip,
      $style[`chip--${size}`],
      isChecked ? $style['chip--checked'] : $style['chip--unchecked'],
      $style[`chip--${state}`],
    ]"
    :disabled="state === 'disabled'"
    :aria-pressed="isChecked"
    @click="handleClick"
  >
    <span :class="$style['chip__label']">
      <slot>Label</slot>
    </span>
    <span
      v-if="state === 'focus'"
      :class="$style['chip__focus']"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
export type ChipSize  = 'sm' | 'md';
export type ChipState = 'default' | 'hover' | 'focus' | 'disabled';

const props = withDefaults(
  defineProps<{
    /** Figma property `size`. sm = 24px, md = 32px. */
    size?:      ChipSize;
    /** Figma property `isChecked`. */
    isChecked?: boolean;
    /** Figma property `state`. */
    state?:     ChipState;
  }>(),
  {
    size:      'sm',
    isChecked: false,
    state:     'default',
  }
);

const emit = defineEmits<{
  'update:isChecked': [value: boolean];
}>();

defineSlots<{ default?: () => unknown }>();

function handleClick() {
  emit('update:isChecked', !props.isChecked);
}
</script>

<style module src="./Chip.module.css"></style>
