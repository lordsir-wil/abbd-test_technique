<template>
  <v-app>
    <mkp-header/>
    <v-main class="centerMain">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import MkpHeader from "@/components/Layout/Header.vue";

export default Vue.extend({
  name: 'App',
  components: {MkpHeader},
  data: () => ({
    //
  }),
});
</script>

<style>
  .centerMain {
    text-align: center;
  }
</style>
