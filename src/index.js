import headsTails from './heads-tails.js';

const button = document.getElementById('coin-button');
const image = document.getElementById('coin-image');
const result = document.getElementById('result');
const headCount = document.getElementById('head-count');
const tailCount = document.getElementById('tail-count');
let head = 0;
let tail = 0;


button.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();

    const side = headsTails(randomNumber);
   
    if(side === 'heads') {
        image.src = './assets/heads.png';
        result.textContent = 'Heads!!!!!!!';
        head++;
        headCount.textContent = 'Head Count: ' + head; 

    }
    
    else {
        image.src = './assets/tails.jpg';
        result.textContent = 'Tails...';
        tail++;
        tailCount.textContent = 'Tail Count: ' + tail; 

    }

    image.classList.remove('hidden');
});