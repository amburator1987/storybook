<template>
  <button
    type="button"
    :aria-expanded="type === 'open'"
    :class="[
      $style['kzn-c-action-list'],
      { [$style['kzn-c-action-list--open']]:  type === 'open' },
      { [$style['kzn-c-action-list--hover']]: state === 'hover' },
      { [$style['kzn-c-action-list--focus']]: state === 'focus' },
    ]"
  >
    <!-- inner container -->
    <span :class="$style['kzn-c-action-list__inner']">
      <!-- lead icon -->
      <span
        v-if="showLeadIcon"
        :class="$style['kzn-c-action-list__lead']"
        aria-hidden="true"
      >
        <slot name="lead-icon">
          <Icon :name="leadIconName" size="small" />
        </slot>
      </span>

      <!-- info: title + subhead -->
      <span :class="$style['kzn-c-action-list__info']">
        <span :class="$style['kzn-c-action-list__title']">
          <slot>Action List</slot>
        </span>
        <span v-if="showSubhead" :class="$style['kzn-c-action-list__subhead']">
          <slot name="subhead">Subheading of item</slot>
        </span>
      </span>

      <!-- counter -->
      <span :class="$style['kzn-c-action-list__counter']">
        <slot name="counter">333</slot>
      </span>

      <!-- trail icon — chevron-down (closed) / chevron-up (open) -->
      <span
        v-if="showTrailIcon"
        :class="$style['kzn-c-action-list__trail']"
        aria-hidden="true"
      >
        <slot name="trail-icon">
          <Icon :name="type === 'open' ? 'chevron-up' : 'chevron-down'" size="small" />
        </slot>
      </span>
    </span>

    <!-- open-state left accent bar (Figma node: Selector) -->
    <span
      v-if="type === 'open'"
      :class="$style['kzn-c-action-list__selector']"
      aria-hidden="true"
    />
  </button>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import type { IconName } from "../Icon/Icon.vue";

export type ActionListType  = "closed" | "open";
export type ActionListState = "default" | "hover" | "focus";

withDefaults(
  defineProps<{
    /** Figma property `type`. `open` = expanded item — yellow accent bar + chevron-up + aria-expanded. */
    type?: ActionListType;
    /** Figma property `State`. */
    state?: ActionListState;
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
    type: "closed",
    state: "default",
    showLeadIcon: true,
    showSubhead: true,
    showTrailIcon: true,
    leadIconName: "activity",
  }
);

defineSlots<{
  default?: () => any;
  "lead-icon"?: () => any;
  subhead?: () => any;
  counter?: () => any;
  "trail-icon"?: () => any;
}>();
</script>

<style module src="./ActionList.module.css"></style>
