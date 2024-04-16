import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ComponentT from "../views/ComponentTask.vue";
import FormBuilder from "../views/FormBuilder.vue";

Vue.use(VueRouter);

const routes = [ 
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/communication",
    name: "communication",
    component: ComponentT,
  },
 
  {
    path: "/form",
    name: "form",
    component: FormBuilder,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
