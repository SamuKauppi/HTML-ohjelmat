'use strict';


function rroll(){
    return Math.floor(Math.random() * 6 + 1);
}

function addtolist(num, listname){
    var ul = document.getElementById(listname);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(num));
    ul.appendChild(li);
}

let die = 0;

while (die != 6){
    die = rroll();
    addtolist(die, 'list');
}