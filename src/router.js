import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "AnaSayfaPage",
    path: "/AnaSayfa",
    // component : Home
    component: () => import("./components/body/pageButtons/anaSayfa.vue"),
  },
  {
    name: "KesfetPage",
    path: "/kesfet",
    // component : Home
    component: () => import("./components/body/pageButtons/kesfet.vue"),
  },
  {
    name: "KitaplikPage",
    path: "/kitaplik",
    // component : Home
    component: () => import("./components/body/pageButtons/kitaplik.vue"),
  },
  {
    name: "YukseltPage",
    path: "/yukselt",
    // component : Home
    component: () => import("./components/body/pageButtons/yükselt.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
