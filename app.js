//Starting variables

//current amount of guesses
var count = 1;
//guesses taken in the current iteration
var scoreArr = [];
//iterating variable through the current guess array
var i = 0;
//declaring player var as empty string
var playerName = "";
//tells what the last playthrough score was
var lastPlay = 0;
//creates empty object that player name and associated scores will live in
var playerObj = {};

//determine secret number
function randomInt(max) {
  return Math.floor(Math.random() * max);
}

//assign secret number to variable we will change later
var randomInput = randomInt(101);
var secretNumber = randomInput;
//console log for testing purposes.
console.log(secretNumber);
//this marker tells if the current player is the play who started this instance of the game
var currentPlayerMarker = 0;

//function to start at launch
function play() {
  /*this temp variable is used to determine if the current score is better than any score
    in the player's array in the player object*/
  var temp = Infinity;
  //if not a continued instance
  if (currentPlayerMarker === 0) {
    var localPlayerName = prompt("What is your name?");
    playerName = localPlayerName;
    //determines if player has played before or not by referencing playerObj
    if (playerObj[playerName] === undefined) {
      playerObj[playerName] = [];
    } else {
      //iterates over stored array in the object to find lowest score
      for (int of playerObj[playerName]) {
        if (int < temp) {
          temp = int;
        }
      }
      alert(
        "Welcome back, " +
          localPlayerName +
          "! Your previous best score is " +
          temp +
          "!"
      );
    }
    //makes sure the name is a valid string
    if (playerName === null || playerName === undefined || playerName === "") {
      playerName = prompt("Please enter your name");
      currentPlayerMarker = 0;
      play();
    }
    var guess = prompt("Welcome, " + localPlayerName + "! Guess a number between 1 and 100!");
    console.log(playerObj);
    currentPlayerMarker++;
  } else {
    var guess = prompt("Guess a number between 1 and 100!");
  }
  //turns string from input into number
  var numberGuess = Number(guess);
  //console for testing
  console.log(guess);
  //if correct number is guessed
  if (numberGuess === secretNumber) {
    //if only one guess
    if (count === 1) {
      playerObj[playerName].push(count);
      if (playerObj[playerName].length === 1) {
        alert(
          "Correct! It only took you one guess! This is the best score possible!"
        );
      } else {
        //if only one guess and its not the first iteration.
        for (int of playerObj[playerName]) {
          if (int < temp) {
            temp = int;
          }
        }
        console.log(temp);
        alert(
          "Correct! It only took you one guess! Your best score is: " + temp
        );
      }
      //asks if the player wants to play again. anything other than yes will result in the game ending
      var again = prompt("Play again? 'Yes' / 'No'");
      //covers cases of any variation of the word yes
      var sterileAgain = again.toLowerCase();
      if (sterileAgain === "yes") {
        var newPlayer = prompt("New Player? 'Yes / No'");
        var sterileNewPlayer = newPlayer.toLowerCase();
        if (sterileNewPlayer === "yes") {
          playAgain();
          beenHereBefore = 0;
        } else {
          samePlayer();
        }
      }
      //same as above only changing wording to account for it only taking two guesses.
    } else if (count === 2) {
      for (int of playerObj[playerName]) {
        if (int < temp) {
          temp = int;
        }
      }
      if (temp === Infinity) {
        temp = count;
      } else if (count < temp) {
        temp = count;
      }
      alert(
        "Correct! It only took you two guesses!" +
          "\n" +
          "Your previous guess was: " +
          scoreArr.join(", ") +
          "\n" +
          "Your best score is " +
          temp
      );

      playerObj[playerName].push(count);
      console.log(playerObj);
      again = prompt("Play again? 'Yes' / 'No'");
      sterileAgain = again.toLowerCase();
      if (sterileAgain === "yes") {
        var newPlayer = prompt("New Player? 'Yes / No'");
        var sterileNewPlayer = newPlayer.toLowerCase();
        if (sterileNewPlayer === "yes") {
          playAgain();
        } else {
          samePlayer();
        }
      }
    } else {
      for (int of playerObj[playerName]) {
        if (int < temp) {
          temp = int;
        }
      }
      if (temp === Infinity) {
        temp = count;
      } else if (count < temp) {
        temp = count;
      }
      alert(
        "Correct! It only took you " +
          count +
          " guesses!" +
          "\n" +
          "Your previous guesses were: " +
          scoreArr.join(", ") +
          "\n" +
          "Your best score is " +
          temp
      );

      playerObj[playerName].push(count);
      console.log(playerObj);
      again = prompt("Play again? 'Yes' / 'No'");
      sterileAgain = again.toLowerCase();
      if (sterileAgain === "yes") {
        var newPlayer = prompt("New Player? 'Yes / No'");
        var sterileNewPlayer = newPlayer.toLowerCase();
        if (sterileNewPlayer === "yes") {
          playAgain();
        } else {
          samePlayer();
        }
      }
    }
    //main part of the game are these two statements
    count = 1;
  } else if (numberGuess > secretNumber) {
    alert("Sorry, " + playerName + ". Guess Lower");
    count++;
    scoreArr[i] = numberGuess;
    i++;
    play();
  } else if (numberGuess < secretNumber) {
    alert("Sorry, " + playerName + ". Guess Higher");
    count++;
    scoreArr[i] = numberGuess;
    i++;
    play();
  }
}
//functions to reduce repeat code
function playAgain() {
  currentPlayerMarker = 0;
  count = 1;
  i = 0;
  scoreArr = [];
  randomInput = randomInt(101);
  secretNumber = randomInput;
  console.log(secretNumber);
  play();
}
function samePlayer() {
  lastPlay = count;
  count = 1;
  i = 0;
  scoreArr = [];
  randomInput = randomInt(101);
  secretNumber = randomInput;
  console.log(secretNumber);
  play();
}
function endGame() {
  playerObj[playerName].push(count);
  console.log(playerObj);
  again = prompt("Play again? 'Yes' / 'No'");
  sterileAgain = again.toLowerCase();
  if (sterileAgain === "yes") {
    var newPlayer = prompt("New Player? 'Yes / No'");
    var sterileNewPlayer = newPlayer.toLowerCase();
    if (sterileNewPlayer === "yes") {
      playAgain();
    } else {
      samePlayer();
    }
  }
}
play();
