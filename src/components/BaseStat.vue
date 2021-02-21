<template lang="pug">
  .card.statsCard(:style="cardStyle")
    .card-body.p-3
      h5.card-title.mb-1.text-truncate
        span(:style="style")
          slot(name="icon")
        |  {{ title }}
      p.mb-0.text-truncate {{value}}
</template>

<script>
export default {
  name: "BaseStat",
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: true
    },
    borderColor: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    cardStyle() {
      return {
        "border-left-color": this.borderColor || "transparent"
      };
    },
    style() {
      return {
        color: this.borderColor || "block"
      };
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
