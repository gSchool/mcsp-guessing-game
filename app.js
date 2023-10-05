function makeGuess(name) {
    num = 5;
    allGuesses = [];
    isCorrectGuess = false;
    if (lastGameGuesses[0] > 1) {
        alert('guess less than ' + lastGameGuesses[0] + ' times.')
    }
    
    while (!isCorrectGuess) {
        let guess = prompt('Guess the number.');
        allGuesses.push(guess); 
        if (guess == num) {
            alert('That’s Correct ' +  name + '! Your number of ties were ' + allGuesses.length +'!\nYour previous guesses were ' + allGuesses + '!')
            lastGameGuesses.unshift(allGuesses.length)
            lastGameGuesses.pop();
            isCorrectGuess = true;
        } else if (guess > num) {
                alert('Sorry ' + name + ', Guess lower');
        } else if (guess < num) {
            alert('Sorry ' + name + ', Guess higher');
        }
    }
    playAgain();
}

function myName() {
    return prompt('Please enter your name.')
}

function playAgain () {
    let answer = prompt('Do you want to play again? yes or no.')
        if (answer[0] === 'y') {
            makeGuess(userName);
        }
    }

function saveGuesses() {
    lastGameGuesses.unshift(allGuesses.length)
    lastGameGuesses.pop();
}

// Code Start's Here
let lastGameGuesses = [];
let userName = myName();
makeGuess(userName);
