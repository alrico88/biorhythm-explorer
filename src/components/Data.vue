<template lang="pug">
  .container-fluid
    .row.py-3
      .col
        .row
          .col-md-7
            .row
              .col
                h4.mb-2 Your stats
            .row.row-cols-1.row-cols-md-3.mb-2
              .col.mb-1.mb-md-0
                stats(title="Physical", :value="selectedData.physical")
                  template(#icon)
                    b-icon-person-check-fill
              .col.mb-1.mb-md-0
                stats(title="Emotional", :value="selectedData.emotional")
                  template(#icon)
                    b-icon-heart-fill
              .col.mb-1.mb-md-0
                stats(title="Intellectual", :value="selectedData.intellectual")
                  template(#icon)
                    b-icon-award-fill
          .col-md-5
            .row
              .col
                h4.mb-2 Summary
            .row.row-cols-1.row-cols-md-2
              .col.mb-1.mb-md-0
                stats(title="Overall", :value="selectedDataAverage")
                  template(slot="icon")
                    b-icon-calculator-fill
              .col.mb-1.mb-md-0
                base-stat(title="Trend", :value="trend.text", :border-color="trend.color")
                  template(#icon)
                    b-icon-graph-down(v-if="selectedDataTrend === 'down'")
                    b-icon-graph-up(v-else)
    .row.pb-3
      .col
        .row
          .col
            h4.mb-2 Trend
        chart.mb-3
        .row
          .col
            .card
              .card-body.p-0
                .table-responsive.mb-0
                  table.table.table-bordered.table-sm.mb-1
                    thead.thead-light
                      tr
                        th Date
                        th.text-center(v-for="item of bioData", :class="getClass(item.day)") {{ item.day | niceDate }}
                    tbody
                      tr
                        td Physical
                        td.text-center.text-monospace(v-for="item of bioData", :style="getStyle(item.biorhythm.physical)") {{ item.biorhythm.physical }}
                      tr
                        td Emotional
                        td.text-center.text-monospace(v-for="item of bioData", :style="getStyle(item.biorhythm.emotional)") {{ item.biorhythm.emotional }}
                      tr
                        td Intellectual
                        td.text-center.text-monospace(v-for="item of bioData", :style="getStyle(item.biorhythm.intellectual)") {{ item.biorhythm.intellectual }}
                  p.small.mb-0.pl-2.pb-1 Ranges go from -1 (worst) to 1 (best)
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
import {
  BIconHeartFill,
  BIconPersonCheckFill,
  BIconAwardFill,
  BIconCalculatorFill,
  BIconGraphUp,
  BIconGraphDown
} from "bootstrap-vue";
import BaseStat from "@/components/BaseStat";

const scale = createLinearScale([-1, 0, 1], ["red", "yellow", "green"]);

export default {
  components: {
    BaseStat,
    BestWorst,
    Chart,
    Stats,
    BIconPersonCheckFill,
    BIconHeartFill,
    BIconAwardFill,
    BIconCalculatorFill,
    BIconGraphUp,
    BIconGraphDown
  },
  filters: {
    niceDate(date) {
      return format(date, "EEE dd MM yy");
    }
  },
  computed: {
    ...mapGetters([
      "selectedData",
      "selectedDataAverage",
      "selectedDataTrend",
      "bioData",
      "nextDays"
    ]),
    trend() {
      const goingUp = this.selectedDataTrend === "up";
      return {
        text: goingUp ? "Getting better" : "Getting worse",
        color: goingUp ? "green" : "red"
      };
    }
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
        backgroundColor: Color(scale(value)).fade(0.7)
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

  tr {
    .text-monospace {
      border-color: transparent;
    }
  }
}
</style>
