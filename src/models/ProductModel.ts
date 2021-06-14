export class ProductModel {

    private _img: String;

    private _description: String;

    private _name: String;

    constructor(img: String, name: String, description: String) {
        this._img = img;
        this._name = name;
        this._description = description;
    }

    get img(): String {
        return this._img;
    }

    set img(value: String) {
        this._img = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }
}