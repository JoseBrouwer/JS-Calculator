let currentOp = "", resultString = "", operator = "";
let a, b, resultNumber;
const PEMDAS = ['(', ')', '**', '*', '/', '+', '-'];

function init(){
    const buttons = document.querySelectorAll(".flex-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => display(btn));
    })
}
function display(button) {
    const display = document.querySelector(".calc-display");
    if(!button.classList.contains("equals") && !button.classList.contains("operator") && !button.classList.contains("clear")) //We are not evaluating or adding operator
    {
        display.textContent += button.textContent; //update display
        currentOp += button.textContent; //update operation
        console.log(`Clicked: ${button.textContent}`);
        console.log(`Operation: ${currentOp}`);
    }
    else if(button.classList.contains("operator"))
    {
        //add spaces inbetween operator
        display.textContent += (" " + button.textContent + " ");
        currentOp += (" " + button.textContent + " ");
    }
    else if(button.classList.contains("equals")) //if we click equals
    {
        //modify to evaluate longer expressions and use PEMDAS
        //check size of split, if its longer than three (always odd by taking a = result?)
        //enforce PEMDAS from left to right by grouping operations
        let parts = currentOp.split(" ");
        if(parts.length > 3)
        {
            //return an array that contains all the operators in the expression
            let operatorList = parts.filter(operator => PEMDAS.includes(operator));
            console.log(`Before Sort: ${operatorList}`);
            operatorList.sort(oop); //sort the array to use PEMDAS
            console.log(`After Sort: ${operatorList}`);
  
        }
        else
        {
            a = parseFloat(parts[0]);
            operator = parts[1];
            b = parseFloat(parts[2]);
            resultNumber = operate(operator, a, b);
            resultString = String(resultNumber)
            currentOp = resultString;
            display.textContent = resultString;
        }
    }
    else if(button.classList.contains("clear"))
    {
        currentOp = "";
        display.textContent = "";
    }
    
}
//sort based on the index of PEMDAS elements
function oop(a, b){
    let aIndex = PEMDAS.indexOf(a);
    let bIndex = PEMDAS.indexOf(b);
    if(aIndex > bIndex) //a is further down the list, less priority
        return 1;
    if(aIndex == bIndex) //dont move
        return 0;
    if(aIndex < bIndex) //a is closer to the start than b, more priority
        return -1;
}

function operate(operator, a, b) {
    console.log(operator);
    if(operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/")
    {
        console.log("Not a valid operator. Operation will not complete.");
        return NaN;
    }
    else if(operator === "+")
        return add(a, b);
    else if(operator === "-")
        return subtract(a, b);
    else if(operator === "*")
        return multiply(a, b);
    else if(operator === "/")
        return divide(a,b);
}

function add(a, b) {
     return a + b;
};

function subtract(a, b) {
    return a -b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if(b === 0)
    {
        console.error("Can not divide by 0");
        return;
    }
    return a / b;
};

init();

// let operation = prompt("Enter the operation you would like to perform (+, -, *, /): ")
// let a = parseFloat(prompt("Enter the first value of the operation: "));
// let b = parseFloat(prompt("Enter the second value of the operation: "));
// let result = operate(operation, a , b);
// console.log(result);

// console.log(`Addition: ${add(a, b)}`);
// console.log(`Subtraction: ${subtract(a, b)}`);
// console.log(`Multiplication: ${multiply(a, b)}`);
// console.log(`Division: ${divide(a, b)}`);
