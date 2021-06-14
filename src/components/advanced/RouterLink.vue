<template>
  <router-link
    :to="to">
    <mkp-button :color="color">
      <slot/>
    </mkp-button>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import MkpButton from "@/components/simples/Button.vue";

import {Color} from "@/enums/ColorEnum.ts";

export default Vue.extend({
  name: "mkpRouterLink",
  components: {MkpButton},
  props: {
    to: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: Color.normal,
      required: false,
    }
  }
})
</script>

<style scoped>
 ::v-deep .v-btn {
   margin: 12px;
   display: inline-block;
  }
</style>