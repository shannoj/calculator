function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y; 
}


function operator(){

let num1 = prompt("enter first number");

let opp = prompt("enter operation");

let num2 = prompt("enter second number");

let result = 0;

    if (opp == "+"){
        result = add(num1,num2);
    }

    if (opp == "-"){
        result = subtract(num1,num2);
    }
    if (opp == "*"){
       result = multiply(num1,num2);
    }
    if (opp == "/"){
        result = divide(num1,num2);
    }

    return result;
}
