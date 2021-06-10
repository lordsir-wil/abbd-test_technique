import {ProductModel} from "./ProductModel";

const DEFAULT_QUANTITY: number = 1;

type Article = {
    product: ProductModel,
    quantity: number
};

export class CartModel {

    private content: Article[];

    constructor() {
        this.content = new Array()
    }

    size() {
        return this.content.length;
    }

    addArcticleToCart(product: ProductModel, quantity: number = DEFAULT_QUANTITY) {
        if (!this.isInCart(product)) {
            const article: Article = {
                product: product,
                quantity: quantity
            };

            this.content.push(article);
        } else {
            this.addProduct(this.getArticle(product)!)
        }
        return this.content;
    }

    removeArticleInCart(product: ProductModel) {
        if (!this.isInCart(product)) {
            return null;
        } else {
            const article = this.getArticle(product) as Article
            const index = this.content.indexOf(article);
            this.content.splice(index, 1);
        }
        return this.content;
    }

    isInCart(product: ProductModel) {
        const result = this.getArticle(product)

        if (result) {
            return true
        }

        return false;
    }

    getArticle(product: ProductModel) {
        return this.content.find(obj => {
            return obj.product === product;
        })
    }

    getContent() {
        return this.content;
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

        this.content.push(article);
    }
}