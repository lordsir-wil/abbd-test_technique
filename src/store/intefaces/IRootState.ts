import {Module} from "vuex";
import {ICart} from "@/store/intefaces/ICart";
import {IProducts} from "@/store/intefaces/IProducts";

export interface IRootState {
    cartService: ICart,
    productService: IProducts
}