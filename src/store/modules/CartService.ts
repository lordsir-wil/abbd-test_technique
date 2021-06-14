import {CartModel} from "@/models/CartModel";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {ICart} from "@/store/intefaces/ICart";
import {ProductModel} from "@/models/ProductModel";
import {IRootState} from "@/store/intefaces/IRootState";
import {IProducts} from "@/store/intefaces/IProducts";
import {Article} from "@/models/Article";

const state: ICart = {
    cart: new CartModel()
};

const actions: ActionTree<ICart, any> = {
    addProductToCart({ commit  }, product) {
        commit('ADD_PRODUCT_TO_CART', product);
    },
    removeProductToCart({ commit  }, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product);
    }
};

const mutations: MutationTree<ICart> = {
    ADD_PRODUCT_TO_CART(state: ICart, product: ProductModel) {
        state.cart.addArcticleToCart(product);
    },
    REMOVE_PRODUCT_FROM_CART(state: ICart, product: ProductModel) {
        state.cart.removeArticleInCart(product);
    },
    INIT_CART(state: ICart) {
        if(localStorage.getItem("cart")) {
            const serializedCart = new CartModel();

            const content = JSON.parse(<string>localStorage.getItem("cart"))._content

            serializedCart.initContentFromStorage(content.map((elem: any) => {
                return {
                    product: new ProductModel(elem['product']._img, elem['product']._name, elem['product']._description),
                    quantity: elem['quantity']
                }
            }));

           state.cart = serializedCart;
        }
    }
};

const getters: GetterTree<ICart, IRootState> = {
    getCartContentQuantity(state: ICart) {
        let quantity: number = 0;
            state.cart.content.forEach(elem => {
               quantity += elem.quantity;
            })
        return quantity;
    }
};

export const CartService: Module<ICart, IRootState> = {
    namespaced: false,
    state,
    actions,
    mutations,
    getters,
};