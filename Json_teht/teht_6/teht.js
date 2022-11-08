'use strict';

const ans = confirm('Should I calculate the square root?');

if(ans){
    let num = prompt('then give me a number dude!');
    if( num > 0){
        let sqrtnum = Math.sqrt(num);
        document.querySelector('#target').innerHTML = 'The square root is ' + sqrtnum;
    }
    else{
        document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined';
    }
}
else{
    document.querySelector('#target').innerHTML = 'The square root is not calculated';
}