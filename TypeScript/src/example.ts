let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somar(num1: number, num2: number, dprint: boolean, frase: string){
    let resultado = num1 + num2;
    if(dprint){
        console.log(frase + resultado);
    }
    return num1 + num2;
}
let dprint = true;
let frase = 'O valor é: ';
if(button){
    button.addEventListener('click', () => {
        if(input1 && input2){
            console.log(somar(Number(input1.value), Number(input2.value), dprint, frase));
        }
    })
}
