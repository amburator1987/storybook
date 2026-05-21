<template>
  <div :class="$style['kzn-c-datepicker']">

    <!-- Header: nav + month label -->
    <header :class="$style['kzn-c-datepicker__header']">
      <button
        :class="$style['kzn-c-datepicker__nav']"
        type="button"
        aria-label="Prethodni mjesec"
        @click="prevMonth"
      >
        <Icon name="chevron-left" size="small" />
      </button>
      <span :class="$style['kzn-c-datepicker__month-label']">{{ monthLabel }}</span>
      <button
        :class="$style['kzn-c-datepicker__nav']"
        type="button"
        aria-label="Sljedeći mjesec"
        @click="nextMonth"
      >
        <Icon name="chevron-right" size="small" />
      </button>
    </header>

    <!-- Weekday abbreviations row -->
    <div :class="$style['kzn-c-datepicker__weekdays']" role="row">
      <span
        v-for="day in WEEKDAYS"
        :key="day"
        :class="$style['kzn-c-datepicker__weekday']"
        role="columnheader"
        :aria-label="day"
      >{{ day }}</span>
    </div>

    <!-- Date grid -->
    <div :class="$style['kzn-c-datepicker__grid']" role="grid">
      <!-- Leading empty cells for alignment -->
      <span
        v-for="n in leadingEmpty"
        :key="`empty-${n}`"
        :class="$style['kzn-c-datepicker__cell-empty']"
        aria-hidden="true"
      />

      <!-- Day cells -->
      <button
        v-for="date in monthDays"
        :key="date.getTime()"
        type="button"
        :disabled="isDisabled(date)"
        :class="[
          $style['kzn-c-datepicker__cell'],
          isSelected(date) && $style['kzn-c-datepicker__cell--selected'],
          isDisabled(date) && $style['kzn-c-datepicker__cell--disabled'],
        ]"
        :aria-pressed="isSelected(date)"
        :aria-label="`${date.getDate()} ${MONTHS[viewMonth]}`"
        @click="selectDate(date)"
      >
        <span :class="$style['kzn-c-datepicker__cell-value']">{{ date.getDate() }}</span>
        <span
          v-if="hasTransaction(date)"
          :class="$style['kzn-c-datepicker__cell-indicator']"
          aria-hidden="true"
        />
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Icon from "../Icon/Icon.vue";

const WEEKDAYS = ["PON", "UTO", "SRI", "ČET", "PET", "SUB", "NED"] as const;
const MONTHS = [
  "Januar", "Februar", "Mart", "April", "Maj", "Juni",
  "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar",
] as const;

const props = withDefaults(
  defineProps<{
    /** Currently selected date. Bind with v-model. */
    modelValue?: Date;
    /** Dates that have transactions — shows the yellow indicator dot. */
    transactions?: Date[];
    /** Dates that are not selectable — renders in disabled style. */
    disabledDates?: Date[];
  }>(),
  {
    modelValue:    undefined,
    transactions:  () => [],
    disabledDates: () => [],
  }
);

const emit = defineEmits<{
  "update:modelValue": [date: Date];
}>();

const viewDate = ref(props.modelValue ? new Date(props.modelValue) : new Date());

const viewYear  = computed(() => viewDate.value.getFullYear());
const viewMonth = computed(() => viewDate.value.getMonth());

const monthLabel = computed(() => `${MONTHS[viewMonth.value]} ${viewYear.value}`);

const leadingEmpty = computed(() => {
  const dow = new Date(viewYear.value, viewMonth.value, 1).getDay();
  return dow === 0 ? 6 : dow - 1;
});

const monthDays = computed(() => {
  const count = new Date(viewYear.value, viewMonth.value + 1, 0).getDate();
  return Array.from({ length: count }, (_, i) => new Date(viewYear.value, viewMonth.value, i + 1));
});

function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth()    === b.getMonth() &&
    a.getDate()     === b.getDate()
  );
}

function isSelected(date: Date): boolean {
  return !!props.modelValue && sameDay(date, props.modelValue);
}

function hasTransaction(date: Date): boolean {
  return props.transactions.some(t => sameDay(date, t));
}

function isDisabled(date: Date): boolean {
  return props.disabledDates.some(d => sameDay(date, d));
}

function prevMonth() {
  const d = new Date(viewDate.value);
  d.setDate(1);
  d.setMonth(d.getMonth() - 1);
  viewDate.value = d;
}

function nextMonth() {
  const d = new Date(viewDate.value);
  d.setDate(1);
  d.setMonth(d.getMonth() + 1);
  viewDate.value = d;
}

function selectDate(date: Date) {
  emit("update:modelValue", new Date(date));
}
</script>

<style module src="./Datepicker.module.css"></style>
