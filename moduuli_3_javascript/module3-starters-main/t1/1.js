'use strict';

function addtolist(num, listname) {
    let ul = document.getElementById(listname);
    ul.innerHTML += '<li>' + num + '</li>';
}

addtolist('First item', 'target');
addtolist('Second item', 'target');
addtolist('Third item', 'target');

const target = document.getElementById('target');
target.classList.add('my-list');