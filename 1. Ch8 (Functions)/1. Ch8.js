// // // /* Creating simple function */
// // // function ourFirstFunction() {
// // //     console.log("Hello world!");
// // // };
// // // ourFirstFunction();  //Calling a function



// // /* PASSING ARGUMENTS INTO FUNCTIONS */
// // // function sayHelloTo(yourName) {
// // //   console.log("Hello", yourName, "!");
// // // }
// // // sayHelloTo("Tracy");



// // /* PRINTING CAT FACES */
// // // function drawCats(howManyTimes) {
// // //   for (i = 0; i < howManyTimes; i++ ) {
// // // console.log(i, "=^.^=");
// // //   }
// // // };
// // // drawCats(5);




// // /* PASSING MULTIPLE ARGUMENTS TO A FUNCTION */

// // // function printMultipleTimes(howManyTimes, whatToDraw) {

// // //   for ( i = 0; i < howManyTimes; i++) {
// // //     console.log(i, " ", whatToDraw);
// // //   }

// // // };
// // // printMultipleTimes(3, "{O_^}");





// // /* RETURNING VALUES FROM FUNCTIONS */
// // // console.log(5 + Math.floor(1.2345));

// // // function double(number) {
// // //   return number * 2;
// // // };
// // // console.log(double(2));



// // /* USING FUNCTION CALLS AS VALUES */

// // // function double(number) {
// // //   return number * 2;
// // // };
// // // console.log("(5 * 2) + (6 * 2) =", (double(5) + double(6)) );

// // // console.log(double(double(3)));







// // /* USING FUNCTIONS TO SIMPLIFY CODE */

// // /* EXAMPLE 1: FUNCTION TO PICK A RANDOM WORD */
// // let randomWords = ["Hello", "Hit", "Me", "Baby", "One", "More", "Time"];
// // let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// // function pickRandomWord (randomWords) {
// //     return randomWords[Math.floor(Math.random() * randomWords.length)];
// // };
// // console.log(pickRandomWord(randomWords));

// // /* EXAMPLE 2 */
// // // function pickRandomWord(randomWords) {
// // //     return randomWords[Math.floor(Math.random() * randomWords.length)];
// // // }

// // // let randomWords = ["Planet", "Worm", "Flower", "Computer"];

// // // console.log("Chosen random word: " + pickRandomWord(randomWords));
// // // console.log("Random word from new array: " + pickRandomWord(["Hadiyo", "Dorette", "Vusi", "Mitch", "Thabiso"]));







// // /* RANDOM INSULT GENERATOR USING A FUNCTION */
// // let randomBodyParts = ["Face", "Nose", "Hair"];
// // let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// // let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// // let randomBodyPart =  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// // let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives)];
// // let randomWord = randomWords[Math.floor(Math.random() * randomWords)];

// // let randomString = "Your " + randomAdjective + " is like a " + randomBodyPart + " " + randomWord + "!!!";

// // console.log(randomString);


// /* MAKING RANDOM INSULT GENERATOR INTO A FUNCTION */
// // function pickRandomWord(randomWords) {
// //     return randomWords[Math.floor(Math.random() * randomWords.length)];
// // }

// // generateRandomInsult = function () {
// //     let randomBodyParts = ["Face", "Nose", "Hair"];
// //     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// //     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// //     let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
// //  return randomString
// // }

// // console.log(generateRandomInsult());






// // // /* Leaving a function early */
// // // // function fifthLetter(myName) {
// // // //     if (myName.length < 5) {
// // // //         return
// // // //     }
// // // //     return "The fifth letter of name is", myName[4];
// // // // }
// // // // let myName = prompt("What is your name??");



// // // /* USING 'RETURN' MULTIPLE TIMES INSTEAD OF 'IF...ELSE' STATEMENTS */
// // // // function medalForScore(playersScore) {
// // // //     if (playersScore < 3) {
// // // //         return "Bronze";
// // // //     }
// // // //     if (playersScore <7) {
// // // //         return "Silver";
// // // //     }
// // // //     return "Gold";
// // // // };

// // // // let playersScore = prompt("Enter players score");





// /* PROGRAMMING CHALLENGES */
// // // /* PROGRAMMING CHALLENGE #1 : DOING ARITHMETIC WITH FUNCTIONS  */
// // // // function add(x,y) {
// // // //     return x + y;
// // // // }
// // // // function multiply(x,y) {
// // // //     return x* y;
// // // // }
// // // // let answer = add(multiply(36325,9824), 777);
// // // // console.log(answer);





// // // /* PROGRAMMING CHALLENEGE #2 : ARE THESE ARRAYS THE SAME? */
// // // // function areArraysSame(array1, array2) {
// // // //     if (array1.length !== array2.length) {
// // // //         return true;
// // // //     }
// // // // }

// // // //         for (i=0; i < array1.length; i++) {

// // // //             if (array1[i] === array2[i]) {
// // // //                 return true;
// // // //             } return false;

        
// // // //         };

// // // // /* array1 = [1, 2, 3] 
// // // //     array2 = [4, 5, 6]  */

// // // // console.log("logging different arrays:", areArraysSame([1, 2, 3], [4, 5, 6, 7]));

// // // // console.log("Logging same arrays:", areArraysSame([1, 2, 3], [1, 2, 3]));




// // // /* PROGRAMMING CHALLENGE #3 : HANGMAN, USING FUNCTIONS */
// // // function pickword () {
// // //     let words = [
// // //       "javascript",
// // //       "monkey",
// // //       "amazing",
// // //       "pancake"
// // //     ];

// // //     return words[Math.floor(Math.random() * words.length)];
// // //   };

// // //   function setupAnswerArray(word) {
// // //     let answerArray = [];
// // //     for (var i = 0; i < word.length; i++) {
// // //       answerArray[i] = "_";
// // //     }

// // //     return answerArray;
// // //   };

// // //   var function showPlayerProgress (answerArray) {
// // //     alert(answerArray.join(" "));
// // //   };

// // //   let getGuess = function () {
// // //     return prompt("Guess a letter, or click Cancel to stop playing.");
// // //   };

// // //   function updateGameState (guess, word, answerArray) {
// // //     let appearances = 0;
// // //     for (var j = 0; j < word.length; j++) {
// // //       if (word[j] === guess) {
// // //         answerArray[j] = guess;
// // //         appearances++;
// // //       }
// // //     }

// // //     return appearances;
// // //   };

// // //   function showAnswerAndCongratulatePlayer(answerArray) {
// // //     showPlayerProgress(answerArray);
// // //     alert("Good job! The answer was " + answerArray.join(""));
// // //   };

// // //   let word = pickWord();
// // //   let answerArray = setupAnswerArray(word);
// // //   let remainingLetters = word.length;

// // //   while (remainingLetters > 0) { showPlayerProgress(answerArray); let guess = getGuess();
// // //     if (guess === null) {
// // //       break;
// // //     } else if (guess.length !== 1) {
// // //       alert("Please enter a single letter.");
// // //     } else {
// // //       var correctGuesses = updateGameState(guess, word, answerArray);
// // //       remainingLetters -= correctGuesses;
// // //     }
// // //   }

// // //   showAnswerAndCongratulatePlayer(answerArray);
