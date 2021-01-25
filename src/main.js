import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "./assets/main.scss";
import "vue2-datepicker/index.css";

import VueHighcharts from "vue-highcharts";

Vue.use(VueHighcharts);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
