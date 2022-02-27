const backButton = document.querySelector('#delete');
const currentValue = document.querySelector('.currentValue');
const previousValue = document.querySelector('.previousValue');
const numberButtons = document.querySelectorAll('.number');
const plusMinus = document.querySelector('.positiveNegative');
const decimal = document.querySelector('.decimal');
const percent = document.querySelector('.percentage')
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const allClear = document.querySelector('.allClear');
let beenEquated = 0;
let operator;
let firstNumber;
let secondNumber;
let toPercent;
let equated;
let equatedRounded;
const addition = (firstNumber, secondNumber) => sum = Number(firstNumber) + Number(secondNumber);
const subtraction = (firstNumber, secondNumber) => minuend = firstNumber - secondNumber;
const multiply = (firstNumber, secondNumber) => product = firstNumber * secondNumber;
const divide = (firstNumber, secondNumber) => dividedBy = firstNumber / secondNumber;
const operate = (firstNumber, operator, secondNumber) => {
    if (operator === '+') {
        return addition(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtraction(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
};
const percentOperate = (firstNumber, operator, toPercent) => {
    if (operator === '+') {
        return (firstNumber * toPercent) + firstNumber;
    } else if (operator === '-') {
        return (firstNumber * toPercent) - firstNumber;
    } else if (operator === '*') {
        return (firstNumber * toPercent) * firstNumber;
    } else if (operator === '/') {
        return (firstNumber * toPercent) / firstNumber;
    }
}

numberButtons.forEach(button => button.addEventListener('click', (numberPressed) => {
    if (beenEquated === 1) {
        firstNumber = equatedRounded;
        previousValue.textContent = firstNumber;
        currentValue.textContent = '';
        beenEquated = 0;
    }
    currentValue.textContent += button.textContent;
}))

operatorButtons.forEach(button => button.addEventListener('click', (operatorPressed) => {
    if (beenEquated === 1) {
        firstNumber = equatedRounded;
        operator = button.textContent;
        previousValue.textContent = equatedRounded;
        currentValue.textContent = '';
        beenEquated = 0;
    } else if (operator && currentValue.textContent) {
        secondNumber = Number(currentValue.textContent);
        previousValue.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        equated = operate(firstNumber, operator, secondNumber);
        equatedRounded = parseFloat(equated.toFixed(13));
        operator = button.textContent;
        currentValue.textContent = equatedRounded;
        firstNumber = Number(currentValue.textContent);
        beenEquated = 1;
    } else {
        firstNumber = Number(currentValue.textContent);
        operator = button.textContent;
        previousValue.textContent = firstNumber;
        currentValue.textContent = '';
    }
}))

equalsButton.addEventListener('click', (equalsPressed) => {
    secondNumber = Number(currentValue.textContent);
    previousValue.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    currentValue.textContent = '';
    equated = operate(firstNumber, operator, secondNumber);
    equatedRounded = parseFloat(equated.toFixed(13));
    currentValue.textContent = equatedRounded;
    beenEquated = 1;
})

backButton.addEventListener('click', (deletePressed) => {
    currentValue.textContent = currentValue.textContent.slice(0, -1);
})

percent.addEventListener('click', (percentagePressed) => {
    if (firstNumber && operator) {
        toPercent = Number(currentValue.textContent) / 100;
        previousValue.textContent = `${firstNumber} ${operator} ${toPercent}`
        currentValue.textContent = percentOperate(firstNumber, operator, toPercent);
    }
})

decimal.addEventListener('click', (decimalPressed) => {
    if (currentValue.textContent.includes('.')) {
        return currentValue.textContent;
    } else {
        currentValue.textContent = `${currentValue.textContent}.`;
    }
})

plusMinus.addEventListener('click', (plusMinusPressed) => {
   currentValue.textContent = (0 - Number(currentValue.textContent));
})

allClear.addEventListener('click', (allClearPressed) => {
    firstNumber = null;
    secondNumber = null;
    beenEquated = 0;
    operator = '';
    previousValue.textContent = '';
    currentValue.textContent = '';

})
  