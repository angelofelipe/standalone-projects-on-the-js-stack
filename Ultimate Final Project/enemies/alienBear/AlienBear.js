import Enemy from "../Enemy.js";
import FactoryAlienBear from "./FactoryAlienBear.js";

export default class AlienBear extends Enemy {
    constructor(state, patternAtack, lifes = 1, name = 'Alien Bear') {
        super(name, lifes, state, patternAtack);
    }

    nextPatternAttack() {
        const nextAttack = this._patternAtack.nextPatternAttack();
        this._state = FactoryAlienBear.getState(nextAttack);
        return nextAttack;
    }
}
