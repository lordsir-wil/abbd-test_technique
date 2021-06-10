import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {CartService} from "@/store/modules/CartService";
import {ProductService} from "@/store/modules/ProductService";
import {IRootState} from "@/store/intefaces/IRootState";

Vue.use(Vuex)

const store: StoreOptions<IRootState> = {
  modules: {
    CartService,
    ProductService,
  },
};

export default new Vuex.Store<IRootState>(store);
