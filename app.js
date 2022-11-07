const secretNumber = Math.floor(Math.random() * 10) + 1;

function play() {
  while(true) {
    const guess = prompt("Guess a number.");
    if(guess === null) {
      alert("Goodbye!");
      break;
    }

    const numGuess = Number(guess);
    
    if(Number.isNaN(numGuess)) {
      alert("Please enter a valid number");
    } else if(numGuess < secretNumber) {
      alert("Guess higher");
    } else if(numGuess > secretNumber) {
      alert("Guess lower");
    } else {
      alert("Correct!");
      break;
    }
  }
}

play();
