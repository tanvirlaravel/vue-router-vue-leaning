import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../Views/HomeView.vue";
import AboutView from "../Views/AboutView.vue";
import CarView from "../Views/CarView.vue";
import ContactView from "../Views/ContactView.vue";

const routes = [
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
    path: "/cars/:id",
    name: "car",
    component: CarView,
    children: [
      {
        path: "contact",
        component: ContactView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
