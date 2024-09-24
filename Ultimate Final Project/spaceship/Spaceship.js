import FactorySpaceship from './FactorySpaceship.js';

export default class Spaceship {
    constructor(name, state, lifes) {
        this._name = name; // string
        this._state = state;  // StateLeftSpaceship, StateCenterSpaceship, StateRightSpaceship
        this._lifes = lifes; // number
    }

    stringState() {
        return this._state.stringState();
    }

    // Getters and Setters
    get name() {
        return this._name;
    }

    get state() {
        return this._state;
    }

    get lifes() {
        return this._lifes;
    }

    set state(state) {
        this._state = FactorySpaceship.getState(state);
    }

    set lifes(lifes) {
        this._lifes = lifes;
    }
}