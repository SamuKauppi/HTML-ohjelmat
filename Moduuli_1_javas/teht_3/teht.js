'use strict';
let num1 = prompt('give number');
let num2 = prompt('give number');
let num3 = prompt('give number');

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const avg = (num1 + num2 + num3) / 3;

document.querySelector('#sum').innerHTML = 'sum = ' + sum;
document.querySelector('#product').innerHTML = 'product = ' + product;
document.querySelector('#avg').innerHTML = 'average = ' + avg;
