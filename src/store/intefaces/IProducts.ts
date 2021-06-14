import {ProductModel} from "@/models/ProductModel";
import {IRootState} from "@/store/intefaces/IRootState";

export interface IProducts {
    products: ProductModel[];
}