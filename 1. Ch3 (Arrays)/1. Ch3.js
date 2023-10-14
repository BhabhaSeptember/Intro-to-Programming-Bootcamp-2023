// // // // // // // // // // // // // let fruit = [
// // // // // // // // // // // // //     "apple",
// // // // // // // // // // // // //     "banana",
// // // // // // // // // // // // //     "peach"
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // console.log(fruit[0]);

// // // // // // // // // // // // // console.log(fruit[fruit.length-1]);

// // // // // // // // // // // // // console.log(fruit.indexOf("banana"));

// // // // // // // // // // // // // // alert(fruit);
// // // // // // // // // // // // // fruit[0] = "orange";
// // // // // // // // // // // // // alert(fruit);


// // // // // // // // // // // // /* SETTING OR CHANGING ELEMENTS IN AN ARRAY */
// // // // // // // // // // // // let subject = []; /* an empty array */
// // // // // // // // // // // // subject[0] = "Math";
// // // // // // // // // // // // subject[1] = "Science";
// // // // // // // // // // // // subject[2] = "English";
// // // // // // // // // // // // // subject[3] = "Biology";
// // // // // // // // // // // // // console.log(subject);

// // // // // // // // // // // // let dinosaurs = [];
// // // // // // // // // // // // dinosaurs[0] = "T-Rex";
// // // // // // // // // // // // dinosaurs[1] = "Velociraptor";
// // // // // // // // // // // // dinosaurs[2] = "Stegosaurus";
// // // // // // // // // // // // dinosaurs[3] = "Triceratops";
// // // // // // // // // // // // dinosaurs[4] = "Brachiosaurus";
// // // // // // // // // // // // dinosaurs[5] = "Pteranodon";
// // // // // // // // // // // // dinosaurs[6] = "Apatosaurus";
// // // // // // // // // // // // dinosaurs[7] = "Diplodocus";
// // // // // // // // // // // // dinosaurs[8] = "Compsognathus";
// // // // // // // // // // // // dinosaurs[33] = "Philosoraptor"; /*from 8 to 32, it will be empty*/
// // // // // // // // // // // // console.log(dinosaurs);


// // // // // // // // // // // /* Mixing data types in an array */
// // // // // // // // // // // let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", "3627.5"], 10];
// // // // // // // // // // // console.log(dinosaursAndNumbers[2][2]);
// // // // // // // // // // // console.log(dinosaursAndNumbers[2]);
// // // // // // // // // // // console.log(dinosaursAndNumbers[3]);


// // // // // // // // // // /* Finding length of an array */
// // // // // // // // // // let maniacs = ["Yakko", "Wakko", "Dot"];
// // // // // // // // // // console.log(maniacs[0]);
// // // // // // // // // // console.log(maniacs[1]);
// // // // // // // // // // console.log(maniacs[2]);
// // // // // // // // // // console.log(maniacs.length);
// // // // // // // // // // console.log(maniacs[maniacs.length-1]);


// // // // // // // // // /*adding elements to an array */
// // // // // // // // // let animals = [];
// // // // // // // // // animals.push("Cat");
// // // // // // // // // animals.push("Dog");
// // // // // // // // // animals.push("Llama");
// // // // // // // // // console.log(animals);

// // // // // // // // // animals.unshift("Monkey"); /* puts value infront of the array */
// // // // // // // // // console.log(animals);

// // // // // // // // // let numberOfAnimals = animals.unshift("Polar Bear");
// // // // // // // // // console.log("There are", numberOfAnimals, "animals in my array.x");


// // // // // // // // // let lastAnimal = animals.pop(); /* removing elements from an array */
// // // // // // // // // console.log(animals);
// // // // // // // // // console.log(lastAnimal);

// // // // // // // // // let firstAnimal = animals.shift(); /* removes first  element */
// // // // // // // // // console.log(animals);
// // // // // // // // // console.log(firstAnimal);


// // // // // // // // // /* ADDING ARRAYS */
// // // // // // // // let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// // // // // // // // let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// // // // // // // // let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// // // // // // // // console.log("furry animals:", furryAnimals);
// // // // // // // // console.log("scaly animals", scalyAnimals);
// // // // // // // // console.log("furry and scaly animals", furryAndScalyAnimals);

// // // // // // // // /* Joining multiple arrays */
// // // // // // // // let featheredAnimals = ["Macaw", "Dodo"];
// // // // // // // // let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
// // // // // // // // console.log("feathered animals", featheredAnimals);
// // // // // // // // console.log("all animals:", allAnimals);

// // // // // // // /* finding index of an element in an array */
// // // // // // // let colors = ["red", "green", "blue"];
// // // // // // // console.log(colors.indexOf("blue")); /* finding index number of an element */

