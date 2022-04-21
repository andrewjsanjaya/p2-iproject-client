<script>
import { useMusicStore } from "../stores/music";
import { mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  props: ["music"],
  methods: {
    // ...mapActions(useMusicStore, ["addFavorite"]),
    // addFavoriteSubmit() {
    //   const data = {
    //     title: this.music.name,
    //     imageUrl: this.music.imageUrl,
    //     spotifyUrl: this.music.link,
    //   };
    //   this.addFavorite(data);
    // },
  },
};
</script>

<template>
  <div class="card text-center mx-4 my-3">
    <div class="card-header">
      <img :src="music.imageUrl" class="card-img-top" alt="blog image" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ music.title }}</h5>
      <div class="text-center button-div">
        <a class="btn btn-success" :href="music.spotifyUrl" target="_blank"
          >Play in Spotify</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-div {
  margin-top: 20px;
}

img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

h5 {
  color: #ffffff;
}

.card {
  font-family: "Manrope", sans-serif;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
