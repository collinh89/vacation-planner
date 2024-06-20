import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/plan",
      component: () => import("@/views/Planner.vue"),
    },
    {
      path: "/recommendations",
      component: () => import("@/views/Recommendations.vue"),
    },
    {
      path: "/loading",
      component: () => import("@/views/Loading-Page.vue"),
    },
  ],
});
