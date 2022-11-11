'use strict';

function addtolist(namn, value, listname) {
  let ul = document.getElementById(listname);
  let li = document.createElement('li');
  let opt = document.createElement('option');
  opt.appendChild(document.createTextNode(namn));
  opt.value = value;
  li.appendChild(opt);
  ul.appendChild(li);
}

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


for (let i = 0; i < students.length; i++) {
  addtolist(students[i].name, students[i].id, 'target');
}

