<template lang="pug">
  .row
    .col-md-6
      form.form-row
        .form-group.col-sm-6.mb-xs-2.mb-sm-0
          .form-border
            .content
              label Date of birth
              input.form-control(type='date', v-model="DOB")
        .form-group.col-sm-6.mb-0
          .form-border
            .content
              label Date to analyze
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

<style lang="scss" scoped>
$intense: #1f1135;
$bg: #d4d8f0;

.form-border {
  border: 2px solid $intense;
  border-radius: 5px;
  padding: 5px 10px;
  .content {
    margin-top: -18px;
    label {
      padding-left: 6px;
      padding-right: 6px;
      background-color: $bg;
      margin-bottom: 0;
    }
  }
}
</style>
