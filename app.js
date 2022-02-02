
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

var randomInput = randomInt(100);
var secretNumber = randomInput;
console.log(secretNumber);

var marker = 0;

function play() {
  var temp = Infinity;
  if (marker === 0) {
    var localPlayerName = prompt("What is your name?");
    playerName = localPlayerName;
    if (playerObj[playerName] === undefined) {
      playerObj[playerName] = [];
    } else {
        for (int of playerObj[playerName]) {
            if (int < temp) {
              temp = int;
            }
          }
        prompt("Welcome back, " + localPlayerName + "! Your previous best score is " + temp + "! Guess a number!");
    }
    // playerObj[playerName] = playerName;
    
    if (playerName === null || playerName === undefined || playerName === "") {
      playerName = prompt("Please enter your name");
      marker = 0;
      play();
    }
    var guess = prompt("Welcome, " + localPlayerName + "! Guess a number!");
    console.log(playerObj);
    marker++;
  } else {
    var guess = prompt("Guess a number!");
  }

  var numberGuess = Number(guess);
  console.log(guess);
  if (numberGuess === secretNumber) {
    if (count === 1) {
      //   playerObj[playerName] = [];
      playerObj[playerName].push(count);
      if (playerObj[playerName].length === 1) {
        alert(
          "Correct! It only took you one guess! This is the best score possible!"
        );
      } else {
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

      var again = prompt("Play again? 'Yes' / 'No'");
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
    } else {
        
      for (int of playerObj[playerName]) {
        if (int < temp) {
          temp = int;
        }
      }
      if (temp === Infinity) {
          temp = count;
      } else if(count < temp) {
          temp = count;
      }
      alert(
        "Correct! It only took you " +
          count +
          " guesses!" +
          "\n" +
          "Your previous guesses were: " +
          scoreArr.join(", ") + "\n" + "Your best score is " + temp 
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
      } else {
      }
    }

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

function playAgain() {
  marker = 0;
  count = 1;
  i = 0;
  scoreArr = [];
  randomInput = randomInt(100);
  secretNumber = randomInput;
  console.log(secretNumber);
  play();
}
function samePlayer() {
  lastPlay = count;
  count = 1;
  i = 0;
  scoreArr = [];
  randomInput = randomInt(100);
  secretNumber = randomInput;
  console.log(secretNumber);
  play();
}

play();
