const monitor = document.querySelector('.monitor');
const previousResultDiv = document.querySelector('.previous-result');
const resultDiv = document.querySelector('.result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const ac = document.querySelector('#ac');
const equal = document.querySelector('#equal');

let isError = false;
let hasOperator = false;
let hasSpace = false;
let hasResult = false;

let leftOperand = 0;
let rightOperand = 0;
let operationSign;
let result = 0;

function updateOperand() {
    if (!hasOperator) {
        leftOperand = Number(resultDiv.innerText);
    } else {
        rightOperand = Number(resultDiv.innerText.split(' ')[2]);
    }
};

function clearMonitor() {
    previousResultDiv.innerText = '';
    resultDiv.innerText = '0';
}

function clearSavedValue() {
    leftOperand = 0;
    rightOperand = 0;
    result = 0;
}

function showSavedValue() {
    console.log(`leftOperand = ${leftOperand}`);
    console.log(`rightOperand = ${rightOperand}`);
    console.log(`result = ${result}`);
}

function showStatus() {
    console.log(`isError = ${isError}`);
    console.log(`hasOperator = ${console.log()}`);
    console.log(`hasSpace = ${hasSpace}`);
    console.log(`hasResult = ${hasResult}`);
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (hasResult) {
            clearSavedValue();
            clearMonitor();
            // resultDiv.innerText = number.innerText;
            hasResult = false;

        }
        
        if (resultDiv.innerText == '0') {
            resultDiv.innerText = number.innerText;
            updateOperand();

        } else {

            if (!isError) {
                if (hasOperator && !hasSpace) {
                    hasSpace = true;
                    resultDiv.innerText += ' ' + number.innerText;
                } else {
                    resultDiv.innerText += number.innerText;
                }
                
                updateOperand();
            };
        };
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        switch (operator.innerText) {
            case ':' :
                operationSign = 'divide';
                break;
            case 'x' :
                operationSign = 'multiply';
                break;
            case '-' :
                operationSign = 'substract';
                break;
            case '+' :
                operationSign = 'add';
        }

        if (!hasOperator && !isError) {
            hasOperator = true;
            resultDiv.innerText += ' ' + operator.innerText;
        };
    });
});

equal.addEventListener('click', () => {
    hasOperator = false;
    hasSpace = false;
    hasResult = true;
    
    result = operate(operationSign, leftOperand, rightOperand);

    resultDiv.innerText += ' =';
    previousResultDiv.innerText = resultDiv.innerText;
    resultDiv.innerText = result.toString();

    leftOperand = result;
    rightOperand = 0;
    result = 0;
});

ac.addEventListener('click', () => {
    isError = false;
    hasOperator = false;
    hasSpace = false;
    hasResult = false;
    
    clearSavedValue();
    clearMonitor();
});

// Operation

function operate(operationSign, a, b) {
    switch (operationSign) {
        case 'add':
            // add(a, b);
            return a + b;
            break;
        case 'substract':
            // substract(a, b);
            return a - b;
            break;
        case 'multiply' :
            // multiply(a, b);
            return a * b;
            break;
        case 'divide' :
            // divide(a, b);
            if (b === 0) {
                isError = true;
                return 'ERROR';
            } else {
                return a / b;
            }
            // b === 0? return 'ERROR' : return a / b;
            break;
    }
}

// function add(a,b) {return a + b};
// function substract(a,b) {return a - b};
// function multiply(a,b) {return a * b};
// function divide(a,b) {return a / b};

