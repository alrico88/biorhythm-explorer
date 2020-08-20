import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import VueHighcharts from "vue-highcharts";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDumbbell,
  faBrain,
  faHeartBroken
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faDumbbell);
library.add(faBrain);
library.add(faHeartBroken);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.use(VueHighcharts);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
