const monitor = document.querySelector('.monitor');
const previousResultDiv = document.querySelector('.previous-result');
const resultDiv = document.querySelector('.result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const ac = document.querySelector('#ac');
const equal = document.querySelector('#equal');

let hasOperator = false;
let hasSpace = false;

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

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (resultDiv.innerText == '0') {
            resultDiv.innerText = number.innerText;
            updateOperand();
        } else {

            if (hasOperator && !hasSpace) {
                hasSpace = true;
                resultDiv.innerText += ' ' + number.innerText;
            } else {
                resultDiv.innerText += number.innerText;
            }
            
            updateOperand();
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

        if (!hasOperator) {
            hasOperator = true;
            resultDiv.innerText += ' ' + operator.innerText;
        };
    });
});

equal.addEventListener('click', () => {
    hasOperator = false;
    hasSpace = false;
    
    result = operate(operationSign, leftOperand, rightOperand);
    leftOperand = result;

    resultDiv.innerText += ' =';
    previousResultDiv.innerText = resultDiv.innerText;
    resultDiv.innerText = result.toString();
});

ac.addEventListener('click', () => {
    hasOperator = false;
    hasSpace = false;

    leftOperand = 0;
    rightOperand = 0;
    
    previousResultDiv.innerText = '';
    resultDiv.innerText = '0';
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
            return a / b;
            break;
    }
}

// function add(a,b) {return a + b};
// function substract(a,b) {return a - b};
// function multiply(a,b) {return a * b};
// function divide(a,b) {return a / b};

