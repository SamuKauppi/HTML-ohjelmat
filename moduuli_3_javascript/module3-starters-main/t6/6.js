'use strict';
function clicked(){
    alert('button clicked!');
}

const but = document.querySelector('button');
but.addEventListener('click', clicked);