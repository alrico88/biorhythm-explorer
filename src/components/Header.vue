<template lang="pug">
  .container-fluid.pt-2
    .row.mb-2
      .col
        h1.mb-0 Biorhythm calculator
    dates
</template>

<script>
import Dates from "./Dates.vue";
export default {
  components: {
    Dates
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-weight: 700;
}
</style>
