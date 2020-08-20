<template lang="pug">
  .row
    .col
      .card
        .card-body.shadow-sm
          Highcharts(:options="chartOptions")
</template>

<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";

function getSerie(name, array, prop) {
  return {
    name,
    data: array.map(d => d.biorhythm[prop])
  };
}

export default {
  computed: {
    ...mapGetters(["bioData"]),
    chartOptions() {
      let series = [
        getSerie("Physical", this.bioData, "physical"),
        getSerie("Emotional", this.bioData, "emotional"),
        getSerie("Intellectual", this.bioData, "intellectual")
      ];
      return {
        series,
        chart: {
          height: 250
        },
        legend: {
          alingment: "top"
        },
        credits: false,
        xAxis: {
          categories: this.bioData.map(d => format(d.day, "EEE dd-MM-yy"))
        },
        yAxis: {
          min: -1,
          max: 1,
          title: ""
        },
        title: ""
      };
    }
  }
};
</script>

<style></style>
