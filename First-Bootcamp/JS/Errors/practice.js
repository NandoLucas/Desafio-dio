const array = [1, 2, 3]

function example(array, number){
    try {
        if(!array && !number) throw new ReferenceError("Send the parameters");
        if(typeof array !== 'object') throw new TypeError("Send a object");
        if(typeof number !== 'number') throw new TypeError("Send a number");
        if(array.length !== number) throw new RangeError("Length Invalid!");
        return array;
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("This error is a ReferenceError");
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("This error is a TypeError");
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log("This error is a RangeError");
            console.log(e.message);
        }
        else {
            console.log("Error was not expected" + e);
        }
    }
}
console.log(example([1, 2, 3, 4, 5], 5));