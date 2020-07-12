var scores = {}; // The scores variable is an object that will store all of our guest names, and associated guesses from current and past games.
play(); // This is the function that runs when the page loads

function play(){
    var secretNumber = Math.ceil(Math.random() * 100); // First generate a random number from 1  to 100 every time we play()
    var guest = prompt("Please enter your name");  // Then ask and store the player name
    var guess = prompt("Please enter a guess"); // Then get thier first guess
    var hasPlayedBefore = true;

    

    // Explanation of the scores object:
    // The scores object below stores the guest name as a key and helps us reference 
    // another object with additional information we want to 
    // track for that specific individual: current guesses, past guesses
    // we can store each guess in an array, and when we want just the number
    // of guesses we can just get the length of the array - 1
    if(!scores[guest]) { // check to see if guest is already recorded
        hasPlayedBefore = false;
        scores[guest] = {
            current: [],
            past: []
        };

    }

    var currentGuessCount = 0;
    while (parseInt(guess) !== secretNumber){ // Guessing loop
        debugger
        if (guess < secretNumber) {
            alert(`Sorry ${guest}, Guess HIGHER!`);
            currentGuessCount += 1;
            guess = prompt("Please enter a guess");

        } else if (guess > secretNumber) {
            alert(`Sorry ${guest}, Guess LOWER!`);
            currentGuessCount += 1
            guess = prompt("Please enter a guess");

        } 
        scores[guest].current.push(guess) // Add guess to current scores
    }

    // The final message depends on if they've played before, 
    // and how they compared to their past game
    if ( hasPlayedBefore ) {
        var previousGuessCount = scores[guest].past.length - 1;
        var currentGuessCount = scores[guest].current.length - 1;

        if (previousGuessCount > currentGuessCount) {
            var fewerCount = previousGuessCount - currentGuessCount;
            alert(`That's Correct ${guest}! And you beat your previous attempt by ${fewerCount} fewer guesses!`);

        } else if (previousGuessCount < currentGuessCount) {
            var greaterCount = currentGuessCount - previousGuessCount;
            alert(`That's Correct ${guest}! You did better in your last game by ${greaterCount} fewer guesses.`);

        } else if (previousGuessCount === currentGuessCount) {
            var greaterCount = currentGuessCount - previousGuessCount;
            alert(`That's Correct ${guest}! You had the same number of guesses in your last game. This round you had these guesses: ${scores[guest].current.join(' ,')}`);

        }

    } else {
        var totalGuesses = scores[guest].current.length - 1;
        alert(`That's Correct ${guest}! This is your first time playing, we have recorded your score of ${totalGuesses} guesses: ${scores[guest].current.join(' ,')} `);
    }


    scores[guest].past = scores[guest].current; // move current score to past
    scores[guest].current = []; // reset current score
    playAgain();
}

function playAgain(){
    var response = prompt('Do you want to play again? Yes / No');
    if(response === "Yes") {
        alert('Ok started a new game!');
        play();

    } else if (response === "No") {
        alert('Cool, I\'m sure you have better things to do');

    } else {
        alert('Sorry I didn\'t recognize that command');

    }
}
