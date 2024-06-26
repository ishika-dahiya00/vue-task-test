import Vue from "vue";
import App from "./App.vue";
import store from "./store"
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";

Vue.config.productionTip = false;
export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
