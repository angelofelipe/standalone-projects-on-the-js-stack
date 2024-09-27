export class State {
    state = 'abstract';

    stringState() {
        return "State is abstract";
    }
}

export class StateCenter extends State {
    state = 'center';

    stringState() {
        return "StateCenter is abstract";
    }
}

export class StateLeft extends State {
    state = 'left';
    
    stringState() {
        return "StateLeft is abstract";
    }
}

export class StateRight extends State {
    state = 'right';
    
    stringState() {
        return "StateRight is abstract";
    }
}