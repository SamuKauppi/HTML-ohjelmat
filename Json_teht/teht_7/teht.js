'use strict';

let count = prompt('How many, honey?');
let sum = 0;

count = parseInt(count);

for (let i = 0; i < count; i++){
    sum += Math.floor((Math.random() * 6) + 1);
}

document.querySelector('#target').innerHTML = 'The sum is ' + sum;
