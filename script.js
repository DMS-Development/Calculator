//const display = document.querySelector('.display');
//const buttons = document.querySelectorAll('.item');
const addition = (firstNumber, secondNumber) => sum = firstNumber + secondNumber;
const subtraction = (firstNumber, secondNumber) => minuend = firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => product = firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => dividend = firstNumber / secondNumber;
const operate = (firstNumber, operator, secondNumber) => {
    if (operator === '+') {
        addition(firstNumber, secondNumber);
    } else if (operator === '-') {
        subtraction(firstNumber, secondNumber);
    } else if (operator === '*') {
        multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        divide(firstNumber, secondNumber);
    }
};

console.log(operate(10, '/', 400));