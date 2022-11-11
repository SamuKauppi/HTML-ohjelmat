'use strict';

function even(nums){
    let evennums = [];
    nums.forEach(num => {
        if(num % 2 == 0){
            evennums.push(num);
        }
    });
    return evennums;
}

let nums = [2, 7, 4];
let evennums = even(nums);


console.log(nums);
console.log(evennums);