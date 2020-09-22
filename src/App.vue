<template lang="pug">
  #app.d-flex.flex-column.vh-100
    main.flex-shrink-0
      app-header
      bio-data
    footer.mt-auto.py-3.bg-white.text-center
      .container
        .row
          .col
            .text-muted Made by <a href="https://alrico.es" target="_blank">Alberto Rico</a>. Source code available at
              a.ml-2(href="https://github.com/alrico88/biorhythm-explorer", target="_blank")
                i.fab.fa-github
                |  Github
</template>

<script>
import Header from "./components/Header.vue";
import BioData from "./components/Data.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader: Header,
    BioData
  },
  methods: {
    ...mapActions(["startUp"])
  },
  mounted() {
    this.startUp();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&display=swap");

body {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  background-color: #d4d8f0;
}

h1,
h2,
h3,
h4,
h5 {
  color: #232946;
  font-weight: 800;
}

p {
  color: #121629;
}

table {
  background-color: white;
}

.bg-purple {
  background-color: white;
}

.card {
  border-radius: 3px;
}

.card-body {
  background-color: #fffffe;
}

.mx-datepicker {
  width: 100% !important;
  display: block;
}
</style>
