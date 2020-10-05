<template lang="pug">
  .row
    .col-md-6
      form.form-row
        .form-group.col-sm-6.mb-xs-2.mb-sm-0
          .form-border
            .content
              label Date of birth
              date-picker(valueType='format', v-model="DOB", :clearable="false", :editable="false")
        .form-group.col-sm-6.mb-0
          .form-border
            .content
              label Date to analyze
              date-picker(valueType='format', v-model="DTA", :clearable="false", :editable="false")
</template>

<script>
import DatePicker from "vue2-datepicker";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    DatePicker
  },
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
$intense: #072050;
$bg: #b3dbdf;

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
      font-weight: bold;
    }
  }
}
</style>
