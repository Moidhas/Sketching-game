function start(event) {
    this.classList.add('clicked');
    divs.forEach(div => div.addEventListener('mouseover', fillIn));
}

function fillIn(event) {
    this.classList.add('clicked');
}

function end(event) {
    divs.forEach(div => div.removeEventListener('mouseover', fillIn));
    console.log(this);
}


const container = document.querySelector('.container');
const body = document.querySelector('body');
let length = 15 * 15; 
let size = (1 / 15) * 100; 

for(let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.style.width = `${size}%`;
    div.style.height = `${size}%`;
    container.appendChild(div);
}

const divs = document.querySelectorAll('.grid');
divs.forEach(div => div.addEventListener('mousedown', start));
divs.forEach(div => div.addEventListener('mouseup', end));
body.addEventListener('mouseup', end);
