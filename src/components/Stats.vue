<template lang="pug">
  .card.shadow-sm.statsCard(:style="cardStyle")
    .card-body
      h5.card-title.mb-1
        fa-icon(:icon="icon", :style="style")
        |  {{ title }}
      p.mb-0 {{ value | scaled }}%
</template>

<script>
import { createLinearScale } from "scale-helper-functions";
import { processNumber } from "number-helper-functions";
const scale = createLinearScale([-1, 1], [-100, 100]);
const colorScale = createLinearScale([-1, 0, 1], ["red", "#fde24f", "green"]);

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    dataColor() {
      return colorScale(this.value);
    },
    style() {
      return {
        color: this.dataColor
      };
    },
    cardStyle() {
      return {
        "border-left-color": this.dataColor
      };
    }
  },
  filters: {
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
