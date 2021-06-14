export class Card {
    private _src: String;
    private _description: String;
    private _title: String;

    constructor(src: String, title: String, description: String) {
        this._src = src;
        this._description = description;
        this._title = title
    }

    get src(): String {
        return this._src;
    }

    set src(value: String) {
        this._src = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }


    get title(): String {
        return this._title;
    }

    set title(value: String) {
        this._title = value;
    }
}