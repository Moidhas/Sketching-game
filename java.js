
function fillIn(event) {
    this.classList.add('clicked');
}

function setup(event) {
    text.textContent = `${input.value} x ${input.value}`;
    const length = input.value * input.value; 
    const size = (1 / input.value) * 100; 
    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        div.style.width = `${size}%`;
        div.style.height = `${size}%`;
        container.appendChild(div);
    } 
    const divs = document.querySelectorAll('.grid');
    let end = function() {
        divs.forEach(div => div.removeEventListener('mouseover', fillIn));
    }

    divs.forEach(div => div.addEventListener('mousedown', () => {
        div.classList.add('clicked');
        divs.forEach(div => div.addEventListener('mouseover', fillIn));
    }));

    divs.forEach(div => div.addEventListener('mouseup', end));
    html.addEventListener('mouseup', end);
}

const controls = document.querySelector('.controls');
const input = document.querySelector('input');
const text = document.createElement('div');
text.classList.add('values');
const container = document.querySelector('.container');
const html = document.querySelector('html');

setup();
controls.insertBefore(text, input);
input.addEventListener('input', () => {
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.remove());
    setup(); 
});
