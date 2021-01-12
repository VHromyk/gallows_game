let byChanceWord = ['boy','girl', 'man', 'woman'];
// Выбираем слово из массива слов!
let ourWord = byChanceWord[Math.floor(Math.random()*byChanceWord.length)];
// Создаем пустой массив, который будет заполняться пустыми болванками, исходя из кол-ва букв в слове.
let answerArray = [];
// Запускаем цыкл для пуша болванок в пустой массив.
for (let i = 0; i < ourWord.length; i += 1) {
	answerArray[i] = '-';
}

let remainingLetters = ourWord.length;

let count = 0;
let countAttempt = 10;



while (remainingLetters > 0 && countAttempt > 0) {
	console.log(answerArray);
	let guess = prompt('Угадай букву?').toLowerCase();
	if (guess === null) {
		alert('Game over!')
		break;
	} else if (guess.length !== 1) {
		alert('Please enter a single letter!')
	} else if (guess) {
		count += 1;
		countAttempt -= 1;
		console.log(`Вы использовали ${count}-ю попытку!`);
	} for (let k = 0; k < ourWord.length; k += 1) {
		if (guess === ourWord[k] && answerArray[k] === '-') {
			answerArray[k] = guess;
			console.log(`Браво, Вы угадали букву '${ourWord[k]}'`);
			remainingLetters -= 1;
		}
	} 
	if (countAttempt === 0) {
		console.log('Ваши попытки отгадать слово исчерпаны!');
	}
}
  
if (remainingLetters === 0) {
	console.log(`Браво, Ваше слово '${answerArray.join('')}'. Вы использовали ${count} попыток!`);
}
