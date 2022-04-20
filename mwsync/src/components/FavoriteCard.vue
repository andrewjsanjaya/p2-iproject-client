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
  <div class="card card-border-rounded mx-auto my-3" style="width: 24rem">
    <img :src="music.imageUrl" class="card-img-top" alt="blog image" />
    <div class="card-body">
      <h5 class="card-title text-center mt-4">{{ music.title }}</h5>
      <div class="d-flex justify-content-between button-div">
        <a class="btn btn-success" :href="music.spotifyUrl" target="_blank"
          >Play in Spotify</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-div {
  margin-top: 100px;
}
</style>
