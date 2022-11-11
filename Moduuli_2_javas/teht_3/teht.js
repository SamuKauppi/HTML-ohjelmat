'use strict';
function addtolist(num, listname){
    let ul = document.getElementById(listname);
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(num));
    ul.appendChild(li);
}

let names = [];

for(let i = 0; i < 5; i++){
    names.push(prompt('Give mea doggy, dude'));
}
names.sort();

for(let i = names.length - 1; i >= 0; i--){
    addtolist(names[i], 'list')
}

