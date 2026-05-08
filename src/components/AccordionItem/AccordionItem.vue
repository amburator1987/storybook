<template>
  <button
    type="button"
    :class="[
      $style['kzn-c-accordion-item'],
      {
        [$style['kzn-c-accordion-item--expanded']]: expanded,
        [$style['kzn-c-accordion-item--force-hover']]: forceHover,
      },
    ]"
    :aria-expanded="expanded"
    :data-figma-node-id="figmaNodeId"
  >
    <span
      v-if="expanded"
      :class="$style['kzn-c-accordion-item__selector']"
      aria-hidden="true"
    />
    <span :class="$style['kzn-c-accordion-item__inner']">
      <span v-if="showLeadIcon" :class="$style['kzn-c-accordion-item__lead']" aria-hidden="true">
        <slot name="lead">
          <Icon :name="leadIconName" :size="iconSize" />
        </slot>
      </span>
      <span v-if="showAdditionalIcon" :class="$style['kzn-c-accordion-item__additional']">
        <span :class="$style['kzn-c-accordion-item__additional-slot']">
          <slot name="additional" />
        </span>
      </span>
      <span :class="$style['kzn-c-accordion-item__info']">
        <p :class="$style['kzn-c-accordion-item__title']">
          <slot name="title">{{ defaultTitle }}</slot>
        </p>
        <p v-if="showSubhead" :class="$style['kzn-c-accordion-item__subhead']">
          <slot name="subhead">{{ defaultSubhead }}</slot>
        </p>
      </span>
      <p v-if="showCounter" :class="$style['kzn-c-accordion-item__counter']">
        <slot name="counter">{{ defaultCounter }}</slot>
      </p>
      <span v-if="showTrailIcon" :class="$style['kzn-c-accordion-item__trail']" aria-hidden="true">
        <Icon
          :name="expanded ? 'chevron-up' : 'chevron-down'"
          :size="iconSize"
        />
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Icon from "../Icon/Icon.vue";
import type { IconName, IconSize } from "../Icon/Icon.vue";

/**
 * Kaizen accordion row (header cell).
 *
 * Figma: `accordion-item` (6507:1674)
 * https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1674
 *
 * Figma props to API:
 *   - `State` -> `expanded` (Selected) + CSS :hover (Hover) + optional `forceHover` for docs
 *   - `showLeadIcon`, `showAdditionalIcon`, `showSubhead`, `showTrailIcon`
 *
 * Icons: default lead/trail use `Icon`; override via `lead` slot or wrap custom `Icon` in `additional`.
 */
const props = withDefaults(
  defineProps<{
    /** Open / Selected in Figma: accent bar + chevron up. */
    expanded?: boolean;
    showLeadIcon?: boolean;
    showAdditionalIcon?: boolean;
    showSubhead?: boolean;
    showTrailIcon?: boolean;
    showCounter?: boolean;
    /** Applies Hover surface token without real pointer hover (e.g. Storybook). */
    forceHover?: boolean;
    /** Glyph name for the default lead icon (when lead slot is empty). */
    leadIconName?: IconName;
    /** Size for default `Icon` instances (lead + chevron). */
    iconSize?: IconSize;
  }>(),
  {
    expanded: false,
    showLeadIcon: true,
    showAdditionalIcon: false,
    showSubhead: true,
    showTrailIcon: true,
    showCounter: true,
    forceHover: false,
    leadIconName: "document",
    iconSize: "small",
  }
);

defineSlots<{
  lead?: () => unknown;
  additional?: () => unknown;
  title?: () => unknown;
  subhead?: () => unknown;
  counter?: () => unknown;
}>();

const defaultTitle = "Accordion";
const defaultSubhead = "Subheading of item";
const defaultCounter = "333";

type FigmaState = "default" | "hover" | "selected";

const FIGMA_NODE_IDS: Record<FigmaState, string> = {
  default: "6507:1675",
  hover: "6507:1702",
  selected: "6507:1688",
};

const figmaNodeId = computed(() => {
  if (props.expanded) return FIGMA_NODE_IDS.selected;
  if (props.forceHover) return FIGMA_NODE_IDS.hover;
  return FIGMA_NODE_IDS.default;
});
</script>

<style module src="./AccordionItem.module.css"></style>
