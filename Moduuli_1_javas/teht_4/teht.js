'use strict';
let namn = prompt('give your name');
const num = Math.floor((Math.random() * 4) + 1);
let hus = '';

if(num == 1){
    hus = 'Daredevil';
}
else if (num == 2){
    hus = 'Slytherin';
}
else if (num == 3){
    hus = 'Ravenclaw';
}
else{
    hus = 'Hufflepuff';
}


document.querySelector('#target').innerHTML = namn + ', you are a ' + hus;