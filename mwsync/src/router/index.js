import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  { path: "/", name: "Landing", component: LandingView },
  { path: "/login", name: "Login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   if (
//     localStorage.access_token &&
//     (to.name === "login" || to.name === "register")
//   ) {
//     next({ name: "home" });
//   } else if (
//     !localStorage.access_token &&
//     (to.name === "bookmark" || to.name === "detailPost")
//   ) {
//     next({ name: "login" });
//   } else {
//     next();
//   }
// });

export default router;
