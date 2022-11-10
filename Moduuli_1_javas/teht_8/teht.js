'use strict';

function addtolist(num){
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(num));
    ul.appendChild(li);
}

let start = prompt('Give me a starting year');
let end = prompt('Give me a ending year');
document.querySelector('#target').innerHTML = 'Every leap year between ' + start + ' and ' + end

for (let i = start; i <= end; i ++){
    if ((0 == i % 4) && (0 != i % 100) || (0 == i % 400)) {
        addtolist(i);
    }
}