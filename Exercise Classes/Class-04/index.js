var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Carro.prototype.dirigir = function (pass1, pass2) {
        if (pass1 === undefined && pass2 === undefined) {
            console.log("Dirigindo...");
        }
        else if (pass1 !== undefined && pass2 === undefined) {
            console.log("".concat(pass1, " dirigindo o carro..."));
        }
        else if (pass2 !== undefined && pass1 === undefined) {
            console.log("".concat(pass2, " dirigindo o carro..."));
        }
        else if (typeof pass1 === 'number' && typeof pass2 === 'number') {
            console.log(pass1 + pass2);
        }
        else {
            console.log("".concat(pass1, " dirigindo o carro e ").concat(pass2, " \u00E9 o passageiro..."));
        }
    };
    return Carro;
}());
var carro = new Carro("Renault", "Logan");
carro.dirigir();
carro.dirigir();
carro.dirigir("João Gabriel");
carro.dirigir("João Gabriel", "Artur Mota");
carro.dirigir(1, '"2 string"');
carro.dirigir('"1 string"', 2);
carro.dirigir(1, 5);
function dirigir(pass1, pass2) {
    if (pass1 === undefined && pass2 === undefined) {
        console.log("Dirigindo...");
    }
    else if (pass1 !== undefined && pass2 === undefined) {
        console.log("".concat(pass1, " dirigindo o carro..."));
    }
    else if (pass2 !== undefined && pass1 === undefined) {
        console.log("".concat(pass2, " dirigindo o carro..."));
    }
    else if (typeof pass1 === 'number' && typeof pass2 === 'number') {
        console.log(pass1 + pass2);
    }
    else {
        console.log("".concat(pass1, " dirigindo o carro e ").concat(pass2, " \u00E9 o passageiro..."));
    }
}
console.log("\n\n\n");
dirigir();
dirigir();
dirigir("João Gabriel");
dirigir("João Gabriel", "Artur Mota");
dirigir(1, '"2 string"');
dirigir('"1 string"', 2);
dirigir(1, 5);
