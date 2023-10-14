// // let welcomingMessage = "Hello World!";
// // console.log(welcomingMessage);

// // // /* the IF statement */
// // // // let myName = "Nic";
// // // // console.log("Hello", myName);
// // // // if (myName.length > 7) {
// // // //     console.log("Wow, you have a REALLY long name!");
// // // // }

// // // /* the IF ELSE statement */
// // // // let age = "21";
// // // // if (age >= 18) {
// // // //     console.log("Access granted");
// // // // } else {
// // // //     console.log("Access denied");
// // // // }

// // // /* MULTIPLE STATEMENTS Chaining IF ELSE statements */
// // // // let lemonChicken = false;
// // // // let beefWithBlackBean = false;
// // // // let sweetAndSourPork = false;

// // // // if (lemonChicken) {
// // // //     console.log("Perfect! I'm having lemon chicken!");
// // // // } else if (beefWithBlackBean) {
// // // //     console.log("The beef will be fine, thank you.");
// // // // } else if (sweetAndSourPork) {
// // // //     console.log("Ok, I suppose I can have the pork today.");
// // // // } else {
// // // //     console.log("Just give me the rice then, please");
// // // // }

// // // /* TRY IT OUT EXERCISE pg 95 */

// // // /* if me = output 'Hello Me'
// // // if not me = output 'Hello stranger' */

// // // let insertedName = "Victor";
// // // let adminName = "Tracy";
// // // let dadsName = "Victor";
// // // let momsName = "Audrey";

// // // if (insertedName === adminName) {
// // //     console.log("Welcome back soldier {^.^}")
// // // } else if (insertedName === dadsName) {
// // //     console.log("Hey Dad, remember not to bash my keyboard in! This is not a type-writer! [^_^]. LOVE YOU!!! ");
// // // } else if (insertedName === momsName) {
// // //     console.log("Hello Mom, I miss you! [^_^] ");
// // // }
// // // else {
// // //     console.log("Why, hello there snooping stranger! {^_-}");
// // // }

// // /* LOOPS */

// // /* the WHILE LOOP statement */
// // /* Example 1: Counting sheep */
// // // let sheepCounted = 0;
// // // while (sheepCounted <10 ) {
// // //     console.log("I have counted", sheepCounted, "sheep!");
// // //     sheepCounted++; /* prevents an infinite loop */
// // // }
// // // console.log("Zzzzzzz");

// // /* the FOR loops */
// // // for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
// // //     console.log("I have counted", sheepCounted, "sheep");
// // // }
// // // console.log("Zzzzzz");

// // // let timesToSayHello = 3;
// // // for (let i = 0; i < timesToSayHello; i++){
// // //     console.log("Hello!");
// // // }

// // /* Using FOR loops with arrays & strings */
// // // let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// // // for (let i = 0; i < animals.length; i++) {
// // //     console.log("This zoo contains a", animals[i], ".");
// // // }

// // /* Printing out characters from a string  */
// // // let myName = "Tracy";
// // // for (let i = 0; i < myName.length; i++) {
// // //     console.log("This is how you spell my name:", myName[i], ".");
// // // }

// // /* More FOR loop examples */
// // /* Printing out powers of 2 */
// // // for (let x = 2; x < 10000; x = x*2) {
// // //     console.log(x);
// // // }

// // /* TRY IT OUT Exercise Pg 101 */
// // /* Printing out powers of 3 */
// // // for (let y = 3; y < 10000; y = y * 2) {
// // //     console.log("The powers of 3 are:", y, ".");
// // // }

// // /* Above example using WHILE loop */
// // let y = 3;
// // while (y < 10000) {
// //     console.log("The powers of 3:", y, y * 3);
// // }



// /* PROGRAMMING CHALLENGES */



// /* PROGRAMMING CHALLENGE #1 : (AWESOME ANIMALS) */
// // let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// // for (i = 0; i < animals.length; i++) {
// //     animals[i] = "Awesome " + animals[i];
// // }

// // console.log(animals);






// /* PROGRAMMING CHALLENGE #2 : (RANDOM STRING GENERATOR) */
// /* A) USING THE 'FOR' LOOP */
// // let alphabet = "abcdefghijklmnopqrstuvwxyz";
// // let randomString = "";
// // let stringLength = 7;
// // for (i = 0; i <stringLength; i++) {
// //     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// //     }

// //     console.log("String 1: FOR loop " + randomString);



// /* B) USING THE 'WHILE' LOOP */
// // let alphabet = "abcdefghijklmnopqrstuvwxyz";
// // let randomString = "";
// // let stringLength = 7;

// // while (randomString < stringLength) {
// //   let randomString = alphabet[Math.floor(Math.random() * alphabet.length)];
// //   randomString++;
// //   console.log(randomString);
// // }
// /* NEED ASSISTANCE WITH ABOVE 'WHILE' LOOP */



// /* PROGRAMMING CHALLENGE #3 : (H4CK3R SP34K) */
// // let input = "javascript console";
// // let output = "";

// // for (i = 0; i < input.length; i++) {
// //     if (input[i] === "a") {
// //         output += "4";
// //     }
// //     else if (input[i] === "e") {
// //         output += "3";
// //     }
// //     else if (input[i] === "i") {
// //         output += "1";
// //     }
// //     else if (input[i] === "o") {
// //         output += "0";
// //     }
// //     else {
// //         output += input[i];
// //     }
// // }

// // console.log(output);

