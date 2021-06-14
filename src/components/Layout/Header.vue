<template>
  <div id="headerShop">
    <v-app-bar>
      <v-toolbar-title>{{ $t("header.title")}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <mkp-router-link to="/">
        {{$t("header.links.product")}}
      </mkp-router-link>

        <mkp-router-link to="/Cart">
          {{$t("header.links.cart")}} ({{counter}})
        </mkp-router-link>



    </v-app-bar>
  </div>
</template>

<script>
import Vue from "vue";

import MkpRouterLink from "@/components/advanced/RouterLink.vue";

export default Vue.extend({
  name: "mkpHeader",
  components: {MkpRouterLink},
  computed: {
    counter() {
      return this.$store.state.cartService.cart.getCartContentQuantity();
    }
  }
})
</script>

<style scoped>

</style>