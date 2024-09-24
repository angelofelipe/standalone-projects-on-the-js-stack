import AlienBear from "./AlienBear.js";
import Checker from "../../Checker.js";
import Attack from "../Attack.js";
import StateLeftAlienBear from "./StateLeftAlienBear.js";
import StateCenterAlienBear from "./StateCenterAlienBear.js";
import StateRightAlienBear from "./StateRightAlienBear.js";

export default class FactoryAlienBear {
    static getAlienBear(state, patternAttack, lifes) {
        if (!state || !patternAttack || !lifes) {
            throw new Error('AlienBear must have a state, patternAttack and lifes that not be null');
        }
        if (Checker.isNotString(state)) {
            throw new Error('AlienBear state must be a string');
        }
        if (Checker.isNotNumber(lifes)) {
            throw new Error('AlienBear lifes must be a number');
        }
        const cleanPatternAttack = Checker.PatternAttack(patternAttack);
        if (cleanPatternAttack.length === 0) {
            throw new Error('AlienBear patternAttack must contain left, center or right');
        }

        const classState = FactoryAlienBear.getState(state);
        const attack = new Attack(patternAttack);

        return new AlienBear(classState, attack, lifes);
    }

    static getState(state) {
        switch (state) {
            case "left":
                return new StateLeftAlienBear();
            case "center":
                return new StateCenterAlienBear();
            case "right":
                return new StateRightAlienBear();
            default:
                return new StateCenterAlienBear();
        }
    }
}

// const alienBear = FactoryAlienBear.getAlienBear('center', ['center','left','right'], 3);
// console.log(alienBear);
