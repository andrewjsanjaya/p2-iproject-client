<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
import NavigationBar from "../components/NavigationBar.vue";

export default {
  data() {
    return {
      verificationCode: "",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["verifySubmitHandler", "getVerificationCode"]),
  },
  components: {
    NavigationBar,
  },
};
</script>

<template>
  <NavigationBar />

  <div class="container-login">
    <form class="login-form card" style="width: 18rem">
      <img src="../assets/images-login.jpg" alt="login-image" />
      <div class="card-body">
        <div class="form-group">
          <label class="mb-4" style="font-size: larger"
            >We already send your verification code to your email</label
          >

          <label style="font-size: smaller"
            >didn't receive the verification code ?</label
          ><br />

          <input
            type="submit"
            value="Get Verification Code"
            class="button-get-code btn button-hover mb-4 mt-2"
            @click.prevent="getVerificationCode()"
          />

          <input
            type="text"
            class="form-control"
            placeholder="Your Verification Code"
            v-model="verificationCode"
          />
          <div class="text-center mt-4">
            <input
              type="submit"
              value="Verify"
              class="button-verify btn button-hover mb-4 mt-2"
              @click.prevent="
                verifySubmitHandler({
                  verificationCode,
                })
              "
            />
          </div>
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

/* .background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(@/assets/images1.jpg);
  height: 100vh;
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
} */
.container-login {
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(@/assets/images1.jpg);
  justify-content: center;
  align-items: center;
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

.button-verify {
  width: 200px;
  border-radius: 20px;
  color: #000000;
  background-color: #ffffff;
}

.button-get-code {
  font-size: smaller;
  width: 150px;
  height: 30px;
  border-radius: 20px;
  color: #000000;
  background-color: #a3a3a3;
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
  width: 50vw !important;
  border-radius: 2%;
}

/* .holder {
  margin-top: 170px;
} */
</style>
