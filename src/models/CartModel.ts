import {ProductModel} from "./ProductModel";
import {Article} from "@/models/Article";

const DEFAULT_QUANTITY: number = 1;

export class CartModel {

    private _content: Article[];

    constructor() {
        this._content = new Array()
    }

    get content(): Article[] {
        return this._content;
    }

    set content(value: Article[]) {
        this._content = value;
    }

    initContentFromStorage(value: Article[]) {
        this._content = value;
    }

    size() {
        return this._content.length;
    }

    addArcticleToCart(product: ProductModel, quantity: number = DEFAULT_QUANTITY) {
        if (!this.isInCart(product)) {
            const article: Article = {
                product: product,
                quantity: quantity
            };

            this._content.push(article);
        } else {
            this.addProduct(this.getArticle(product)!)
        }
        return this._content;
    }

    removeArticleInCart(product: ProductModel) {
        if (!this.isInCart(product)) {
            return null;
        } else {
            const article = this.getArticle(product) as Article
            const index = this._content.indexOf(article);
            this._content.splice(index, 1);
        }
        return this._content;
    }

    isInCart(product: ProductModel) {
        const result = this.getArticle(product)

        if (result) {
            return true
        }

        return false;
    }

    getArticle(product: ProductModel) {
        return this._content.find(obj => {
            return obj.product.img === product.img && obj.product.name === product.name && obj.product.description === product.description;
        })
    }

    getContent() {
        return this._content;
    }

    private addProduct(article: Article) {
        const oldQuantity = article.quantity;
        article.quantity = +oldQuantity + DEFAULT_QUANTITY;
    }

    private addArticle(product: ProductModel) {
        const article: Article = {
            product: product,
            quantity: DEFAULT_QUANTITY
        };

        this._content.push(article);
    }
}