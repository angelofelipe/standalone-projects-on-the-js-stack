import Spaceship from './Spaceship.js';
import Checker from '../Checker.js';
import Factory from '../Factory.js';
import StateLeftSpaceship from './StateLeftSpaceship.js';
import StateCenterSpaceship from './StateCenterSpaceship.js';
import StateRightSpaceship from './StateRightSpaceship.js';

export default class FactorySpaceship extends Factory {
    static lifeInEasyMode = 10;
    static lifeInMediumMode = 5;
    static lifeInHardMode = 3;

    static LEFT = 'left';
    static CENTER = 'center';
    static RIGHT = 'right';


    static create(name, state, mode){
        switch (mode) {
            case 'easy':
                return FactorySpaceship.easyMode(name, state);
            case 'medium':
                return FactorySpaceship.mediumMode(name, state);
            case 'hard':
                return FactorySpaceship.hardMode(name, state);
            default:
                throw new Error('Invalid mode');
        }
    }

    static easyMode(name, state) {
        return FactorySpaceship.get(name, state, this.lifeInEasyMode);
    }

    static mediumMode(name, state) {
        return FactorySpaceship.get(name, state, this.lifeInMediumMode);
    }

    static hardMode(name, state) {
        return FactorySpaceship.get(name, state, this.lifeInHardMode);
    }
    
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
// const spaceship = FactorySpaceship.create('Enterprise', 'center', 'easy');
// console.log(spaceship);
// console.log(spaceship.stringState());