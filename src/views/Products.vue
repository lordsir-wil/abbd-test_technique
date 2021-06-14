<template>
    <v-container fluid id="productsPage">
      <v-row dense>
        <mkp-card-product v-for="(product, index) in products" :key="index" :product="product" />
      </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import MkpCardProduct from "@/components/advanced/CardProduct.vue";

export default Vue.extend({
  name: "mkpProductsPage",
  components: {MkpCardProduct},
  computed: {
    products () {
      return this.$store.state.productService.products;
    }
  },
  mounted() {
    this.$store.dispatch('getProductFromBack');
  }
})
</script>

<style scoped>

</style>