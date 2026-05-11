<template>
  <button
    type="button"
    :class="[
      $style['kzn-c-action-list-item'],
      { [$style['kzn-c-action-list-item--hover']]: state === 'Hover' },
      { [$style['kzn-c-action-list-item--selected']]: state === 'Selected' },
      { [$style['kzn-c-action-list-item--focus']]: state === 'Focus' },
    ]"
  >
    <span :class="$style['kzn-c-action-list-item__inner']">
      <span v-if="showLeadIcon" :class="$style['kzn-c-action-list-item__lead']" aria-hidden="true">
        <slot name="lead-icon">
          <Icon :name="leadIconName" size="small" />
        </slot>
      </span>

      <span :class="$style['kzn-c-action-list-item__info']">
        <span :class="$style['kzn-c-action-list-item__title']">
          <slot>Action List</slot>
        </span>
        <span v-if="showSubhead" :class="$style['kzn-c-action-list-item__subhead']">
          <slot name="subhead">Subheading of item</slot>
        </span>
      </span>

      <span :class="$style['kzn-c-action-list-item__counter']">
        <slot name="counter">333</slot>
      </span>

      <span v-if="showTrailIcon" :class="$style['kzn-c-action-list-item__trail']" aria-hidden="true">
        <slot name="trail-icon">
          <Icon name="chevron-up" size="small" />
        </slot>
      </span>
    </span>

    <span
      v-if="state === 'Selected'"
      :class="$style['kzn-c-action-list-item__selector']"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import type { IconName } from "../Icon/Icon.vue";

export type ActionListItemState = "Default" | "Hover" | "Selected" | "Focus";

withDefaults(
  defineProps<{
    /** Figma property `State`. */
    state?: ActionListItemState;
    /** Figma property `showLeadIcon`. */
    showLeadIcon?: boolean;
    /** Figma property `showSubhead`. */
    showSubhead?: boolean;
    /** Figma property `showTrailIcon`. */
    showTrailIcon?: boolean;
    /** Glyph for the default lead icon (overridable via `lead-icon` slot). */
    leadIconName?: IconName;
  }>(),
  {
    state: "Default",
    showLeadIcon: true,
    showSubhead: true,
    showTrailIcon: true,
    leadIconName: "activity",
  }
);

defineSlots<{
  default?: () => unknown;
  "lead-icon"?: () => unknown;
  subhead?: () => unknown;
  counter?: () => unknown;
  "trail-icon"?: () => unknown;
}>();
</script>

<style module src="./ActionListItem.module.css"></style>
