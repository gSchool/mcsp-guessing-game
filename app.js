function randomInt(n) {
  return Math.floor(Math.random() * n) + 1;
}

function parseInput(string) {
  if (string === "") {
    return NaN;
  } else if (string === null) {
    return null;
  } else {
    return Number(string);
  }
}

function promptInt(message) {
  let number = parseInput(prompt(message));

  while (!Number.isInteger(number) && number !== null) {
    number = parseInput(prompt("Please enter an integer."));
  }

  return number;
}

let players = {};

function play() {
  const secretNumber = randomInt(10);
  let name = prompt("What is your name?");
  let guess = promptInt("Guess a number.");
  let guesses = [guess];

  while (guess !== secretNumber) {
    if (guess === null) {
      alert("Goodbye!");
      return;
    }

    if (guess < secretNumber) {
      guess = promptInt("Guess higher!");
    } else {
      guess = promptInt("Guess lower!");
    }

    guesses.push(guess);
  }

  // if the user has played before, tell them if they did better or worse
  if (players[name] !== undefined) {
    const numGuesses = guesses.length;
    const prevGuesses = players[name].length;
    if (numGuesses > prevGuesses) {
      alert(
        `That’s Correct ${name}! You did better in your last game by ${
          numGuesses - prevGuesses
        } fewer guesses.`
      );
    } else {
      alert(
        `That’s Correct ${name}! And you beat your previous guesses by ${
          prevGuesses - numGuesses
        } guesses!`
      );
    }
  } else {
    alert(`Correct! Your previous attempts were: ${guesses}.`);
  }
  players[name] = guesses;

  // determine if user wants to play again.
  const shouldPlayAgain = prompt("Do you want to play again?");
  if (shouldPlayAgain.toLowerCase() === "y") {
    play();
  } else {
    alert(`Thank for playing, ${name}!`);
  }
}

play();
