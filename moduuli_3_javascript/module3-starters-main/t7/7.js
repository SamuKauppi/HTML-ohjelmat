'use strict';

function onhover(){
    let img = document.getElementById('target');
    img.src = 'img/picA.jpg';
}
function outhover(){
    let img = document.getElementById('target');
    img.src = 'img/picB.jpg';
}

let hover = document.getElementById('trigger');

hover.addEventListener('mouseover', onhover);
hover.addEventListener('mouseout', outhover);
