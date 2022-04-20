<script>
import { useUserStore } from "../stores/user";
import { useMusicStore } from "../stores/music";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  data() {
    return {
      searchPost: "",
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
    ...mapWritableState(useMusicStore, ["weather", "pageNow"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
  methods: {
    ...mapActions(useMusicStore, ["musicList"]),
    logoutSubmitHandler() {
      localStorage.clear();
      Swal.fire({
        title: "OK",
        text: "Logout Success",
        icon: "success",
      });
      this.$router.push("/login");
    },

    resetPage() {
      this.musicList({ page: 1 });
    },
  },
};
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark shadow-5-strong">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home"
        ><img src="../assets/mwsync-logo.png" @click.prevent="resetPage()"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              to="/home"
              @click.prevent="resetPage()"
              >Home</router-link
            >
          </li>
          <li class="nav-item me-4">
            <router-link class="nav-link" to="/favorites"
              >My Favorites</router-link
            >
          </li>
          <li>
            <p class="nav-link" to="">{{ weather }}</p>
          </li>
        </ul>
        <router-link v-if="!isLogin" class="btn btn-outline-success" to="/login"
          >Login</router-link
        >
        <router-link
          v-if="!isLogin"
          class="btn btn-outline-primary ms-4"
          to="/login"
          >Sign Up</router-link
        >
        <a
          v-if="isLogin"
          class="btn btn-danger ms-2"
          @click.prevent="logoutSubmitHandler"
          >Logout</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
img {
  width: 40px;
  height: 40px;
}

nav {
  overflow: hidden !important;
}
</style>
