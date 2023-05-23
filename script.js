'use strict';
const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const check = document.querySelector('.check');
const numberInput = document.querySelector('.number-input');
const body = document.querySelector('body');
const again = document.querySelector('.again');

let randomCount = Math.trunc(Math.random() * 20) +1;
let scoreCount = 20;
let highScoreCount = 0;

const handleCheck = () => {
	if(!numberInput.value){
		guessMessage.textContent = 'Enter the number!'
	}else if(+numberInput.value === randomCount){
		guessMessage.textContent = 'Right!'
		question.textContent = randomCount;
		body.style.backgroundColor = 'rgb(9, 250, 21)';
		question.style.width = '55rem';

		if(scoreCount > highScoreCount) {
			highScoreCount = scoreCount
			highScore.textContent = highScoreCount;
		}

	}else if (+numberInput.value !== randomCount) {
		if(scoreCount > 1){
			guessMessage.textContent = +numberInput.value > randomCount ? 'Too much!' : 'Too few!';
			scoreCount--;
			score.textContent = scoreCount;
		}else{
			guessMessage.textContent = 'You lose!'
			score.textContent = 0;
		}
	}
}

check.addEventListener('click', handleCheck);


const handleAgain = () => {
	question.textContent = '???';
	question.style.width = '25rem';
	body.style.backgroundColor = 'rgb(0, 0, 0)';
	scoreCount = 20;
	score.textContent = scoreCount;
	guessMessage.textContent = 'Start guessing';
	numberInput.value = '';
	randomCount = Math.trunc(Math.random() * 20) +1;
}

again.addEventListener('click', handleAgain);


