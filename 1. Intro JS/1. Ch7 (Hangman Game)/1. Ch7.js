// // // // // // let myName = prompt("What is your name?"); /* PROMPT SHOWS "OK" & "CANCEL" */
// // // // // // console.log("Hello", myName);
// // // /* CLICKING "CANCEL" RETURNS "NULL" */

// // // // // /* Using CONFIRM to ask a Yes or No question */
// let likesCats = confirm("Do you like cats?");
// if (likesCats) {
//     console.log("You're a cool cat!");
// } else {
//     console.log("Yeah, that's fine. You're still cool");
// }

// // // // // /* Using ALERTS to give a player information */
// // // // // // alert("JavaScript is awesome!");

// // // // // /* PSEUDOCODE - cross between english & code to describe how program will work (contains loops & conditionals) */

// // // // // Pick A random word;
// // // // // While The word has not been guessed {
// // // // //     Show The player their current progress;
// // // // //     Get A guess from the player;
// // // // // If The player wants to quit the game {
// // // // //     Quit The game;
// // // // // }
// // // // // Else if The guess is not a single letter {
// // // // //     Tell The player to pick a single letter;
// // // // // }
// // // // // Else {
// // // // //     If The guess is in the word {
// // // // //         Update The player's progress with the guess;
// // // // //     }
// // // // //   }
// // // // // }
// // // // // Congratulate The player on guessing the word
// // // // // */

// // // // // /* CODING THE GAME : HANGMAN */

// // // /* 1. choosing a random word */
// // // let words = ["javascript", "monkey", "amazing", "pancake"];
// // // let word = words[Math.floor(Math.random() * words.length)];

// // // /* 2. creating the answer array */
// // // let answerArray = [];
// // // for (i = 0; i < word.length; i++) {
// // //   answerArray[i] = " _ ";
// // // }
// // // let remainingLetters = word.length;

// // // /* 3. coding the game loop */
// // // while (remainingLetters > 0) {
// // //     alert(answerArray.join(" ")); // <--shows players progress. (Game code goes here)

// // //     let guess = prompt("Guess a letter, or click Cancel to stop playing"); // Take input from the player
// // //     if (guess === null) {
// // //         break;
// // //     }
// // //     else if (guess.length !== 1) {
// // //         alert ("Please enter a single letter");
// // //     }
// // //     else {
// // //         //Update answerArray
// // //     }

// // //     for (j = 0; j < word.length; j++) { // Update game state with valid guess
// // //         if (word[j] === guess) {
// // //             answerArray[j] = guess;   // Show the player their progress
// // //             remainingLetters--; // Update remainingLetters for every correct guess
// // //         }
// // //     }

// // // }

// // // /* 4. ending the game */
// // // alert(answerArray.join(" "));
// // // alert("Godd job The answer is: " + word);

// // /* PROGRAMMING CHALLENGES */

// // /* PROGRAMMING CHALLENGE #1 : MORE WORDS (Hangman) */

// // // let words = [
// // //     "library",
// // //     "contrary",
// // //     "textiles",
// // //     "mona lisa",
// // //     "distillery"
// // // ];

// // // let word = words[Math.floor(Math.random() * words.length)];

// // // let answerArray = [];
// // // for (let i = 0; i < word.length; i++) {
// // //     answerArray[i] = "_";
// // // }

// // // let remainingLetters = word.length;

// // // while (remainingLetters > 0) {
// // //     alert(answerArray.join(" "));
// // //     let guess = prompt("Guess a letter, or click Cancel to exit the game");
// // // if (guess === null)  {
// // //     break;
// // // }
// // // else if (guess.length !== 1) {
// // //     alert("Please enter a single letter!");
// // // }
// // // else {
// // //     for (let j = 0; j < word.length; j++) {
// // //         if (word[j] === guess) {
// // //             answerArray[j] = guess;
// // //             remainingLetters--;
// // //         }
// // //     }
// // // }

// // // /* PROGRAMMING CHALLENGE #2: CAPITAL LETTERS */
// // // let words = [
// // //     "library",
// // //     "contrary",
// // //     "textiles",
// // //     "mona lisa",
// // //     "distillery"
// // // ];

// // // let word = words[Math.floor(Math.random() * words.length)];

// // // let answerArray = [];
// // // for (let i = 0; i < word.length; i++) {
// // //     answerArray[i] = "_";
// // // }

// // // let remainingLetters = word.length;

// // // while (remainingLetters > 0 ) {
// // //     let guess = prompt("Guess a letter, or click Cancel to exit the game");
// // // if (guess === null)  {
// // //     break;
// // // }
// // // else if (guess.length !== 1) {
// // //     alert("Please enter a single letter!");
// // // }
// // // else {
// // //        guess = guess.toLowerCase();
// // //     for (let j = 0; j < word.length; j++) {
// // //         if (word[j] === guess) {
// // //             answerArray[j] = guess;
// // //             remainingLetters--;
// // //         }
// // //     }
// // // }

// // /* PROGRAMMING CHALLENGE #3: LIMITING GUESS */
// // // let words = ["library", "contrary", "textiles", "mona lisa", "distillery"];

// // // let word = words[Math.floor(Math.random() * words.length)];

