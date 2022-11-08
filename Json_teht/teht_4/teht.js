'use strict';
let namn = prompt('give your name');
const num = Math.floor((Math.random() * 5) + 1);
let hus = '';

if(num == 1){
    hus = 'gryffindor';
}
else if (num == 2){
    hus = 'slytherin';
}
else if (num == 3){
    hus = 'Ravenclaw';
}
else{
    hus = 'hufflepuff'
}


document.querySelector('#target').innerHTML = namn + ', you are a ' + hus;