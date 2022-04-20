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
    ...mapActions(useUserStore, ["registerSubmitHandler"]),
  },
};
</script>

<template>
  <div class="container-register">
    <form class="login-form card" style="width: 18rem">
      <div class="card-body">
        <h3 class="text-center">Sign Up</h3>
        <br />

        <div class="form-group">
          <label>Email address</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter email"
            v-model="email"
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

        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your username"
            v-model="username"
          />
        </div>

        <div class="form-group">
          <label>City</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your address"
            v-model="city"
          />
        </div>

        <div class="text-center">
          <p>
            Already have an account ?
            <router-link to="/login" class="direct-link">Sign In</router-link>
          </p>
          <input
            type="submit"
            value="Sign Up"
            class="button-register btn button-hover"
            @click.prevent="
              registerSubmitHandler({
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

.container-register {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(@/assets/images1.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn:hover {
  color: #ffffff !important;
}

.login-form {
  background: rgba(255, 255, 255, 0.5);
}

.button-register {
  width: 200px;
  border-radius: 20px;
  color: #ffffff;
  background-color: #000000;
}

.form-group {
  margin-bottom: 15px;
  margin-left: 50px;
  margin-right: 50px;
}

.direct-link {
  text-decoration: none;
  font-weight: bold;
  color: #000000 !important;
}

.direct-link:hover {
  font-size: larger;
}

.card {
  width: 50vw !important;
  border-radius: 2%;
}
</style>
