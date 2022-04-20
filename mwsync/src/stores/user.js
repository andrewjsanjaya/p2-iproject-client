import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export const useUserStore = defineStore({
  id: "user",
  state() {
    return {
      isLogin: false,
    };
  },

  getters: {},

  actions: {
    async loginSubmitHandler(userLogin) {
      try {
        const user = await axios.post(`${baseUrl}/login`, userLogin);

        this.isLogin = true;
        localStorage.setItem("access_token", user.data.access_token);
        localStorage.setItem("id", user.data.id);
        localStorage.setItem("username", user.data.username);
        localStorage.setItem("email", user.data.email);
        localStorage.setItem("city", user.data.city);
        localStorage.setItem("status", user.data.status);

        Swal.fire({
          title: "Login Success",
          icon: "success",
        });

        this.router.push("/home");
      } catch (err) {
        Swal.fire({
          title: err.response.data.error.message,
          icon: "warning",
        });
      }
    },

    async registerSubmitHandler(userRegister) {
      try {
        const user = await axios.post(`${baseUrl}/register`, userRegister);

        Swal.fire({
          title: "Register Success",
          icon: "success",
        });

        this.router.push("/login");
      } catch (err) {
        Swal.fire({
          title: err.response.data.error.message[0],
          icon: "warning",
        });
        console.log(err);
      }
    },

    async verifySubmitHandler(verificationCode) {
      try {
        const user = await axios.patch(
          `${baseUrl}/verification`,
          verificationCode,
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        this.isLogin = true;
        localStorage.setItem("access_token", user.data.access_token);

        Swal.fire({
          title: "Your account has been verified successfully",
          icon: "success",
        });

        this.router.push("/home");
      } catch (err) {
        Swal.fire({
          title: err.response.data.error.message,
          icon: "warning",
        });
      }
    },

    async getVerificationCode() {
      try {
        const code = await axios.get(`${baseUrl}/verification`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        Swal.fire({
          title: "Check your email",
          icon: "success",
        });
      } catch (err) {
        Swal.fire({
          title: err.response.data.error.message,
          icon: "warning",
        });
      }
    },
  },
});
