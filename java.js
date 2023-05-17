function start(event) {
    this.classList.add('clicked');
    divs.forEach(div => div.addEventListener('mouseover', fillIn));
}

function fillIn(event) {
    this.classList.add('clicked');
}

function end(event) {
    divs.forEach(div => div.removeEventListener('mouseover', fillIn));
}

function setup(event) {
    text.textContent = `${input.value} x ${input.value}`;
    let length = input.value * input.value; 
    let size = (1 / input.value) * 100; 
    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.width = `${size}%`;
        div.style.height = `${size}%`;
        container.appendChild(div);
    } 
}

const controls = document.querySelector('.controls');
const input = document.querySelector('input');
const text = document.createElement('div');
text.classList.add('values');
const container = document.querySelector('.container');
const html = document.querySelector('html');

setup();
let divs = document.querySelectorAll('.grid');
controls.insertBefore(text, input);

divs.forEach(div => div.addEventListener('mousedown', start));
divs.forEach(div => div.addEventListener('mouseup', end));
html.addEventListener('mouseup', end);

input.addEventListener('input', () => {
    divs.forEach(div => container.removeChild(div));
    setup();
    divs = document.querySelectorAll('.grid'); 
});