// // // // // // // console.log(colors[2]); /* finding element in a specified index position */

// // // // // // // console.log(colors.indexOf("purple"));


// // // // // //let insects = ["Bee", "Ant", "bee", "Bee", "Ant"];
// // // // // // console.log(insects.indexOf("Bee", 3));


// // // // // // let boringAnimals = ["Monkey", "Cat", "Fish"];
// // // // // // let stringBoringAnimals = boringAnimals.join();
// // // // // // console.log(boringAnimals.join(" |")); /* converts array to a string */
// // // // // // console.log(boringAnimals); /*an array */

// // // // // /* exercise */
// // // // // let landmarks = [];
// // // // // landmarks.push("My house");
// // // // // landmarks.push("Front path");
// // // // // landmarks.push("Flickering streetlamp");
// // // // // landmarks.push("Leaky fire hydrant");
// // // // // landmarks.push("Fire station");
// // // // // landmarks.push("Cat rescue center");
// // // // // landmarks.push("My old school");
// // // // // landmarks.push("My friend's house");
// // // // // console.log(landmarks);

// // // // // console.log(landmarks.pop());
// // // // // console.log(landmarks.pop());
// // // // // console.log(landmarks.pop());
// // // // // console.log(landmarks.pop());
// // // // // console.log(landmarks.pop());
// // // // // console.log(landmarks.pop());
// // // // // console.log(landmarks.pop());
// // // // // console.log(landmarks.pop());
// // // // // console.log(landmarks);

// // // // /* CLASS: MATH */
// // // // /* math random */
// // // // console.log(Math.random() * 10); /*never returns random number bigger than 0.999999 */

// // // // /* Math floor */
// // // // console.log(Math.floor((Math.random() * 10))); /*removes all decimal places */
// // // // /* above code gives you whole random numbers less than 10 */

// // // // let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
// // // // let randomIndex = Math.floor(Math.random() * randomWords.length);
// // // // console.log(randomWords[randomIndex]);

// // // // /* exercise */
// // // // let randomSongs = ["Hit me baby", "One more time", "Tide is high", "Dear Mama"];
// // // // let randomSongChoiceIndex = [Math.floor(Math.random() * randomSongs.length)];
// // // // console.log("Get ready to to sing!!! :", randomSongs[randomSongChoiceIndex]);



// // // /*CREATING A RANDOM INSULT GENERATOR */
// // // let randomBodyParts = ["Face", "Nose", "Toe", "Ear"];
// // // let randomAdjectives = ["Smelly", "Sharp", "Stupid", "Shiny", "Heavy"];
// // // let randomWords = ["Fly", "Snail", "Turtle", "Wood"];

// // // let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// // // let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// // // let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// // // // let randomInsult = "Your" + " " + randomBodyPart + " " + "is like a" + " " + randomAdjective + " " + randomWord + " " + "O_O";
// // // let randomInsult = ["Your", randomBodyPart, "is like a", randomAdjective, randomWord, "O_O ."].join(" ");
// // // console.log(randomInsult);








// // /* PROGRAMMING CHALLENGES */
// // //I can smell your (animal) (bodyparts) from (random place)!
// // /* #1 NEW INSULT */
// // let randomAnimals = ["Gorilla", "Skunk", "Pig"];
// // let randomBodyParts = ["Feet", "Fingers", "Nails", "Knees"];
// // let randomPlaces = ["Timbuktu", "Yemen", "The Bermuda Triangle", "Texas"];

// // let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
// // let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// // let randomPlace = randomPlaces[Math.floor(Math.random() * randomPlaces.length)];

// // let randomInsult = ["I can smell your", randomAnimal, randomBodyPart, "all the way from", randomPlace, "!"].join(" ");

// // console.log(randomInsult);




// /* #2 MORE SOPHISTICATED INSULTS */
// /* Your (body part) are more (adjective) than a (animal)'s (animal body part).*/
// let randomBodyParts = ["nostrils", "intestines", "hands"];
// let randomAdjectives = ["hairy", "heavy", "shiny"];
// let randomAnimals = ["bear", "boa", "penguin"];
// let randomAnimalBodyParts = ["paw", "beak", "scales"];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
// let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

// let randomInsult = ["Your", randomBodyPart, "are more", randomAdjective, "than a", randomAnimal,"'s", randomAnimalBodyPart, "."].join(" ");

// console.log(randomInsult);


// /* #3 JOINING NUMBERS */
// let randomNumbers = ["3", "2", "1"];

// // let randomNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];

// let randomString = [randomNumbers[0], "is bigger than", randomNumbers[1], "is bigger than", randomNumbers[2]].join(" ");
// console.log(randomString);