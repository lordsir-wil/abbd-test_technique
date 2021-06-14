<template>
  <v-card
      class="mx-auto card__product"
      :max-width="maxWidth"
      outlined
  >
    <mkp-image :src="card.src" alt="Product image" height="300px" width="300px"/>

    <v-card-title>
      {{ card.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ card.description }}
    </v-card-subtitle>

    <mkp-button :color="color" class="btn__product" @clicked="addToCart()">
      {{$t("card.button")}}
    </mkp-button>

  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import MkpImage from "@/components/simples/Image.vue";
import MkpButton from "@/components/simples/Button.vue";

import {Card} from "@/models/Card.ts";
import {ProductModel} from "@/models/ProductModel";
const {Color} = require("@/enums/ColorEnum");

export default Vue.extend({
  name: "mkpCardProduct",
  components: {MkpButton, MkpImage},
  props: {
    product: {
      type: ProductModel,
      required: true
    },
    maxWidth : {
      type: Number,
      default: 344
    },
    color : {
      type: String,
      default: Color.pink,
      validator: (val) => {
        return Object.keys(Color).includes(val);
      }
    }
  },
  computed: {
    card() {
      return new Card(this.product.img, this.product.name, this.product.description);
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', this.$props.product);
    }
  }
})
</script>

<style scoped>
  .btn__product {
    margin: 12px;
    color: white;
  }

  .card__product {
    margin: 12px;
    text-align: center;
  }

  ::v-deep .v-card__title {
    display: block;
  }
</style>