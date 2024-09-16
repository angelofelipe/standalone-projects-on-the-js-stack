// import { Lampada } from "./Lampada.js"

const Lamp = require("./Lamp.js")

const lamp = new Lamp("red", "eurolux", "premium", 15, "fluorescent", 3)

lamp.printState()

lamp.off()

lamp.printState()

lamp.on()

lamp.printState()

lamp.toggleState()

lamp.printState()

lamp.toggleState()

lamp.printState()