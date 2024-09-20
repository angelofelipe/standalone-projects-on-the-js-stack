import Animal from "./Animal";

export default class Herbivore extends Animal {
    constructor(name){
        super(name);
        this._food = [];
    }

    escape(){

    }
}