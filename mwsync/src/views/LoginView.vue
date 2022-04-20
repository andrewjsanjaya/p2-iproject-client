<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      city: "",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["loginSubmitHandler"]),
  },
};
</script>

<template>
  <div class="container-login">
    <form class="login-form card" style="width: 18rem">
      <img src="../assets/images-login.jpg" alt="login-image" />
      <div class="card-body">
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="username / email"
            v-model="username"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            id="register-password"
            placeholder="Password"
            v-model="password"
          />
        </div>

        <div class="text-center holder">
          <p>
            Don't have an account ?
            <router-link to="/register" class="direct-link"
              >Sign Up</router-link
            >
          </p>
          <input
            type="submit"
            value="Sign In"
            class="button-login btn button-hover"
            @click.prevent="
              loginSubmitHandler({
                username,
                email,
                password,
                city,
              })
            "
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap");
label,
h3 {
  font-family: "Manrope", sans-serif;
}

label,
h3,
p {
  color: #ffffff;
}

.container-login {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(@/assets/images1.jpg);
  height: 100vh;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn:hover {
  color: #000000 !important;
}

.login-form {
  background: rgba(0, 0, 0, 0.5);
}

.button-login {
  width: 200px;
  border-radius: 20px;
  color: #000000;
  background-color: #ffffff;
}

.form-group {
  margin-bottom: 15px;
  margin-left: 50px;
  margin-right: 50px;
}

.direct-link {
  text-decoration: none;
  font-weight: bold;
  color: #ffffff !important;
}

.direct-link:hover {
  font-size: larger;
}
/* img {
  height: 100px;
  width: 754px;
  object-fit: contain;
} */

.card {
  width: 40vw !important;
  border-radius: 2%;
}

/* .holder {
  margin-top: 170px;
} */
</style>
