'use strict';

function clear_search() {
    document.getElementById('divtarget').innerHTML = '';
}

function create_entry(thingy) {
    const body = document.getElementById('divtarget');
    let searchDiv = document.createElement('div');
    searchDiv.classList.add('singleEntry');
    body.appendChild(searchDiv);

    let h1 = document.createElement('h2');
    h1.innerHTML = thingy.name;
    searchDiv.append(h1);

    let imgobj = document.createElement('img');
    if (thingy.image) {
        imgobj.src = thingy.image.medium;
    }
    else {
        imgobj.src = 'https://via.placeholder.com/100x200?text=no+image';
    }
    imgobj.alt = 'https://via.placeholder.com/100x200?text=no+image';
    searchDiv.appendChild(imgobj);

    let urlobj = document.createElement('a');
    urlobj.innerHTML = 'Click here to check it out!';
    urlobj.classList.add('link');
    urlobj.addEventListener('click', function () { open_iframe(thingy.url) });
    searchDiv.appendChild(urlobj);

    let textdiv = document.createElement('div');
    textdiv.classList.add('textdiv');

    let genre = document.createElement('p');
    for (let i = 0; i < thingy.genres.length; i++) {
        genre.innerHTML += ' | ' + thingy.genres[i];
    }
    if (genre.innerHTML != '') {
        genre.innerHTML += ' | ';
    }
    else {
        genre.innerHTML += '| No genre available |'
    }
    textdiv.appendChild(genre);

    let p = document.createElement('p');
    if (thingy.summary) {
        let sum = thingy.summary;
        p.innerHTML = sum.replace(/<[^>]*>?/gm, '');
    }
    else {
        p.innerHTML = '"No summary available"'
    }
    textdiv.appendChild(p);
    searchDiv.append(textdiv);
}

function open_iframe(link) {
    let dia = document.querySelector('dialog');
    let iframe = document.querySelector('iframe');
    iframe.src = link;
    dia.showModal();
}

function makeAFetch(showname) {
    fetch('https://api.tvmaze.com/search/shows?q=' + showname)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Show not found');
            }
            return response.json()
        })
        .then((data) => {
            //Step 1
            // console.log(data);

            //Step 2 and 3
            clear_search();
            for (let i = 0; i < data.length; i++) {
                create_entry(data[i].show);
            }
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });;
}


document.getElementById('source').addEventListener('submit', function (evt) {
    evt.preventDefault();
    let sName = document.querySelector('input[name=searchname]').value
    makeAFetch(sName);
});

let dia = document.querySelector('dialog');
let span = dia.firstElementChild;
span.addEventListener('click', function () { dia.close() });