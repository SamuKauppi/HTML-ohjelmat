'use strict';
function addtolist(num, listname){
    var ul = document.getElementById(listname);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(num));
    ul.appendChild(li);
}


let part = prompt('How many particioants you want?');
let names = [];

for(let i = 0; i < part; i++){
    names.push(prompt('Give me name, dude'));
}

for(let i = part - 1; i >= 0; i--){
    addtolist(names[i], 'list')
}

