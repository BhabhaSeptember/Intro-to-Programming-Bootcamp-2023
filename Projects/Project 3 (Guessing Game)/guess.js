// /*PART ONE: */
// let secret = 7;
// let answer = prompt("Please guess the secret number (1-10): ");
// let guess = parseInt(answer); //Converting the string 'Guess' to an integer for comparison

// if (guess === secret) {
//   alert("CORRECT!");
// } else {
//   alert("Sorry, incorrect");
// }





// /* PART TWO: */
// let secret = 10;
// let answer = prompt("Please guesss a secret number between 1-10 :");
// let guess = parseInt(answer);

// function getAnswer() { answer; guess;}  //combining lines '17 & 18'
// getAnswer();

// if (guess === secret) {
//     alert("CORRECT! -- END OF GAME -- ");
// } else {
//     alert("Oooops, sorry! Refresh & Try again {^_^} !");
// }



/* PART 3: USING WHILE LOOP */
/* DECLARE GLOBAL VARIABLES */

let secretNumber = Math.floor(Math.random() * 61);
let playersGuess = prompt("Guess a random number between 0-60");

while (playersGuess !== secretNumber) {
    secretNumber;
    if (playersGuess === secretNumber) {
        alert("Correct! Well done! -END OF GAME-");
        break;
    } else if (playersGuess < secretNumber) {
        alert("Incorrect, too low! Try again {^_^}");
        break;
    } else {
        alert("Incorrect, too high! Try again {^_^}");
        break;
    }
}