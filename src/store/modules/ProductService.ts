import {CartModel} from "@/models/CartModel";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {ICart} from "@/store/intefaces/ICart";
import {ProductModel} from "@/models/ProductModel";
import {IProducts} from "@/store/intefaces/IProducts";
import {IRootState} from "@/store/intefaces/IRootState";

const state: IProducts = {
    products: []
};

const actions: ActionTree<IProducts, any> = {
    getProductFromBack({ commit  }) {
        //TODO: call mock server
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', 'produit', 'c\'est un produit'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit1', 'c\'est un produit1'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit2', 'c\'est un produit2'));
        commit('ADD_PRODUCT_TO_LIST', new ProductModel('https://cdn.vuetifyjs.com/images/cards/sunshine.jpg','produit3', 'c\'est un produit2'));

    }
};

const mutations: MutationTree<IProducts> = {
    ADD_PRODUCT_TO_LIST(state: IProducts, product: ProductModel) {
        state.products.push(product);
    }
};

const getters: GetterTree<IProducts, IRootState> = {
    getProducts() {
        return state.products;
    },
};

export const ProductService: Module<IProducts, IRootState> = {
    namespaced: false,
    state,
    actions,
    mutations,
    getters,
};