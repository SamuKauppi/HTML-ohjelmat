'use strict';

function addtolist(num, listname) {
    let ul = document.getElementById(listname);
    ul.innerHTML += '<li>' + num + '</li>';
}

const names = ['John', 'Paul', 'Jones'];
for (let i = 0; i < names.length; i++) {
    addtolist(names[i], 'target');
}
