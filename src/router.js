import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "AnaSayfaPage",
    path: "/",
    // component : Home
    component: () => import("./views/anaSayfa.vue"),
  },
  {
    name: "KesfetPage",
    path: "/kesfet",
    // component : Home
    component: () => import("./views/kesfet.vue"),
  },
  {
    name: "KitaplikPage",
    path: "/kitaplik",
    // component : Home
    component: () => import("./views/kitaplik.vue"),
  },
  {
    name: "YukseltPage",
    path: "/yukselt",
    // component : Home
    component: () => import("./views/yükselt.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
