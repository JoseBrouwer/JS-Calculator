function init(){
    const buttons = document.querySelectorAll(".flex-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => display(btn));
    })
}

let currentOp = "";
function display(button) {
    const display = document.querySelector(".calc-display");
   
    display.textContent += button.textContent; //update display
    currentOp += button.textContent; //update operation
    console.log(`Clicked: ${button.textContent}`);
    console.log(`Operation: ${currentOp}`);
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
