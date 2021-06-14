import axios from "axios";
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
        axios
            .get(process.env.VUE_APP_URL_DB + '/posts')
            .then(response => {
                response.data.map((product: ProductModel) => {
                    commit('ADD_PRODUCT_TO_LIST', new ProductModel(product.img, product.name, product.description));
                })
                 console.log(response.data)
            })
            .catch(error => console.log(error))
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