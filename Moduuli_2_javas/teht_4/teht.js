'use strict';

let num = 1;
let nums = [];
while(true){
    num = prompt('Give me a numbyr');
    if (num == 0){
        break;
    }
    nums.push(num);
}

nums.sort(function(a, b){return b-a});

nums.forEach(element =>{
    console.log(element);
});
