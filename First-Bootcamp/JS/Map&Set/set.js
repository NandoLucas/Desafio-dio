const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valUnico(array){
    const mySet = new Set(array);

    return [...mySet]; //spread
}

console.log(valUnico(array));