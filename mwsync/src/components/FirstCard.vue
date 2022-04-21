<script>
import { useMusicStore } from "../stores/music";
import { mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  props: ["music"],
  methods: {
    ...mapActions(useMusicStore, ["addFavorite"]),

    addFavoriteSubmit() {
      const data = {
        title: this.music.name,
        imageUrl: this.music.imageUrl,
        spotifyUrl: this.music.link,
      };

      this.addFavorite(data);
    },
  },
};
</script>

<template>
  <div class="card card-border-rounded mx-auto my-3" style="width: 24rem">
    <img :src="music.imageUrl" class="card-img-top" alt="blog image" />
    <div class="card-body">
      <h5 class="card-title text-center mt-4">{{ music.name }}</h5>
    </div>
    <div class="card-foot mb-2">
      <div class="d-flex justify-content-evenly button-div">
        <a class="btn btn-success" :href="music.link" target="_blank"
          >Play in Spotify</a
        >
        <button class="btn btn-primary" @click.prevent="addFavoriteSubmit()">
          Add to Playlist
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 550px;
  background-color: rgba(254, 254, 255, 0.7);
  font-family: "Manrope", sans-serif;
}
</style>
