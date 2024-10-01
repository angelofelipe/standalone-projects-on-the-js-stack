import Robot from "./Robot.js";
import Checker from "../../Checker.js";
import Attack from "../Attack.js";
import Factory from '../../Factory.js';
import StateLeftRobot from "./StateLeftRobot.js";
import StateCenterRobot from "./StateCenterRobot.js";
import StateRightRobot from "./StateRightRobot.js";

export default class FactoryRobot extends Factory {

    static create(mode, state = 'center') {
        switch (mode) {
            case 'easy':
                return FactoryRobot.easyMode(state);
            case 'medium':
                return FactoryRobot.mediumMode(state);
            case 'hard':
                return FactoryRobot.hardMode(state);
            default:
                throw new Error('Invalid mode');
        }
    }

    static easyMode(state) {
        let patternAtack = ['right', 'center', 'left'];
        return FactoryRobot.get(state, patternAtack, 3);
    }

    static mediumMode(state) {
        let patternAtack = ['right', 'center', 'left', 'center'];
        return FactoryRobot.get(state, patternAtack, 5);
    }

    static hardMode(state) {
        let patternAtack = ['right', 'center', 'left', 'center', 'left', 'right', 'right', 'center'];
        return FactoryRobot.get(state, patternAtack, 10);
    }

    static get(state, patternAttack, lifes) {
        if (!state || !patternAttack || !lifes) {
            throw new Error('Robot must have a state, patternAttack and lifes that not be null');
        }
        if (Checker.isNotString(state)) {
            throw new Error('Robot state must be a string');
        }
        if (Checker.isNotNumber(lifes)) {
            throw new Error('Robot lifes must be a number');
        }
        const cleanPatternAttack = Checker.PatternAttack(patternAttack);
        if (cleanPatternAttack.length === 0) {
            throw new Error('Robot patternAttack must contain left, center or right');
        }

        const classState = FactoryRobot.getState(state);
        const attack = new Attack(patternAttack);

        return new Robot(classState, attack, lifes);
    }

    static getState(state) {
        switch (state) {
            case "left":
                return new StateLeftRobot();
            case "center":
                return new StateCenterRobot();
            case "right":
                return new StateRightRobot();
            default:
                throw new Error('Invalid state');
        }
    }
}

// const robot = FactoryRobot.get('center', ['center','left','right'], 3);
// const robot = FactoryRobot.create('easy');
// console.log(robot);
// console.log(robot.stringState());