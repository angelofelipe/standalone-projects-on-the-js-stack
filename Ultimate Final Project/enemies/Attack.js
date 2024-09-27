export default class Attack {
    constructor(patternAttack) {
        this._patternAttack = patternAttack;
        this._currentPatternAttack = [...patternAttack];
    }

    nextPatternAttack() {
        let nextAttack;
        if (this._currentPatternAttack.length > 0) {
            nextAttack = this._currentPatternAttack.shift();
        } else {
            this._currentPatternAttack = [...this._patternAttack];
            nextAttack = this._currentPatternAttack.shift();
        }
        return nextAttack;
    }

}

// const patternAttack = ['center', 'left', 'right'];
// console.log(patternAttack);
// const attack = new Attack(patternAttack);
// console.log(attack);
// console.log(attack.nextPatternAttack());
// console.log(attack.nextPatternAttack());
// console.log(attack.nextPatternAttack());
// console.log(attack);
// console.log(attack.nextPatternAttack());
// console.log(attack);
// console.log(attack.nextPatternAttack());
// console.log(attack);
// console.log(attack.nextPatternAttack());
// console.log(attack);