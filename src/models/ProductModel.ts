export class ProductModel {

    private _description: String;

    private _name: String;

    constructor(name: String, description: String) {
        this._name = name;
        this._description = description;
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