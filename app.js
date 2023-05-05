let secret = Math.floor(Math.random() * 100);
let counter = 0;
function guessMe(num) {
  let attempt = Number(prompt("What is your number?"));
  if (num === attempt) {
    alert(`Correct! It only took you ${counter} guesses!`);
  } else if (num < attempt) {
    alert("Lower");
    guessMe(num);
    counter++;
  } else if (num > attempt) {
    alert("Higher");
    guessMe(num);
    counter++;
  }
}

guessMe(secret);
