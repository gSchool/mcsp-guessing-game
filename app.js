 // This is your main function that runs when the page loads
var secret = 99;
function play(){
   var guess = prompt('guess a number');
   var numberGuess = parseInt(guess);
   console.log(guess);
   if (guess === numberGuess) {
       alert('you got it rght');
   } else {
       alert('you got it wrong');
   }
}

function playAgain(){
    
}

play();