// // // let answerArray = [];
// // // for (let i = 0; i < word.length; i++) {
// // //   answerArray[i] = "_";
// // // }

// // // let guesses = 15; // Stipulating the number of times a player can guess a letter

// // // let remainingLetters = word.length;

// // // while (remainingLetters > 0 && guesses > 0) {
// // //   // Restricting the number of guesses in the game loop
// // //   alert(answerArray.join(" "));
// // //   let guess = prompt("Guess a letter, or click Cancel to exit the game");
// // //   if (guess === null) {
// // //     break;
// // //   } else if (guess.length !== 1) {
// // //     alert("Please enter a single letter!");
// // //   } else {
// // //     guesses--; //Decrementing the number of guesses left after each guess inorder to limit the game loop
// // //     guess = guess.toLowerCase();
// // //     for (let j = 0; j < word.length; j++) {
// // //       if (word[j] === guess) {
// // //         answerArray[j] = guess;
// // //         remainingLetters--;
// // //       }
// // //     }
// // //   }
// // // }

// // // alert(answerArray.join(" "));

// // // if (guesses > 0 ) {
// // //     alert("Good job! The answer is: " + word);
// // // }
// // // else {
// // //     alert("Too bad! The answer was: " + word);
// // // }



// // /* PROGRAMMING CHALLENGE #4: FIXING A BUG */
// // let words = ["library", "contrary", "textiles", "mona lisa", "distillery"];

// // let word = words[Math.floor(Math.random() * words.length)];

// // let answerArray = [];
// // for (let i = 0; i < word.length; i++) {
// //   answerArray[i] = "_";
// // }

// // let guesses = 15; 
// // let remainingLetters = word.length;

// // while (remainingLetters > 0 && guesses > 0) {
// //    alert(answerArray.join(" "));
// //   let guess = prompt("Guess a letter, or click Cancel to exit the game");
// //   if (guess === null) {
// //     break;
// //   } else if (guess.length !== 1) {
// //     alert("Please enter a single letter!");
// //   } else {
// //     guesses--; 
// //     guess = guess.toLowerCase();
// //     for (let j = 0; j < word.length; j++) {
// //       if (word[j] === guess && answerArray[j] === "_") {
// //         answerArray[j] = guess;
// //         remainingLetters--;
// //       }
// //     }
// //   }
// // }

// // alert(answerArray.join(" "));

// // if (guesses > 0 ) {
// //     alert("Good job! The answer is: " + word);
// // }
// // else {
// //     alert("Too bad! The answer was: " + word);
// // }





// // // /* CREATING A FUNCTION THAT PICKS A RANDOM WORD FROM GIVEN LIST */
// // // function pickWord() {
// // //     let randomWords = [
// // //     "library",
// // //     "contrary",
// // //     "textiles",
// // //     "mona lisa",
// // //     "distillery"
// // // ];

// // // return randomWords[Math.floor(Math.random() * randomWords.length)];
// // // };

// // // let randomWord = pickWord();

// // // /* CREATING FUNCTION TO DISPLAY THE CHOSEN RANDOM LETTER */
// // // function chosenRandomLetters(randomWord) {
// // //     let answerArray = [];
// // //     for (i=0; i < randomWord.length; i++) {
// // //         answerArray[i] = "_";
// // //     }
// // //     return answerArray;
// // // };

// // // let answerArray = chosenRandomLetters(randomWord);

// // // /* CREATING FUNCTION TO SHOW PLAYERS PROGRESS */
// // // function showPlayersProgress(answerArray) {
// // //     alert(answerArray.join(" "));
// // // };

// // // /* CREATING FUNCTION TO GET INPUT GUESS FROM PLAYER */
// // // function inputGuess() {
// // //     return prompt("guess a letter, or click Cancel to stop playing");
// // // };

// // // /* CREATING FUNCTION TO UPDATE THE STATUS OF THE GAME */
// // // function updateGameStatus(inputGuess, randomWord, answerArray) {
// // //     let currentGameStatus = 0;
// // //     for (j = 0; j < randomWord.length; j++) {
// // //         if (randomWord[j] === inputGuess) {
// // //             answerArray[j] = inputGuess;
// // //             currentGameStatus++;
// // //         }
// // //     }
// // //     return currentGameStatus;
// // // };

// // // /* CREATING END OF GAME FUNCTION */
// // // function endOfGameMessage(answerArray) {
// // //     showPlayersProgress(answerArray);
// // //     alert("Good job! The answer was ", answerArray.join(""));
// // // };

// // // /* CALLING OUR FUNCTIONS? */
// // // // let randomWord = pickWord();
// // // // let answerArray = chosenRandomLetters(randomWord);
// // // let remainingLetters = randomWord.length;

// // // /* CODING THE ACTUAL GAME */
// // // while (remainingLetters > 0) {
// // //     showPlayersProgress(answerArray);
// // //     let guess = inputGuess();
// // //     if (guess === null) {
// // //         break;
// // //     } else if (guess.length !== 1) {
// // //         alert("Please enter a single letter.");
// // //     } else {
// // //         let correctGuesses = endOfGameMessage(guess, randomWord, answerArray);
// // //         remainingLetters -= correctGuesses;
// // //     }
// // // }

// // // showAnswerAndCongratulatePlayer(answerArray)

