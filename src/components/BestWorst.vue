<template lang="pug">
  .card
    .card-body.p-0
      table.table.table-sm.table-striped.mb-0
        thead.thead-light
          tr
            th Aspect
            th Day
            th Remaining
        tbody
          tr
            td Physical
            td {{ values.physical | fullDate }}
            td {{ remainingPhysical }}
          tr
            td Emotional
            td {{ values.emotional | fullDate }}
            td {{ remainingEmotional }}
          tr
            td Intellectual
            td {{ values.intellectual | fullDate }}
            td {{ remainingIntellectual }}
</template>

<script>
import { format, differenceInCalendarDays } from "date-fns";

/**
 * Gets nice text depending on remaining days
 * @param {number} remaining
 * @returns {string}
 */
function getRemainingText(remaining) {
  return remaining > 0 ? `${remaining} days` : `${remaining} days (today)`;
}

export default {
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  filters: {
    niceDate(date) {
      return format(date, "EEE dd MM yy");
    },
    fullDate(date) {
      return format(date, "EEE dd MMMM yyyy");
    }
  },
  computed: {
    remainingPhysical() {
      const remaining = this.getRemaining(this.values.physical);
      return getRemainingText(remaining);
    },
    remainingEmotional() {
      const remaining = this.getRemaining(this.values.emotional);
      return getRemainingText(remaining);
    },
    remainingIntellectual() {
      const remaining = this.getRemaining(this.values.intellectual);
      return getRemainingText(remaining);
    }
  },
  methods: {
    getRemaining(date) {
      return differenceInCalendarDays(date, new Date());
    }
  }
};
</script>

<style></style>
