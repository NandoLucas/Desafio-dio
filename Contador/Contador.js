var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var max = "green";
var min = "red";
function increment(){
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if(currentNumber==10){
        currentNumberWrapper.style.color = max;
    }
    else {
        currentNumberWrapper.style.color = "black";
    }
}

function decrement(){
    if(currentNumber > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if(currentNumber==0){
        currentNumberWrapper.style.color = min;
    }
    else{
        currentNumberWrapper.style.color = "black";
    }
}