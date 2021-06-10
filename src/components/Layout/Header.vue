<template>
  <div id="nav">
    <router-link to="/">Products</router-link> |
    <router-link to="/cart">Cart({{ counter }})</router-link>
  </div>
</template>

<script>
export default {
  name: "mkpHeader",
  computed: {
    counter() {
      return this.$store.state.CartService.cart.size();
    }
  }
}
</script>

<style scoped>

</style>