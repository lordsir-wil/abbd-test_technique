import Vue from 'vue'
import Vuex, {Store, StoreOptions} from 'vuex'
import {CartService} from "@/store/modules/CartService";
import {ProductService} from "@/store/modules/ProductService";
import {IRootState} from "@/store/intefaces/IRootState";

Vue.use(Vuex)

const store: StoreOptions<IRootState> = {
  modules: {
    cartService: CartService,
    productService: ProductService,
  }
};

const storage = new Vuex.Store<IRootState>(store)
export default storage;

storage.subscribe((mutation, state) => {
  localStorage.setItem("cart", JSON.stringify(state.cartService.cart))
})