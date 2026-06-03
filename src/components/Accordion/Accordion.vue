<template>
  <button
    type="button"
    :aria-expanded="type === 'open'"
    :class="[
      $style.accordion,
      { [$style['accordion--open']]:  type === 'open' },
      { [$style['accordion--hover']]: state === 'hover' },
      { [$style['accordion--focus']]: state === 'focus' },
    ]"
  >
    <span :class="$style['accordion__inner']">

      <span v-if="showLeadIcon" :class="$style['accordion__lead']" aria-hidden="true">
        <slot name="lead-icon">
          <Icon :name="leadIconName" size="small" />
        </slot>
      </span>

      <span :class="$style['accordion__info']">
        <span :class="$style['accordion__title']">
          <slot>Accordion</slot>
        </span>
        <span v-if="showSubhead" :class="$style['accordion__subhead']">
          <slot name="subhead">Subheading of item</slot>
        </span>
      </span>

      <span :class="$style['accordion__counter']">
        <slot name="counter">333</slot>
      </span>

      <span v-if="showTrailIcon" :class="$style['accordion__trail']" aria-hidden="true">
        <slot name="trail-icon">
          <Icon :name="type === 'open' ? 'chevron-up' : 'chevron-down'" size="small" />
        </slot>
      </span>
    </span>

    <!-- type=open: yellow left accent bar (Figma node: Selector) -->
    <span v-if="type === 'open'" :class="$style['accordion__selector']" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import Icon from '../Icon/Icon.vue';
import type { IconName } from '../Icon/Icon.vue';

export type AccordionType  = 'closed' | 'open';
export type AccordionState = 'default' | 'hover' | 'focus';

withDefaults(
  defineProps<{
    /** Figma property `type`. `open` = expanded — yellow accent bar + chevron-up + aria-expanded. */
    type?: AccordionType;
    /** Figma property `State`. */
    state?: AccordionState;
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
    type:         'closed',
    state:        'default',
    showLeadIcon: true,
    showSubhead:  true,
    showTrailIcon: true,
    leadIconName: 'activity',
  }
);

defineSlots<{
  default?:      () => unknown;
  'lead-icon'?:  () => unknown;
  subhead?:      () => unknown;
  counter?:      () => unknown;
  'trail-icon'?: () => unknown;
}>();
</script>

<style module src="./Accordion.module.css"></style>
