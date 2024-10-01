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

    decreaseLife(criticalDamage = false) {
        if (criticalDamage)
            this._lifes -= 2;
        else
            this._lifes--;
    }
    
    moveOn() {
        return this._nextPatternAttack();
    }

    // abstract method
    _nextPatternAttack() { /* implement in the child class */ }
    
    // Getters and Setters
    get name() {
        return this._name;
    }

    get lifes() {
        return this._lifes;
    }

    get state() {
        return this._state.state;
    }

}