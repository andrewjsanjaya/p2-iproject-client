import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import VerifyView from "@/views/VerifyView.vue";
import HomeView from "@/views/HomeView.vue";
import FavoritesView from "@/views/FavoritesView.vue";

const routes = [
  { path: "/", name: "Landing", component: LandingView },
  { path: "/login", name: "Login", component: LoginView },
  { path: "/register", name: "Register", component: RegisterView },
  { path: "/verify", name: "Verify", component: VerifyView },
  { path: "/home", name: "Home", component: HomeView },
  { path: "/favorites", name: "Favorites", component: FavoritesView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (
    !localStorage.access_token &&
    to.name !== "Login" &&
    to.name !== "Register" &&
    to.name !== "Landing"
  ) {
    next({ name: "Login" });
  } else if (localStorage.status === "unverified" && to.name !== "Verify") {
    next({ name: "Verify" });
  } else if (
    localStorage.status === "verified" &&
    (to.name === "Login" ||
      to.name === "Register" ||
      to.name === "Landing" ||
      to.name === "Verify")
  ) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
