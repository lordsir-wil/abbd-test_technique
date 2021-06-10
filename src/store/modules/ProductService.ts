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
    getProductFromBack({ dispatch }) {
        //TODO: call mock server
        dispatch('ADD_PRODUCT', new ProductModel('produit', 'c\'est un produit'));
        dispatch('ADD_PRODUCT', new ProductModel('produit1', 'c\'est un produit1'));
        dispatch('ADD_PRODUCT', new ProductModel('produit2', 'c\'est un produit2'));
    }
};

const mutations: MutationTree<IProducts> = {
    ADD_PRODUCT_TO_LIST(state, product: ProductModel) {
        state.products.push(product);
    }
};

const getters: GetterTree<IProducts, IRootState> = {
    getCartContent(state: IProducts) {
        return state.products;
    },
};

export const ProductService: Module<IProducts, IRootState> = {
    state,
    actions,
    mutations,
    getters,
};