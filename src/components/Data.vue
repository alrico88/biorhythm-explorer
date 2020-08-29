<template lang="pug">
  .container-fluid
    .row.py-3
      .col
        .row
          .col
            h4.mb-2 Your stats
        .row.row-cols-1.row-cols-md-3.justify-content-center
          .col.mb-1.mb-md-0
            stats(title="Physical", :value="selectedData.physical", icon="dumbbell")
          .col.mb-1.mb-md-0
            stats(title="Emotional", :value="selectedData.emotional", icon="heart-broken")
          .col.mb-1.mb-md-0
            stats(title="Intellectual", :value="selectedData.intellectual", icon="brain")
    .row.pb-3
      .col
        .row
          .col
            h4.mb-2 Trend
        chart.mb-3
        .row
          .col
            .table-responsive
              table.table.table-bordered.table-sm.mb-0
                thead.thead-light
                  tr
                    th Date
                    th.text-center(v-for="item of bioData", :class="getClass(item.day)") {{ item.day | niceDate }}
                tbody
                  tr
                    td Physical
                    td.text-center(v-for="item of bioData", :style="getStyle(item.biorhythm.physical)") {{ item.biorhythm.physical }}
                  tr
                    td Emotional
                    td.text-center(v-for="item of bioData", :style="getStyle(item.biorhythm.emotional)") {{ item.biorhythm.emotional }}
                  tr
                    td Intellectual
                    td.text-center(v-for="item of bioData", :style="getStyle(item.biorhythm.intellectual)") {{ item.biorhythm.intellectual }}
    .row.pb-3
      .col
        .row
          .col
            h4.mb-2 Highlights
        .row
          .col-md-6
            h5 Next best days:
            best-worst(:values="nextDays.best")
          .col-md-6
            h5 Next worst days:
            best-worst(:values="nextDays.worst")

</template>

<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";
import { createLinearScale } from "scale-helper-functions";
import Color from "color";
import BestWorst from "./BestWorst.vue";
import Chart from "./Chart.vue";
import Stats from "./Stats.vue";

const scale = createLinearScale([-1, 0, 1], ["red", "yellow", "green"]);

export default {
  components: {
    BestWorst,
    Chart,
    Stats
  },
  filters: {
    niceDate(date) {
      return format(date, "EEE dd MM yy");
    }
  },
  computed: {
    ...mapGetters(["selectedData", "bioData", "nextDays"])
  },
  methods: {
    isToday(date) {
      return format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
    },
    getClass(day) {
      return this.isToday(day) ? "text-primary" : "";
    },
    getStyle(value) {
      return {
        backgroundColor: Color(scale(value)).fade(0.5)
      };
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  th {
    min-width: 100px;
  }
}
</style>