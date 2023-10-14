// // // // // // //
// // // /* CREATING OBJECTS */
// // // let cat = { /* can put keys in quotation marks */
// // //     "legs" : 3,
// // //     "name" : "Harmony",
// // //     "color" : "Tortoiseshell"
// // // };
// // // console.log("Cat 1:", cat);

// // // let cat2 = { /* don't have to put keys in quotation marks */
// // //     legs : 3,
// // //     name: "Harmony",
// // //     color: "Tortoiseshell"
// // // };

// // // console.log("Cat 2:", cat2);

// // // let cat3 = 
// // // legs: 3,
// // // "full name": "Harmony Philemona Snuggly-Pants Morgan",
// // //  color: "Tortoiseshell"
// // //  };

// // // console.log("Cat 3:", cat3["full name"]);
// // // console.log("Cat 3 color:", cat3["color"]);
// // // console.log("Cat 3 - Dot notation:", cat3.legs);

// // /*finding keys in objects */
// // let dog = {
// //     name: "Pancake",
// //     age: 6,
// //     color: "white",
// //     bark: "Yip yap yip"
// // };
// // console.log("Dog:", Object.keys(dog));



// // let cat = {
// //     name: "Harmony",
// //     age: 8,
// //     color: "Tortoiseshell"
// // };
// // console.log("Cat:", Object.keys(cat));


// // /* adding values to an object - using one method */
// // let cat = {};
// // cat["legs"] = 3;
// // cat["name"] = "Harmony";
// // cat["color"] = "Tortoiseshell";
// // console.log(cat);

// // /* adding keys with dot notation - a second method */
// // let dog = {};
// // dog.legs = 3;
// // dog.name = "Harmony";
// // dog.color = "Tortoiseshell";
// // console.log(dog);

// /* what happens when you log absent properties i.e. undefined */
// // let dog = {
// //     name : "Pancake",
// //     legs : 4,
// //     isAwesome : true
// // };
// // console.log("Undefined Property:", dog.isBrown);


// // /*Combining arrays */
// // let dinosaurs = [
// //     { 
// //         name: "Tyrannosaurus Rex", 
// //         period: "Late Cretaceous" 
// //     },
// //     { 
// //         name: "Stegosaurus", 
// //         period: "Late Jurassic" 
// //     },
// //     { 
// //         name: "Plateosaurus", 
// //         period: "Triassic" 
// //     }
// //    ];
// //    console.log("Dinosaur1:", dinosaurs);

// //    /* a different way to code the above */
// //     let dinosaurs2 = [
// //  { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
// //  { name: "Stegosaurus", period: "Late Jurassic" },
// //  { name: "Plateosaurus", period: "Triassic" }
// // ];
// // console.log("Dinosaur2:", dinosaurs2);
    


// // /* finding information about first (object?) - one method using square brackets */
// // let dinosaurs = [
// //     { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
// // //     { name: "Stegosaurus", period: "Late Jurassic" },
// // //     { name: "Plateosaurus", period: "Triassic" }
// // //    ];
// // // console.log(dinosaurs[2]["period"]);
// // // console.log(dinosaurs[1]["name"]);
// // // console.log(dinosaurs[0]["period"]);

// // // console.log(dinosaurs[0].name); /* the above with a second method: using dot nation (NB: not with arrays)*/



// // /* AN ARRAY OF FRIENDS */
// // let anna = { name: "Anna", age: 11, luckyNumbers: [4, 8, 16]};
// // let dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40]};
// // let kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3]};

// // let friends = [anna, dave, kate];
// // console.log(friends[1]); /* retrieving object 2 */

// // console.log(friends[0].age); /*retrieving value within object 1 */

// // console.log(friends[0].luckyNumbers[2]) /* retrieving value from array in object 1 */

// // console.log("Friends[1]", friends[1]); /* exploring objects in the console */




// /* Exercise : Keeping Track of Owed Money */
// // let owedMoney = {};
// // owedMoney["Jimmy"] = 5;
// // owedMoney["Anna"] = 7;

// // console.log("Jimmy's debt:", owedMoney["Jimmy"]); /* NOTE: using 'square bracket' method */

// // console.log("Undefined variable:", owedMoney["Jinen"]); /* example of an undefined variable */

// // console.log("Increasing Jimmy's debt:", owedMoney["Jimmy"] += 3); /* Jimmy takes another loan */




// /* Adding objects within objects */
// // let movies = {
// //     "Finding Nemo" : {
// //         releaseDate : 2003,
// //         duration : 100,
// //         actors : ["Albert Brooks", "Ellen Degeneres", "Alexander Gould"],
// //         format : "DVD"
// //     },
// //     "Star Wars: Episode VI - Return of the Jedi" : {
// //         releaseDate : 1983,
// //         duration : 134,
// //         actors : ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
// //         format : "DVD"
// //     },
// //     "Harry Potter and the Goblet of Fire" : {
// //         releaseDate : 2005,
// //         duration : 157,
// //         actors : ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
// //         format : "Blu-ray"
// //     },
// // };

// // console.log("Movie collection:", movies);


// // /* Finding information about an object in our movie collection */
// // let findingNemo = movies["Finding Nemo"];
// // console.log("Duration of 'Finding Nemo':", findingNemo.duration); /* Dot method used */
// // console.log("Format of 'Finding Nemo':", findingNemo.format);


// /* Adding more objects */

// // let cars = {
// //     releaseDate : 2006,
// //     duration : 117,
// //     actors : ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
// //     format : "Blu-ray"
// // };

// // movies["Cars"] = cars;
// // console.log("Updated movie collection:", movies);


// /*  Example */
// // // // // // let car = { /*the keys */
// // // // // //     model: "Audi 1.8",
// // // // // //     year: 2020,
// // // // // //     price: 800000
// // // // // // }

// // // // // // console.log(Object.keys(car)); /* outputs only the key */

// // // // // // console.log(Object.values(car)); /* outputs only the values */




// /* Chapter summary 
// - Arrays use numbers to access elements BUT objects use strings
// */




// /* PROGRAMMING CHALLENGES */

// /* #1 : SCOREKEEPER */
// // let scores = {
// //     Mbali : 0,
// //     Sipho : 0,
// //     Megan : 0,
// // };

// // console.log("Mbali's score:", scores.Mbali);
// // console.log("Mbali scores points:", scores.Mbali += 10); /* Increasing Mbali's score */
// // console.log("Sipho scors points:", scores.Sipho += 20); /* Increasing Sipho's score */
// // console.log("Megan scores points:", scores.Megan += 30); /*  Increasing Megan's score */ 

// // console.log("Round 1 final scores:", scores); /* shows object 'scores' */




// // /* #2 DIGGING INTO OBJECTS AND ARRAYS */
// // let myCrazyObject = {
// //     "name" : "A ridiculous object",
// //     "some array" : [7, 9, {purpose : "confusion", number : 123}, 3.3],
// //     "random animal" : "Banana Shark"
// // };

// // console.log("A crazy object:", myCrazyObject);

// // console.log("Extracting value from array in object:", myCrazyObject["some array"][2].number);
// // console.log(myCrazyObject["some array"][2].purpose);









