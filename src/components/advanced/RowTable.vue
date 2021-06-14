<template>
  <v-list-item>

    <v-list-item-content>
      <p>{{article.quantity}}X</p>
    </v-list-item-content>

      <mkp-image
          alt="Product image"
          :src="article.product.img"
      ></mkp-image>
    <v-spacer/>
    <v-list-item-content>
      <v-list-item-title v-text="article.product.name"></v-list-item-title>
      <v-list-item-subtitle v-text="article.product.description"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <mkp-button  @clicked="removeToCart()">{{ $t('cart.row.button')}}</mkp-button>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import MkpButton from "../simples/Button.vue";
import MkpImage from "../simples/Image.vue";
const {Article} = require("../../models/Article");

export default Vue.extend({
  name: "mkpRowTable",
  components: {MkpImage, MkpButton},
  props: {
    article: {
      type: Article,
      required: true
    }
  },
  methods: {
    removeToCart() {
      this.$store.dispatch('removeProductToCart', this.$props.article.product);
    }
  }
})
</script>

<style scoped>

</style>