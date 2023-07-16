function add(x,y){
    return parseInt(x) + parseInt(y);
}

function subtract(x,y){
    return parseInt(x) - parseInt(y);
}

function multiply(x,y){
    return parseInt(x) * parseInt(y);
}

function divide(x,y){
    return parseInt(x) / parseInt(y); 
}

function operator(opp, num1, num2){

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

const button = document.getElementsByTagName("button");

let num1 = "";

let num2 = "";

let equalPress = false;

let operatorPress = false;

let operation = "";

const display = document.getElementById("display");

display.textContent = "";

for (let i of button){
    i.addEventListener("click", function(){
        if (i.id == "AC"){
            display.textContent = "";
            num1 = "";
            num2 = "";
            operatorPress = false;
        }

        if (i.id == "0"){
            if (!operatorPress){
                num1 = num1 + "0";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "0";
                display.textContent = num2;
            }
        }

        if (i.id == "1"){

            if (!operatorPress){
                num1 = num1 + "1";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "1";
                display.textContent = num2;
            }
            
        }

        if (i.id == "2"){

            if (!operatorPress){
                num1 = num1 + "2";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "2";
                display.textContent = num2;
            }
            
        }

        if (i.id == "3"){

            if (!operatorPress){
                num1 = num1 + "3";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "3";
                display.textContent = num2;
            }
            
        }

        if (i.id == "4"){

            if (!operatorPress){
                num1 = num1 + "4";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "4";
                display.textContent = num2;
            }
            
        }

        if (i.id == "5"){

            if (!operatorPress){
                num1 = num1 + "5";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "5";
                display.textContent = num2;
            }
            
        }

        if (i.id == "6"){
            
            if (!operatorPress){
                num1 = num1 + "6";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "6";
                display.textContent = num2;
            }

        }

        if (i.id == "7"){

            if (!operatorPress){
                num1 = num1 + "7";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "7";
                display.textContent = num2;
            }
            
        }

        if (i.id == "8"){

            if (!operatorPress){
                num1 = num1 + "8";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "8";
                display.textContent = num2;
            }
            
        }

        if (i.id == "9"){

            if (!operatorPress){
                num1 = num1 + "9";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + "9";
                display.textContent = num2;
            }
            
        }

        if (i.id == "+"){
            operation = "+";
            operatorPress = !operatorPress;
            
        }

        if (i.id == "-"){
            operation = "-";
            operatorPress = !operatorPress;
            
        }

        if (i.id == "x"){
            operation = "*";
            operatorPress = !operatorPress;
            
        }

        if (i.id == "/"){
            operation = "/";
            operatorPress = !operatorPress;
            
        }

        if (i.id == "."){

            if (!operatorPress){
                num1 = num1 + ".";
                display.textContent = num1;
            }

            if (operatorPress){
                num2 = num2 + ".";
                display.textContent = num2;
            }
            
        }

        if (i.id == "="){
           operatorPress = !operatorPress;
           display.textContent = operator(operation, num1, num2);
           num1 = operator(operation, num1, num2);
           num2 = "";
        }

    });
}
