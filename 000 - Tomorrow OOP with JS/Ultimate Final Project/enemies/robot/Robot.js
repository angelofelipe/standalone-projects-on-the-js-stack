import Enemy from "../Enemy.js";
import FactoryRobot from "./FactoryRobot.js";

export default class Robot extends Enemy {
    constructor(state, patternAtack, lifes = 1, name = 'Robot') {
        super(name, lifes, state, patternAtack);
    }

    _nextPatternAttack() {
        const nextAttack = this._patternAtack.nextPatternAttack();
        this._state = FactoryRobot.getState(nextAttack);
        return nextAttack;
    }
}
