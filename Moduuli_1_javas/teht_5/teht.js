'use strict';

let num = prompt('Enter a year');


if ((0 == num % 4) && (0 != num % 100) || (0 == num % 400)) {
    document.querySelector('#target').innerHTML = num + ' is a leap year';
}
else {
    document.querySelector('#target').innerHTML = num + ' is not a leap year';
}