

export default class SuperMarket {
    constructor(name, slogan) {
        if(!name || typeof name !== "string" ) {
            throw new TypeError("Name not is of the type string");
        }

        if(!slogan || typeof slogan !== "string") {
            throw new TypeError("Slogan not is of the type string");
        }

        this._name = name;
        this._slogan = slogan;
        this._products = [];
    }

    addProduct(product) {
        this._products.push(product);
    }

    consultProducts() {
        if(this._products.length === 0) {
            const error = new Error("There are no registered products");
            console.error(error.message);
            // console.error(error);
            throw error;
        }
        console.log(this._products);
    }

    // Getters and Setters

    get name() {
        return this._name;
    }

    get slogan() {
        return this._slogan;
    }

    set name(name) {
        this._name = name;
    }

    set slogan(slogan) {
        this._slogan = slogan;
    }

}