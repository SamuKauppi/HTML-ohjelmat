'use strict';

let list = [];
let wasThere = false;
while (!wasThere){

    let num = parseInt(prompt('Give myh a nutber'));
    for(let i = 0; i < list.length; i++){
        if(list[i] == num){
            wasThere = true;
            console.log('Number was entered previously. Exiting...');
        }
    }
    if(!wasThere){
        list.push(num);
    }
}

list.sort(function(a, b){return a-b});

for(let i = 0; i < list.length; i++){
    console.log(list[i]);
}
