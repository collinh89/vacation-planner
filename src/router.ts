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
      component: () => import("@/views/vacation-generation-view/Planner.vue"),
    },
    {
      path: "/recommendations",
      component: () =>
        import("@/views/vacation-generation-view/Recommendations.vue"),
    },
    {
      path: "/loading",
      component: () =>
        import("@/views/vacation-generation-view/Loading-Page.vue"),
    },
  ],
});
