import Falcon from "./Falcon.js";
import Checker from "../../Checker.js";
import Attack from "../Attack.js";
import StateLeftFalcon from "./StateLeftFalcon.js";
import StateCenterFalcon from "./StateCenterFalcon.js";
import StateRightFalcon from "./StateRightFalcon.js";

export default class FactoryFalcon {
    static getFalcon(state, patternAttack, lifes) {
        if (!state || !patternAttack || !lifes) {
            throw new Error('Falcon must have a state, patternAttack and lifes that not be null');
        }
        if (Checker.isNotString(state)) {
            throw new Error('Falcon state must be a string');
        }
        if (Checker.isNotNumber(lifes)) {
            throw new Error('Falcon lifes must be a number');
        }
        const cleanPatternAttack = Checker.PatternAttack(patternAttack);
        if (cleanPatternAttack.length === 0) {
            throw new Error('Falcon patternAttack must contain left, center or right');
        }

        const classState = FactoryFalcon.getState(state);
        const attack = new Attack(patternAttack);

        return new Falcon(classState, attack, lifes);
    }

    static getState(state) {
        switch (state) {
            case "left":
                return new StateLeftFalcon();
            case "center":
                return new StateCenterFalcon();
            case "right":
                return new StateRightFalcon();
            default:
                return new StateCenterFalcon();
        }
    }
}

// const alienFalcon = FactoryFalcon.getFalcon('center', ['center','left','right'], 3);
// console.log(alienFalcon);