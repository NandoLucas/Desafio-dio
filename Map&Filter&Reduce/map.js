const numbers = [1, 2];

const apple = {
    val: 2,
}

const orange = {
    val: 3,
}


function mapThis(array, thisArg){
    return array.map(function(item){
        return item * this.val;
    }, thisArg)
}

function map(array){
    return array.map(function(item){
        return item*2;
    })
}

console.log('this -> apple:', mapThis(numbers, apple));
console.log('this -> orange:', mapThis(numbers, orange));
console.log('Array formed by map:', map(numbers));
console.log('Original Array:', numbers);