 // This is your main function that runs when the page loads

// var random = Math.floor(Math.random() * 100)
var count = 1;
var scoreArr = [];
var i = 0;
function randomInt(max) {
    return Math.floor(Math.random() * max);
}
var randomInput = randomInt(100);
var secretNumber = randomInput
console.log(secretNumber);

function play(){
   var playerName = prompt('What is your name?')
   var guess = prompt('Welcome, ' + playerName + '! Guess a number!');
   var numberGuess = Number(guess);
   console.log(guess);
   if (numberGuess === secretNumber) {
       if (count === 0) {
           alert("Correct! It only took you one guess!");
       } else {
           alert("Correct! It only took you " + count +  " guesses!" + '\n' + "Your previous guesses were: " + scoreArr.join(', '));
       }
       
       count = 1;
       
   } else if (numberGuess > secretNumber) {
       alert('Guess Lower');
       count++
       scoreArr[i] = numberGuess
       i++
       play();
   } else if( numberGuess < secretNumber) {
       alert('Guess Higher');
       count++
       scoreArr[i] = numberGuess
       i++
       play();
   }
}

function playAgain(){
    
}

play();