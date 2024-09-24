export default class Attack {
    constructor(patternAttack) {
        this._patternAttack = patternAttack;
        this._currentPatternAttack = [...patternAttack];
    }

    nextPatternAttack() {
        let nextAttack;
        if (this._currentPatternAttack.length > 0) {
            nextAttack = this._currentPatternAttack[0].shift();
        } else {
            this._currentPatternAttack = this._patternAttack;
            nextAttack = this._currentPatternAttack[0].shift();
        }
        return nextAttack;
    }

}