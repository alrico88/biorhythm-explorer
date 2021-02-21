<template lang="pug">
  base-stat(:title="title", :border-color="dataColor", :value="valueCalc")
    template(slot="icon")
      slot(name="icon")
</template>

<script>
import { createLinearScale } from "scale-helper-functions";
import { processNumber } from "number-helper-functions";
import BaseStat from "@/components/BaseStat";
const scale = createLinearScale([-1, 1], [-100, 100]);
const colorScale = createLinearScale([-1, 0, 1], ["red", "#fde24f", "green"]);

export default {
  components: { BaseStat },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    dataColor() {
      return colorScale(this.value);
    },
    valueCalc() {
      return `${this.scaled(processNumber(this.value))}%`;
    }
  },
  methods: {
    scaled(value) {
      return processNumber(scale(value));
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 1.3rem;
}

.statsCard {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
</style>
