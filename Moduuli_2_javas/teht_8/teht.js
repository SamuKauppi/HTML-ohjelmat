'use strict';

function concat(array1){
    let str = "";
    for(let i = 0; i < array1.length; i++){
        str += array1[i];
    }
    return str;
}

const namn = ["juu","jaa","kuu"];
const numnams = concat(namn);
document.querySelector('#target').innerHTML = numnams;
