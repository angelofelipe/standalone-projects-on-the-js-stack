export default class Checker {
    // static isNumberOnly(value) {
    //     return typeof value === 'number';
    // }

    // static isNumber(value) {
    //     return !isNaN(value);
    // }

    static isNotNumber(value) {
        return typeof value !== 'number';
    }

    static isNotString(value) {
        return typeof value !== 'string';
    }

    static isNotValidState(state) {
        return state !== "left" && state !== "center" && state !== "right";
    }

    static isValidState(state) {
        return state === "left" || state === "center" || state === "right";
    }

    static PatternAttack(patternAttack) {
        return patternAttack.filter((element) => Checker.isValidState(element));
    }

}

