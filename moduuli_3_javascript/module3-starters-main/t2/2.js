'use strict';

function addtolist(num, listname){
    let ul = document.getElementById(listname);
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(num));
    ul.appendChild(li);
}


addtolist('First item', 'target');
addtolist('Second item', 'target');
addtolist('Third item', 'target');

const second = document.getElementsByTagName('li')[1];
second.classList.add('my-item');