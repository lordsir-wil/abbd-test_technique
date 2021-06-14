<template>
  <v-list id="listCart">
    <mkp-row-table v-for="(article, index) in cart.content" :key="index" :article="article" />
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import MkpRowTable from "./RowTable.vue";

export default Vue.extend({
  name: "mkpTableCart",
  components: {MkpRowTable},
  computed: {
    cart() {
      return this.$store.state.cartService.cart;
    }
  }
})
</script>

<style scoped>

</style>