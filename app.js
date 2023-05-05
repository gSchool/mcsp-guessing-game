let secret = Math.floor(Math.random() * 100);
let counter = 0;
function typeName(){
    prompt('Enter your name')
}
typeName();
let myName = typeName;

function guessMe(num) {
  let attempt = Number(prompt("What is your number?"));
  if (num === attempt) {
    alert(`Correct, ${myName}! It only took you ${counter} guesses!`);
  } else if (num < attempt) {
    alert(`Sorry, ${myName}. Try a lower number.`);
    counter++;
    guessMe(num);
  } else if (num > attempt) {
    alert(`Sorry, ${myName}. Try a higher number.`);
    counter++;
    guessMe(num);
  }
}

guessMe(secret);
