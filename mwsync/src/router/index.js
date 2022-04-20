import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import VerifyView from "@/views/VerifyView.vue";

const routes = [
  { path: "/", name: "Landing", component: LandingView },
  { path: "/login", name: "Login", component: LoginView },
  { path: "/register", name: "Register", component: RegisterView },
  { path: "/verify", name: "Verify", component: VerifyView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   if (localStorage.access_token) {
//     if (localStorage.status === "unverified" && to.name !== "Landing") {
//       next({ name: "Landing" });
//     } else if (
//       localStorage.status === "verified" &&
//       (to.name === "Login" || to.name === "Register" || to.name === "Landing")
//     ) {
//       next({ name: "home" });
//     }
//   } else if (
//     !localStorage.access_token &&
//     to.name !== "Login" &&
//     to.name !== "Register" &&
//     to.name !== "Landing"
//   ) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });

export default router;
