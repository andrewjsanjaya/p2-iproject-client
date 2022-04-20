<script>
import { useMusicStore } from "../stores/music";
import { mapActions, mapState } from "pinia";
import NavigationBar from "../components/NavigationBar.vue";
import FavoriteCard from "../components/FavoriteCard.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useMusicStore, ["favoriteMusics"]),
  },
  methods: {
    ...mapActions(useMusicStore, ["favoriteList"]),
  },
  created() {
    this.favoriteList();
  },
  components: {
    NavigationBar,
    FavoriteCard,
  },
};
</script>

<template>
  <!-- navbar -->
  <NavigationBar />

  <!-- content -->
  <div class="content">
    <div class="row mx-auto">
      <div class="card-group">
        <!-- card view -->
        <div v-for="music in favoriteMusics" class="col-4">
          <FavoriteCard :music="music" />
        </div>
      </div>
    </div>
  </div>

  <!-- end content -->
</template>

<style scoped>
* {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
