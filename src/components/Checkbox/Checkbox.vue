<template>
  <label
    :class="[
      $style.checkbox,
      $style[`checkbox--${size}`],
      $style[`checkbox--${selection}`],
      $style[`checkbox--${state}`],
    ]"
  >
    <input
      ref="inputRef"
      type="checkbox"
      :class="$style['checkbox__input']"
      :checked="selection === 'checked'"
      :disabled="state === 'disabled'"
      @change="handleChange"
    />

    <span :class="$style['checkbox__box']" aria-hidden="true">

      <!-- unchecked: open border box -->
      <svg
        v-if="selection === 'unchecked'"
        viewBox="0 0 16 16"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.33333 2.66666C2.96514 2.66666 2.66666 2.96514 2.66666 3.33333V12.6667C2.66666 13.0349 2.96514 13.3333 3.33333 13.3333H12.6667C13.0349 13.3333 13.3333 13.0349 13.3333 12.6667V3.33333C13.3333 2.96514 13.0349 2.66666 12.6667 2.66666H3.33333ZM1.33333 3.33333C1.33333 2.22876 2.22876 1.33333 3.33333 1.33333H12.6667C13.7712 1.33333 14.6667 2.22876 14.6667 3.33333V12.6667C14.6667 13.7712 13.7712 14.6667 12.6667 14.6667H3.33333C2.22876 14.6667 1.33333 13.7712 1.33333 12.6667V3.33333Z"
          fill="currentColor"
        />
      </svg>

      <!-- checked: L-shape box + checkmark -->
      <svg
        v-else-if="selection === 'checked'"
        viewBox="0 0 16 16"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.86185 2.86191C2.98687 2.73688 3.15644 2.66665 3.33325 2.66665H10.6666C11.0348 2.66665 11.3333 2.36817 11.3333 1.99998C11.3333 1.63179 11.0348 1.33331 10.6666 1.33331H3.33325C2.80282 1.33331 2.29411 1.54403 1.91904 1.9191C1.54397 2.29417 1.33325 2.80288 1.33325 3.33331V12.6666C1.33325 13.1971 1.54397 13.7058 1.91904 14.0809C2.29411 14.4559 2.80282 14.6666 3.33325 14.6666H12.6666C13.197 14.6666 13.7057 14.4559 14.0808 14.0809C14.4559 13.7058 14.6666 13.1971 14.6666 12.6666V7.99998C14.6666 7.63179 14.3681 7.33331 13.9999 7.33331C13.6317 7.33331 13.3333 7.63179 13.3333 7.99998V12.6666C13.3333 12.8435 13.263 13.013 13.138 13.138C13.013 13.2631 12.8434 13.3333 12.6666 13.3333H3.33325C3.15644 13.3333 2.98687 13.2631 2.86185 13.138C2.73682 13.013 2.66659 12.8435 2.66659 12.6666V3.33331C2.66659 3.1565 2.73682 2.98693 2.86185 2.86191Z"
          fill="currentColor"
        />
        <path
          d="M15.138 3.13807C15.3983 2.87772 15.3983 2.45561 15.138 2.19526C14.8776 1.93491 14.4555 1.93491 14.1952 2.19526L7.99992 8.39052L6.47132 6.86193C6.21097 6.60158 5.78886 6.60158 5.52851 6.86193C5.26816 7.12228 5.26816 7.54439 5.52851 7.80474L7.52851 9.80474C7.78886 10.0651 8.21097 10.0651 8.47132 9.80474L15.138 3.13807Z"
          fill="currentColor"
        />
      </svg>

      <!-- undefined / indeterminate: box + horizontal dash -->
      <svg
        v-else
        viewBox="0 0 16 16"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.33331 7.33333C4.96512 7.33333 4.66665 7.6318 4.66665 7.99999C4.66665 8.36818 4.96512 8.66666 5.33331 8.66666H10.6666C11.0348 8.66666 11.3333 8.36818 11.3333 7.99999C11.3333 7.6318 11.0348 7.33333 10.6666 7.33333H5.33331Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.33331 1.33333C2.22874 1.33333 1.33331 2.22876 1.33331 3.33333V12.6667C1.33331 13.7712 2.22874 14.6667 3.33331 14.6667H12.6666C13.7712 14.6667 14.6666 13.7712 14.6666 12.6667V3.33333C14.6666 2.22876 13.7712 1.33333 12.6666 1.33333H3.33331ZM2.66665 3.33333C2.66665 2.96514 2.96512 2.66666 3.33331 2.66666H12.6666C13.0348 2.66666 13.3333 2.96514 13.3333 3.33333V12.6667C13.3333 13.0349 13.0348 13.3333 12.6666 13.3333H3.33331C2.96512 13.3333 2.66665 13.0349 2.66665 12.6667V3.33333Z"
          fill="currentColor"
        />
      </svg>

    </span>

    <span v-if="hasLabel" :class="$style['checkbox__label']">
      <slot>Label</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

export type CheckboxSize      = 'sm' | 'lg';
export type CheckboxSelection = 'unchecked' | 'checked' | 'undefined';
export type CheckboxState     = 'default' | 'hover' | 'focus' | 'disabled';

const props = withDefaults(
  defineProps<{
    size?:      CheckboxSize;
    selection?: CheckboxSelection;
    state?:     CheckboxState;
    hasLabel?:  boolean;
  }>(),
  {
    size:      'sm',
    selection: 'unchecked',
    state:     'default',
    hasLabel:  true,
  }
);

const emit = defineEmits<{
  'update:selection': [value: CheckboxSelection];
}>();

defineSlots<{ default?: () => unknown }>();

const inputRef = ref<HTMLInputElement | null>(null);

function syncIndeterminate() {
  if (inputRef.value) {
    inputRef.value.indeterminate = props.selection === 'undefined';
  }
}

onMounted(syncIndeterminate);
watch(() => props.selection, syncIndeterminate);

function handleChange(e: Event) {
  if (props.state === 'disabled') return;
  const input = e.target as HTMLInputElement;
  emit('update:selection', input.checked ? 'checked' : 'unchecked');
}
</script>

<style module src="./Checkbox.module.css"></style>
