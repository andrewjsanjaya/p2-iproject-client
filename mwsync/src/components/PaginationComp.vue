<script>
import { mapActions, mapState } from "pinia";
import { useMusicStore } from "../stores/music";

export default {
  data() {
    return {};
  },
  props: ["page"],
  methods: {
    ...mapActions(useMusicStore, ["musicList"]),
  },
};
</script>

<template>
  <nav aria-label="Page navigation" class="pagination">
    <ul class="pagination">
      <li class="page-item" v-if="page !== 0">
        <router-link
          class="page-link"
          :to="{ path: '/home', query: { page: page - 1 } }"
          @click.prevent="musicList({ page: page - 1 })"
        >
          previous
        </router-link>
      </li>
      <li class="page-item" v-if="page === 0">
        <router-link
          class="page-link"
          :to="{ path: '/home', query: { page: page + 2 } }"
          @click.prevent="musicList({ page: page + 2 })"
        >
          next
        </router-link>
      </li>
      <li class="page-item" v-if="page !== 0">
        <router-link
          class="page-link"
          :to="{ path: '/home', query: { page: page + 1 } }"
          @click.prevent="musicList({ page: page + 1 })"
        >
          next
        </router-link>
      </li>
    </ul>
  </nav>
</template>
