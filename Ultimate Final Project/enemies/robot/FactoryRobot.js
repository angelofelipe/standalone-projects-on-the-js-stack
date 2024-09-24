import Robot from "./Robot.js";
import Checker from "../../Checker.js";
import Attack from "../Attack.js";
import StateLeftRobot from "./StateLeftRobot.js";
import StateCenterRobot from "./StateCenterRobot.js";
import StateRightRobot from "./StateRightRobot.js";

export default class FactoryRobot {
    static getRobot(state, patternAttack, lifes) {
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
                return new StateCenterRobot();
        }
    }
}

// const alienBear = FactoryRobot.getRobot('center', ['center','left','right'], 3);
// console.log(alienBear);