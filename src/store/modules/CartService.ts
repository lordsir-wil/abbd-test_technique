import {CartModel} from "@/models/CartModel";
import {GetterTree, Module, MutationTree} from "vuex";
import {ICart} from "@/store/intefaces/ICart";
import {ProductModel} from "@/models/ProductModel";
import {IRootState} from "@/store/intefaces/IRootState";

const state: ICart = {
    cart: new CartModel()
};

const mutations: MutationTree<ICart> = {
    ADD_PRODUCT_TO_CART(state: ICart, product: ProductModel) {
        state.cart.addArcticleToCart(product);
    },
    REMOVE_PRODUCT_FROM_CART(state: ICart, product: ProductModel) {
        state.cart.removeArticleInCart(product);
    },
};

const getters: GetterTree<ICart, IRootState> = {
    getCartContent(state: ICart) {
        return state.cart.getContent();
    },
    getCartSize(state: ICart) {
        return state.cart.size();
    },
};

export const CartService: Module<ICart, IRootState> = {
    state,
    mutations,
    getters,
};