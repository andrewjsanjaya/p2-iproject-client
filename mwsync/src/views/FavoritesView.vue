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
  <div class="background">
    <!-- content -->
    <div class="content">
      <div class="row mx-auto">
        <div class="card-group">
          <!-- card view -->
          <div v-for="music in favoriteMusics" class="col-6">
            <FavoriteCard :music="music" />
          </div>
        </div>
      </div>
    </div>

    <!-- end content -->
  </div>
</template>

<style scoped>
* {
  overflow-y: hidden;
  overflow-x: hidden;
}

.content {
  margin-top: 100px;
}

.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(@/assets/images1.jpg);
  width: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: scroll;
  height: 100vh;
}
</style>
