import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000/playlists";

export const useMusicStore = defineStore({
  id: "playlist",
  state() {
    return {
      isLogin: false,
      musics: [],
      favoriteMusics: [],
      weather: "",
    };
  },

  getters: {},

  actions: {
    async musicList() {
      try {
        const data = await axios.get(`${baseUrl}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.musics = data.data.music.playlists;

        this.weather = data.data.weather;

        console.log(data);
      } catch (err) {
        Swal.fire({
          title: err.response.data.error.message,
          icon: "warning",
        });
      }
    },

    async addFavorite(data) {
      try {
        await axios.post(
          `${baseUrl}/favorite`,
          {
            title: data.title,
            imageUrl: data.imageUrl,
            spotifyUrl: data.spotifyUrl,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );

        Swal.fire({
          title: "Add to Favorite",
          icon: "success",
        });

        this.router.push("/favorites");
      } catch (err) {
        Swal.fire({
          title: err.response.data.error.message,
          icon: "warning",
        });
      }
    },

    async favoriteList() {
      try {
        const playlists = await axios.get(`${baseUrl}/favorite`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.favoriteMusics = playlists.data;
        console.log(playlists);
      } catch (err) {
        Swal.fire({
          title: err.response.data.error.message,
          icon: "warning",
        });
      }
    },
  },
});
