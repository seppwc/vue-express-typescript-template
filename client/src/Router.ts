import { createWebHistory, createRouter } from "vue-router";
import { Component } from "vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

interface Route {
  path: string;
  name: string;
  component: Component;
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
