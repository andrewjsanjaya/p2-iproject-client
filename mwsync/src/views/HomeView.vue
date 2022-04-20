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
</template>

<style scoped>
* {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
