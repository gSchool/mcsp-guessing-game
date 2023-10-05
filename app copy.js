// will prompt user for number, and return the input only if it is an integer
// output - valid numerical guess (Number)
function singleGuess(){
    let inp = prompt("Please guess a number");
    let validInput = false;
    while (!validInput){
        console.log("User input: ", inp);
        if(!Number.isSafeInteger(inp)){ // a valid number input
            return Number(inp);
        } else {
            inp = prompt("That was not a valid number, please try again");            
        }    
    }
}

// play 1 round - guess until secret is found
function guessSecret() {
    const name = prompt(`Who is playing?`);
    const secretNum = Math.round(Math.random() * 5 + 1); // pick random number between 1 and 5
    console.log(secretNum);
    let arr = []; // tracks guess history for current round
    while (true) {
        let guessNum = singleGuess(); // get validated input for guess
        console.log("Guessed number: ", guessNum);
        // add to guess history
        arr.push(guessNum);
        // compare guess to secret number
        if (guessNum === secretNum) {
            alert(`You guessed the secret number ${secretNum}.
            \n Previous guesses were ${arr}.
            \n Total number of guesses: ${arr.length + 1}.
            \nNice job, ${name}!`
            );
            adjustGameHistory(name, arr.length);
            break;
        } else if (guessNum > secretNum) {
            alert(`Guess lower, ${name}.`);
        } else if (guessNum < secretNum) {
            alert(`Guess Higher, ${name}.`);
        } else {
            alert(`Nice try on being funny, ${name}.`);
        }
    }
}

// adjust player score for last round
function adjustGameHistory(name, numGuesses){
    console.log("Player: ", name);
    console.log("num guesses: ", numGuesses);
    console.log("gameHistory", gameHistory);
    if (gameHistory[name]){ // player name has played before
        alert('played')
        // check to see if saved number of guesses is better than current numGuesses
        // const scoreDifference = numGuesses - gameHistory[name]
        // if ( scoreDifference < 0 ){ // player beat prev attempt
        if (numGuesses - gameHistory[name] > 0) {
            alert(`Congrats ${name}! \n You guessed correctly in fewer attempts than last time! 
            Previously it took you ${gameHistory[name]} tries, 
            but now you did it in ${numGuesses} - thats ${numGuesses - gameHistory[name]} better than before.`);
        } else { // player did not beat previous attempt
            alert(`On your last round, ${name} guessed correctly in ${gameHistory[name]} guesses,
             but you didn't do any better this time`);
        }
    }
    // update number of guesses for previous round, regardless of how they did
    gameHistory[name] = numGuesses;
}


// main logic starts here
let isPlayingAgain = true;
let gameHistory = {}; // keys - string for player name, value - number of guesses
// set of rounds, each by different player
while(isPlayingAgain){
    guessSecret(); // play a round with a certain player name
    // Round over
    isPlayingAgain = confirm("Would you like to play again?");
    console.log("isPlayingAgain: ", isPlayingAgain);
}

alert("Thanks for playing");