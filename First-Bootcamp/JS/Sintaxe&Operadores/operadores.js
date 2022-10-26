
function compare(a, b){
    const cf1 = f1(a, b);
    const cf2 = f2(a, b);

    return `${cf1} ${cf2}`;
}

function f1(a, b){
    const iguais = a === b;
    let aux = '';
    if(a!=b){
        aux = 'não';
    }
    return `Os números ${a} e ${b} ${aux} são iguais.`; 
};

function f2(a, b){
    const soma = a + b;
    let r10 = 'menor';
    let r20 = 'menor';

    if(soma > 10){
        r10 = 'maior';
    }
    if(soma > 20){
        r20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${r10} do que 10 e ${r20} do que 20.`;
}

console.log(compare(1, 2));