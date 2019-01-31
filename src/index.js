import headsTails from './heads-tails.js';

const button = document.getElementById('coin-button');
const image = document.getElementById('coin-image');


button.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();

    const side = headsTails(randomNumber);
   
    if(side === 'heads') {
        image.src = './assets/heads.png';
    }
    
    else {
        image.src = './assets/tails.jpg';
    }

    image.classList.remove('hidden');
});