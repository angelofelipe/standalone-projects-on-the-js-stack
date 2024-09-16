// console.log("hello world")

// export default Lampada

const state = {
    On : "on",
    Off: "off"
}

class Lamp {
    state;
    color;
    brand;
    model;
    voltage;
    type;
    guarantee;

    constructor(color, brand, model, voltage, type, guarantee){
        this.state = state.On
        this.color = color
        this.brand = brand
        this.model = model
        this.voltage = voltage
        this.type = type
        this.guarantee = guarantee
    }

    on (){
        this.state = state.On
    }

    off (){
        this.state = state.Off
    }

    toggleState() {
        if (this.state == state.On)
            this.state = state.Off
        else
            this.state = state.On
    }

    printState() {
        console.log("The lamp is " + this.state)
    }

}

module.exports = Lamp