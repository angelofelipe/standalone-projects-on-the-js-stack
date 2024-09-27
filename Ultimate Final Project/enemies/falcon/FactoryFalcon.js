import Falcon from "./Falcon.js";
import Checker from "../../Checker.js";
import Attack from "../Attack.js";
import Factory from '../../Factory.js';
import StateLeftFalcon from "./StateLeftFalcon.js";
import StateCenterFalcon from "./StateCenterFalcon.js";
import StateRightFalcon from "./StateRightFalcon.js";

export default class FactoryFalcon extends Factory {

    static create(mode, state = 'center') {
        switch (mode) {
            case 'easy':
                return FactoryFalcon.easyMode(state);
            case 'medium':
                return FactoryFalcon.mediumMode(state);
            case 'hard':
                return FactoryFalcon.hardMode(state);
            default:
                throw new Error('Invalid mode');
        }
    }

    static easyMode(state) {
        let patternAtack = ['center', 'left', 'right'];
        return FactoryFalcon.get(state, patternAtack, 3);
    }

    static mediumMode(state) {
        let patternAtack = ['center', 'left', 'right', 'left'];
        return FactoryFalcon.get(state, patternAtack, 5);
    }

    static hardMode(state) {
        let patternAtack = ['center', 'left', 'right', 'left', 'right', 'center', 'center', 'left'];
        return FactoryFalcon.get(state, patternAtack, 10);
    }

    static get(state, patternAttack, lifes) {
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
                throw new Error('Invalid state');
        }
    }
}

// const alienFalcon = FactoryFalcon.get('center', ['center','left','right'], 3);
// const falcon = FactoryFalcon.create('easy');
// console.log(falcon);
// console.log(falcon.stringState());