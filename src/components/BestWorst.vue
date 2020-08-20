<template lang="pug">
  table.table.table-sm.table-bordered
    thead.thead-light
      tr
        th Aspect
        th Day
        th Remaining
    tbody
      tr
        td Physical
        td {{ values.physical | fullDate }}
        td {{ getRemaining(values.physical) }} days
      tr
        td Emotional
        td {{ values.emotional | fullDate }}
        td {{ getRemaining(values.emotional) }} days
      tr
        td Intellectual
        td {{ values.intellectual | fullDate }}
        td {{ getRemaining(values.intellectual) }} days
</template>

<script>
import { format, differenceInDays } from "date-fns";

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
  methods: {
    getRemaining(date) {
      return differenceInDays(date, new Date());
    }
  }
};
</script>

<style></style>
