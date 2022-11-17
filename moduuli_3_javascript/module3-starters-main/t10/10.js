'use strict';

function getValue(idName) {
    return document.getElementById(idName).value;
}


document.getElementById('source').addEventListener('submit', function(evt){
    evt.preventDefault();
    let fname = document.querySelector('input[name=firstname]').value
    let lname = document.querySelector('input[name=lastname]').value;

    document.getElementById('target').innerHTML = `Your name is ${fname} ${lname}`
});