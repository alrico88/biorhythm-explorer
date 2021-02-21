<template lang="pug">
#app.d-flex.flex-column.vh-100
  main.flex-shrink-0
    app-header
    bio-data
  footer.mt-auto.py-3.bg-white.text-center
    .container
      .row
        .col
          .text-muted Made by #[a(href="https://alrico.es" target="_blank" rel="noopener") Alberto Rico]. Source code available at
            a.ml-2(
              href="https://github.com/alrico88/biorhythm-explorer",
              target="_blank",
              rel="noopener"
            ) #[b-icon-github] Github
</template>

<script>
import Header from "./components/Header.vue";
import BioData from "./components/Data.vue";
import { mapActions } from "vuex";
import { BIconGithub } from "bootstrap-vue";

export default {
  name: "App",
  components: {
    AppHeader: Header,
    BioData,
    BIconGithub
  },
  methods: {
    ...mapActions(["startUp"])
  },
  mounted() {
    this.startUp();
  }
};
</script>
