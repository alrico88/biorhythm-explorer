<template lang="pug">
  .row
    .col-md-6
      form.form-row
        .form-group.col-6.mb-0
          label.mb-1 Date of birth
          input.form-control(type='date', v-model="DOB")
        .form-group.col-6.mb-0
          label.mb-1 Date to analyze
          input.form-control(type='date', v-model="DTA")
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["dateOfBirth", "dateToAnalyze"]),
    DOB: {
      get() {
        return this.dateOfBirth;
      },
      set(value) {
        this.changeDOB(value);
      }
    },
    DTA: {
      get() {
        return this.dateToAnalyze;
      },
      set(value) {
        this.changeDTA(value);
      }
    }
  },
  methods: {
    ...mapMutations(["changeDOB", "changeDTA"])
  }
};
</script>

<style></style>
