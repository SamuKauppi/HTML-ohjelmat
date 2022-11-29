'use strict';

//Removes old search data from html
function clearsOldSearch() {
    document.getElementById('divtarget').innerHTML = '';
}

//Creates header html
function createHeader(txt) {
    let h1 = document.createElement('h2');
    h1.innerHTML = txt;
    return h1
}

//Creates thumbnail image html
function createThumbnail(image){
    let imgobj = document.createElement('img');
    if (image) {
        imgobj.src = image.medium;
    }
    else {
        imgobj.src = 'https://via.placeholder.com/100x125?text=no+image';
    }
    imgobj.alt = 'https://via.placeholder.com/100x125?text=no+image';
    return imgobj;
}

//Creates Iframe html
function createIframe(link){
    let urlobj = document.createElement('a');
    urlobj.innerHTML = 'Click here to check it out!';
    urlobj.classList.add('link');
    urlobj.addEventListener('click', function () { open_iframe(link) });
    return urlobj;
}

//Creates genre text html
function createGenretext(genres){
    let genreObj = document.createElement('p');
    for (let i = 0; i < genres.length; i++) {
        genreObj.innerHTML += ' | ' + genres[i];
    }
    if (genreObj.innerHTML != '') {
        genreObj.innerHTML += ' | ';
    }
    else {
        genreObj.innerHTML += '| No genre available |'
    }
    return genreObj;
}

//Creates summary text html
function createSummaryText(txt){
    let p = document.createElement('p');
    if (txt) {
        let sum = txt;
        p.innerHTML = sum.replace(/<[^>]*>?/gm, '');
    }
    else {
        p.innerHTML = '"No summary available"'
    }
    return p;
}

//Creates a header to page with the given parameter
function errorInSearch(errorname){
    clearsOldSearch();
    const body = document.getElementById('divtarget');
    body.append(createHeader(errorname))
}

//Converts single show entry from json to html
function createEntry(data) {

    //Creates a div container for this entry
    const body = document.getElementById('divtarget');
    let searchDiv = document.createElement('div');
    searchDiv.classList.add('singleEntry');
    body.appendChild(searchDiv);

    //Title of the show
    searchDiv.append(createHeader(data.name));

    //Thumbnail image
    searchDiv.appendChild(createThumbnail(data.image));

    //iframe link button
    searchDiv.appendChild(createIframe(data.url));

    //Div container for genre and summary text
    let textdiv = document.createElement('div');
    textdiv.classList.add('textdiv');

    //Genre txt
    textdiv.appendChild(createGenretext(data.genres));

    //Summary txt
    textdiv.appendChild(createSummaryText(data.summary));

    //Add div container to parent
    searchDiv.append(textdiv);
}

function open_iframe(link) {
    let dia = document.querySelector('dialog');
    let iframe = document.querySelector('iframe');
    iframe.src = link;
    dia.showModal();
}

//Makes a fetch for data
async function makeAFetch(showname) {
    try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=' + showname);
        if (response.ok) {
            const data = await response.json();
            //Step 1
            // console.log(data);

            //Step 2 and 3
            if (data.length > 0) {
                clearsOldSearch();
                for (let i = 0; i < data.length; i++) {
                    createEntry(data[i].show);
                }
            }
            else {
                errorInSearch('No shows found')
            }
        }
        else {
            errorInSearch('Error in fetch request')
        }
    }
    catch (error) {
        errorInSearch('Error in connection: ' + error)
    }
}

//Adds functions to submit button
document.getElementById('source').addEventListener('submit', async function (evt) {
    evt.preventDefault();
    let sName = document.querySelector('input[name=searchname]').value
    makeAFetch(sName);
});

//Add functions to dialog close button
let dia = document.querySelector('dialog');
let span = dia.firstElementChild;
span.addEventListener('click', function () { dia.close() });