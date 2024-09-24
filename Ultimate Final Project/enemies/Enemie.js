export default class Enemy { // abstract class
    constructor(name = 'Enemy', lifes = 1, state, patternAtack) {
        this._name = name; // string
        this._lifes = lifes; // number
        this._state = state; // class State  // StateLeft, StateRight, StateCenter
        this._patternAtack = patternAtack; // class Attack
    }

    stringState() {
        return this._state.stringState();
    }

    nextPatternAttack() { /* implement in the child class */ }

    decreaseLife() {
        this._lifes--;
    }

    // Getters and Setters
    get name() {
        return this._name;
    }

    get lifes() {
        return this._lifes;
    }

}