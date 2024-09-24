import Enemy from "../Enemy.js";
import FactoryFalcon from "./FactoryFalcon.js";

export default class Falcon extends Enemy {
    constructor(state, patternAtack, lifes = 1, name = 'Falcon') {
        super(name, lifes, state, patternAtack);
    }

    nextPatternAttack() {
        const nextAttack = this._patternAtack.nextPatternAttack();
        this._state = FactoryFalcon.getState(nextAttack);
        return nextAttack;
    }
}
