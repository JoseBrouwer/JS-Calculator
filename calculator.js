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

let a = parseFloat(prompt("Enter the first value of the operation: "));
let b = parseFloat(prompt("Enter the second value of the operation: "));

console.log(`Addition: ${add(a, b)}`);
console.log(`Subtraction: ${subtract(a, b)}`);
console.log(`Multiplication: ${multiply(a, b)}`);
console.log(`Division: ${divide(a, b)}`);
