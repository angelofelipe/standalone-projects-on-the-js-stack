export class State {
    stringState() {
        return "State is abstract";
    }
}

export class StateCenter extends State {
    stringState() {
        return "StateCenter is abstract";
    }
}

export class StateLeft extends State {
    stringState() {
        return "StateLeft is abstract";
    }
}

export class StateRight extends State {
    stringState() {
        return "StateRight is abstract";
    }
}