
const container = document.querySelector('.container');

for(let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}


function start(event) {
    divs.forEach(div => div.addEventListener('mouseover', fillIn));
}

function fillIn(event) {
    this.classList.add('clicked');
}

function end(event) {
    divs.forEach(div => div.removeEventListener('mouseover', fillIn));
}

const divs = document.querySelectorAll('.grid');
divs.forEach(div => div.addEventListener('mousedown', start));
divs.forEach(div => div.addEventListener('mouseup', end));
