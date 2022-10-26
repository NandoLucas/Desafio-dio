const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const balance = 1000;
const products = [
    {
        name: "Playstation 5",
        price: 500
    },
    {
        name: "Tomatoes",
        price: 3
    },
    {
        name: "Fruits",
        price: 10
    },
    {
        name: "Meat",
        price: 20
    }
]
function sumAll(array){
    return array.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

function purchase(balance, array){
    return products.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev - current.price;
    }, balance);
}

console.log(sumAll(numbers));
console.log(purchase(balance, products));