'use strict';

function getValue(idName) {
    return document.getElementById(idName).value;
}

function calculate() {
    let type = getValue('calculation');
    let num = type.split(/(\D)/)

    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] == '' || num[i] == ' ') {
            num.splice(i, 1);
        }
    }

    let num1 = parseFloat(num[0]);
    let num2 = parseFloat(num[num.length - 1]);
    let total = 0;

    switch (num[1]) {
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '/':
            total = num1 / num2;
            break;
    }

    document.getElementById('result').innerHTML = total;
}

document.getElementById('start').addEventListener('click', calculate);