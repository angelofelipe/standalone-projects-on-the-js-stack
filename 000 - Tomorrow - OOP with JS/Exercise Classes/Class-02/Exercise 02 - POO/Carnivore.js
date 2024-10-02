import Animal from "./Animal";

export default class Carnivore extends Animal {
    constructor(name){
        super(name);
        this._presas = [];
    }
}