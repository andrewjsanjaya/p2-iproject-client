<script>
import { mapActions, mapState } from "pinia";
import { useMusicStore } from "../stores/music";
import NavigationBar from "../components/NavigationBar.vue";
import FirstCard from "../components/FirstCard.vue";

export default {
  computed: {
    ...mapState(useMusicStore, ["musics"]),
  },
  created() {
    this.musicList();
  },
  methods: {
    ...mapActions(useMusicStore, ["musicList"]),

    // addPostForm() {
    //   this.$emit("addPostForm");
    // },

    // addPostSubmitHandler(data) {
    //   this.$emit("addPostSubmit", data);
    // },

    // editPostForm(id) {
    //   this.$emit("editPostForm", id);
    // },

    // editPostSubmitHandler(data) {
    //   this.$emit("editPostSubmit", data);
    // },

    // statusChange(data) {
    //   this.$emit("statusChange", data);
    // },

    // historyListTable() {
    //   this.$emit("historyListTable");
    // },

    // postListTable() {
    //   this.$emit("postListTable");
    // },

    // logoutUser() {
    //   this.$emit("logoutUser");
    // },
  },
  components: {
    NavigationBar,
    FirstCard,
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

  <!-- end content -->
</template>

<style scoped>
* {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
