import FactorySpaceship from './FactorySpaceship.js';
import { StateLeft, StateCenter, StateRight } from '../State.js';

export default class Spaceship {
    constructor(name, state, lifes) {
        this._name = name; // string
        this._state = state;  // StateLeftSpaceship, StateCenterSpaceship, StateRightSpaceship
        this._lifes = lifes; // number
        this._initialLifes = lifes; // number

        let staminafactor = Math.ceil( Math.max(lifes / 4, 1) );
        this._deliveryMode = {
            on: false,
            stamina: 0,
            maxStamina: Math.round(lifes / 2),
            increaseStamina: staminafactor,
            decreaseStamina: staminafactor * 1.5
        }
    }

    stringState() {
        return this._state.stringState();
    }

    rest() {
        this._lifes = this._initialLifes;
    }

    decreaseLife(criticalDamage = false) {
        if (this._deliveryMode.on || criticalDamage)
            this._lifes -= 2;
        else
            this._lifes--;
    }

    moveOn(char) {

        if( (char === 'a' || char === 'A' ) && this._state instanceof StateLeft    ||
            (char === 'd' || char === 'D' ) && this._state instanceof StateCenter )
        {
            this._state = FactorySpaceship.getState(FactorySpaceship.RIGHT);
        }
        else if (
            (char === 'a' || char === 'A' ) && this._state instanceof StateCenter ||
            (char === 'd' || char === 'D' ) && this._state instanceof StateRight )
        {
            this._state = FactorySpaceship.getState(FactorySpaceship.LEFT);
        }
        else if (
            (char === 'a' || char === 'A' ) && this._state instanceof StateRight ||
            (char === 'd' || char === 'D' ) && this._state instanceof StateLeft )
        {
            this._state = FactorySpaceship.getState(FactorySpaceship.CENTER);
        }
        else if (char === 'w' || char === 'W')
        {
            if (this._deliveryMode.stamina > this._deliveryMode.decreaseStamina)
            {
                this._deliveryMode.on = true;
            }
            else { return false; }
        }
        else if (char !== 's' || char === 'S') { return false; }

        return true;
    }

    // Protected Functions
    verifyDeliveryMode(sufferedDamageNow) {
        if (this._deliveryMode.on && this._deliveryMode.stamina > 0)
        {
            this._deliveryMode.stamina -= this._deliveryMode.decreaseStamina;
        }
        else if (this._deliveryMode.on && this._deliveryMode.stamina <= 0)
        {
            this._deliveryMode.on = false;
        } 
        else if (
            !this._deliveryMode.on && 
            this._deliveryMode.stamina < this._deliveryMode.maxStamina &&
            sufferedDamageNow != true
        )
        {
            this._deliveryMode.stamina += this._deliveryMode.increaseStamina;

            if (this._deliveryMode.stamina > this._deliveryMode.maxStamina)
            {
                this._deliveryMode.stamina = this._deliveryMode.maxStamina;
            }
        }
    }

    // Getters and Setters
    get name() {
        return this._name;
    }

    get state() {
        return this._state.state;
    }

    get lifes() {
        return this._lifes;
    }

    get deliveryMode() {
        return this._deliveryMode.on ? 'On' : 'Off';
    }

    get deliveryModeOn() {
        return this._deliveryMode.on;
    }

    get stamina() {
        return this._deliveryMode.stamina;
    }

    set state(state) {
        this._state = FactorySpaceship.getState(state);
    }

    set lifes(lifes) {
        this._lifes = lifes;
    }
}