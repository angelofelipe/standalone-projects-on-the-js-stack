import Enemy from "../Enemy.js";
// import Factory from '../../Factory.js';
import FactoryAlienBear from "./FactoryAlienBear.js";

export default class AlienBear extends Enemy {
    constructor(state, patternAtack, lifes = 1, name = 'Alien Bear') {
        super(name, lifes, state, patternAtack);
    }

    _nextPatternAttack() {
        const nextAttack = this._patternAtack.nextPatternAttack();
        this._state = FactoryAlienBear.getState(nextAttack);
        return nextAttack;
    }
}
