'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;

const check = function (number, secretNumber) {
  if (score > 1) {
    if (number > secretNumber) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (number < secretNumber) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Correct Number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    document.querySelector('.message').textContent = 'You Loose';
    document.querySelector('.score').textContent = 0;
  }
};

console.log(document.querySelector('.btn-check'));
document.querySelector('.btn-check').addEventListener('click', function () {
  let number = Number(document.querySelector('.guess').value);
  if (number >= 1 && number <= 20) check(number, secretNumber);
  else {
    document.querySelector('.message').textContent = 'Invalid input';
  }
});

document.querySelector('.btn-again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = 0;
  document.querySelector('.number').textContent = '?';
});
