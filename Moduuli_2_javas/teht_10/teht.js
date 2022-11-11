'use strict';

let count = prompt('Number of canditates?');
let canditates = [];
for (let i = 0; i < count; i++) {
    canditates.push({
        name: prompt('give the name of candiate number: ' + parseInt(i + 1)),
        voters: 0
    });
}

let votes = prompt('how many votes?');
for (let i = 0; i < votes; i++) {
    let vote = prompt('who will you vote?');
    canditates.every(e => {
        if (e.name == vote) {
            e.voters++;
            return false;
        }
        return true;
    });
}

canditates.sort((a, b) => {
    return b.voters - a.voters;
});

console.log('The winner is ' + canditates[0].name + ' with ' + canditates[0].voters + ' votes');
canditates.forEach(e => {
    console.log(e.name + ': ' + e.voters);
});