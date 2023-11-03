import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import WeatherView from "../views/WeatherView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/weather",
    name: "/weather",
    component: WeatherView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
