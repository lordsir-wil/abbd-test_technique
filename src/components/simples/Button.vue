<template>
  <v-btn :color="color" @click="clicked">
    <slot/>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

import {Color} from "@/enums/ColorEnum.ts";

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: Color.normal,
    },
    click: {
      type: Function
    }
  },
  name: "mkpButton",
  methods: {
    clicked() {
      this.$emit('clicked');
    }
  }
})
</script>

<style scoped>

</style>