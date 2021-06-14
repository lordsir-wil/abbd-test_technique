<template>
  <div id="cartPage">
    <h1>{{$t("cart.title")}}</h1>
    <mkp-table-cart v-if="cartLength !== 0" />
    <mkp-empty-cart v-else/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MkpTableCart from "@/components/advanced/TableCart.vue";
import MkpEmptyCart from "@/components/simples/EmptyCart.vue";

export default Vue.extend( {
  name: "mkpCartPage",
  components: {MkpEmptyCart, MkpTableCart},
  computed: {
    cartLength() {
      return this.$store.state.cartService.cart.size();
    }
  }
})
</script>

<style scoped>

</style>