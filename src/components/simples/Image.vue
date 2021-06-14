<template>
  <v-img
      :alt="alt"
      :src="src"
      :height="height"
      :width="width"
  ></v-img>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "mkpImage",
  props: {
    alt: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: process.env.VUE_APP_IMG_DEFAULT_SIZE
    },
    width: {
      type: String,
      default: process.env.VUE_APP_IMG_DEFAULT_SIZE
    }
  }
})
</script>

<style scoped>

</style>