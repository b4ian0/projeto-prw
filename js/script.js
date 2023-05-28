
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');

let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card4 = document.querySelector('.card4');

/*funçao botao 1*/
button1.addEventListener('click', function () {
  card1.classList.toggle('active');

  if (card1.classList.contains('active')) {
    return button1.textContent = 'Ler menos';
  }
  button1.textContent = 'Ler mais';
})

/*funçao botao 2*/

button2.addEventListener('click', function () {
  card2.classList.toggle('active');

  if (card2.classList.contains('active')) {
    return button2.textContent = 'Ler menos';
  }
  button2.textContent = 'Ler mais';

})

/*funçao botao 3*/

button3.addEventListener('click', function () {
  card3.classList.toggle('active');

  if (card3.classList.contains('active')) {
    return button3.textContent = 'Ler menos';
  }
  button3.textContent = 'Ler mais';
})

/*funçao botao 4*/

button4.addEventListener('click', function () {
  card4.classList.toggle('active');

  if (card4.classList.contains('active')) {
    return button4.textContent = 'Ler menos';
  }
  button4.textContent = 'Ler mais';
})
