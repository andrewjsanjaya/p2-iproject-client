<script>
import { mapActions, mapWritableState } from "pinia";
import { useMusicStore } from "../stores/music";
import NavigationBar from "../components/NavigationBar.vue";
import FirstCard from "../components/FirstCard.vue";
import PaginationComp from "../components/PaginationComp.vue";

export default {
  computed: {
    ...mapWritableState(useMusicStore, ["musics", "pageNow"]),
  },
  created() {
    this.musicList(this.$route.query);
  },
  methods: {
    ...mapActions(useMusicStore, ["musicList"]),
  },
  components: {
    NavigationBar,
    FirstCard,
    PaginationComp,
  },
};
</script>

<template>
  <NavigationBar />
  <div class="background">
    <!-- content -->
    <div class="content">
      <div class="row mx-auto">
        <div class="card-group">
          <!-- card view -->
          <div v-for="music in musics" class="col-4">
            <FirstCard :music="music" />
          </div>
        </div>
      </div>
    </div>

    <!-- pagination -->
    <!-- <PaginatePost :count="count" /> -->
    <PaginationComp :page="pageNow" />
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
  height: 100vh;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: scroll;
}
</style>
