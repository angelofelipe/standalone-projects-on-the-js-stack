class Carro {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo
    }

    dirigir(): void;
    dirigir(passageiro: string): void;
    dirigir(pass1: string, pass2: string): void;
    dirigir(pass1: number, pass2: number): void;
    dirigir(pass1: number, pass2: string): void;
    dirigir(pass1: string, pass2: number): void;

    dirigir(pass1?: string | number, pass2?: string | number): void{
        if(pass1 === undefined && pass2 === undefined){
            console.log("Dirigindo...")
        } else if (pass1 !== undefined && pass2 === undefined) {
            console.log(`${pass1} dirigindo o carro...`)
        } else if (pass2 !== undefined && pass1 === undefined) {
            console.log(`${pass2} dirigindo o carro...`)
        } else if (typeof pass1 === 'number' && typeof pass2 === 'number') {
            console.log(pass1 + pass2)
        } else {
            console.log(`${pass1} dirigindo o carro e ${pass2} é o passageiro...`)
        }
    }
}

const carro = new Carro("Renault", "Logan")

carro.dirigir()

carro.dirigir()
carro.dirigir("João Gabriel")
carro.dirigir("João Gabriel", "Artur Mota")
carro.dirigir(1, '"2 string"')
carro.dirigir('"1 string"', 2)
carro.dirigir(1, 5)


function dirigir(): void;
function dirigir(passageiro: string): void;
function dirigir(pass1: string, pass2: string): void;
function dirigir(pass1: number, pass2: number): void;
function dirigir(pass1: number, pass2: string): void;
function dirigir(pass1: string, pass2: number): void;

function dirigir(pass1?: string | number, pass2?: string | number): void{
    if(pass1 === undefined && pass2 === undefined){
        console.log("Dirigindo...")
    } else if (pass1 !== undefined && pass2 === undefined) {
        console.log(`${pass1} dirigindo o carro...`)
    } else if (pass2 !== undefined && pass1 === undefined) {
        console.log(`${pass2} dirigindo o carro...`)
    } else if (typeof pass1 === 'number' && typeof pass2 === 'number') {
        console.log(pass1 + pass2)
    } else {
        console.log(`${pass1} dirigindo o carro e ${pass2} é o passageiro...`)
    }
}
console.log("\n\n\n");

dirigir()

dirigir()
dirigir("João Gabriel")
dirigir("João Gabriel", "Artur Mota")
dirigir(1, '"2 string"')
dirigir('"1 string"', 2)
dirigir(1, 5)
