function somarNumeros(numero: number, numero1: number, callback: (numero: number)=> number): number{
    let resultado = numero + numero1;
    return callback(resultado);
}

function printValores(numero: number, numero1: number): void {
    console.log(numero + numero1);
}

function potenciacao(numero: number): number{
    return numero * numero;
}

function divisaoP(numero: number): number {
    return numero/numero;
}

console.log(somarNumeros(1, 3, potenciacao));
console.log(somarNumeros(1, 3, divisaoP));