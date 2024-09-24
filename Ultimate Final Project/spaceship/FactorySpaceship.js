import Spaceship from './Spaceship.js';
import Checker from '../Checker.js';
import StateLeftSpaceship from './StateLeftSpaceship.js';
import StateCenterSpaceship from './StateCenterSpaceship.js';
import StateRightSpaceship from './StateRightSpaceship.js';

export default class FactorySpaceship {
    static get(name, state, lifes) {
        if (!name || !state || !lifes) {
            throw new Error('Spaceship must have a name, state and lifes that not be null');
        }
        if (Checker.isNotString(name) || Checker.isNotString(name)) {
            throw new Error('Spaceship name and state must be strings');
        }
        if (Checker.isNotValidState(state)) {
            throw new Error('Spaceship state must be left, center or right');
        }
        lifes = parseInt(lifes);
        if (Checker.isNotNumber(lifes)) {
            throw new Error('Spaceship lifes must be a number');
        }

        const classState = FactorySpaceship.getState(state);
        
        return new Spaceship(name, classState, lifes);
    }

    static getState(state) {
        switch (state) {
            case "left":
                return new StateLeftSpaceship();
            case "center":
                return new StateCenterSpaceship();
            case "right":
                return new StateRightSpaceship();
            default:
                throw new Error('Invalid state');
        }
    }

}

// const spaceship = FactorySpaceship.get('Enterprise', 'center', '3');
// console.log(spaceship.stringState());