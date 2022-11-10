'use strict';

let num = prompt('Give me a numbur');
let isprime = true;
if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isprime = false;
            break;
        }
        console.log(i)
    }
}
else{
    isprime = false;
}

document.querySelector('#target').innerHTML = 'This numbur is prime number = ' + isprime;