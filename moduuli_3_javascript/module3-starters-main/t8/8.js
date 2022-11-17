'use strict';

function getValue(idName) {
    return document.getElementById(idName).value;
}

function calculate() {
    let type = getValue('operation');
    let num1 = parseFloat(getValue('num1'));
    let num2 = parseFloat(getValue('num2'));
    let total = 0;
    switch (type) {
        case 'add':
            total = num1 + num2;
            break;
        case 'sub':
            total = num1 - num2;
            break;
        case 'multi':
            total = num1 * num2;
            break;
        case 'div':
            total = num1 / num2;
            break;
    }
    document.getElementById('result').innerHTML = total;
}

document.getElementById('start').addEventListener('click', calculate);