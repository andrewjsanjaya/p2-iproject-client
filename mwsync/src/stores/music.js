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
      weatherSymbol: "",
      pageNow: 0,
    };
  },

  getters: {},

  actions: {
    async musicList(query) {
      try {
        window.scrollTo(0, 0);
        const { page } = query;

        if (page) {
          this.pageNow = parseInt(page);
        } else {
          this.pageNow = 0;
        }

        const data = await axios.get(`${baseUrl}`, {
          headers: {
            access_token: localStorage.access_token,
          },
          params: {
            page,
          },
        });

        this.musics = data.data.music.playlists;

        this.weather = data.data.weather;

        if (this.weather.includes("sunny") || this.weather.includes("cloudy")) {
          this.weatherSymbol = "sunny";
        } else if (
          this.weather.includes("overcast") ||
          this.weather.includes("mist") ||
          this.weather.includes("rain") ||
          this.weather.includes("thunder") ||
          this.weather.includes("fog") ||
          this.weather.includes("drizzle")
        ) {
          this.weatherSymbol = "rain";
        } else {
          this.weatherSymbol = "snow";
        }
      } catch (err) {
        console.log(err.response);
        Swal.fire({
          title: err.response,
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
