// 1. create an event listener for the print button, with a handler function called printView
let printButton = document.getElementById("printable");
printButton.addEventListener("Click", printView); //Finish even listener with addEventLister

// 2.create an event listener for the add button, with a handler function called addTheThing
let addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

/* NOTES: GLOBAL VS LOCAL VARIABLES
a) Gloabl variables can be used anywhere in the JS program
b) Local variables are within functions & can only be used if that function is called */

// 3. create a blank array named myList
let myList = [];

// 4. create a variable, myListArea, which references the element with the id of 'wishList'
let myListArea = document.getElementById("wishList");

// 5. function addTheThing gets the value of the text field and then passes it to a function called addToTheList. It then runs a function called resetInput
function addTheThing() {
  let theThing =
    document.getElementById(
      "iWant"
    ); /* Statement stores reference to element NOT get value of input field */
  addToTheList(theThing); /* function gets value & adds to list */
  resetInput(theThing); /* function resets value of input field to blank */
}

// 6. Function printView which outputs s nicely formatted view of the list
function printView() {
  let listPage = document.getElementById("listPage");
  let formArea = document.getElementById("formArea");
  formArea.style.display = "none";
  listPage.className = "print";
  myListArea.innerHTML = "";
  myList.sort();
  for (var i = 0; i < myList.length; i++) {
    wishList.innerHTML += "<li>" + myList[i] + "</li>";
  }
}

// 7. Function accepts argument, adds it to array, then adds it to ul in browser window
function addToTheList(thingToAdd) {
  myList.push(
    thingToAdd.value
  ); /* Adds current value of of input field to myList array */
  let newListItem =
    document.createElement(
      "li"
    ); /* Creates empty list element stored in a new variable */
  newListItem.innerHTML =
    myList[
      myList.length - 1
    ]; /* changes innerHTML property of new element to current value of input field */
  myListArea.appendChild(newListItem);
}

// 8. function resetInput, which resets the value of the input field to blank ("")
function resetInput(inputToReset) {
  inputToReset.value = "";
}

/* FIDDLE NOTES/COMMENTS BELOW */
/* function addToTheList, which takes one parameter, 
called thingToAdd, pushes it into the myList array, and then 
adds it to myListArea

function addToTheList(thingToAdd) {
    

}
*/
/* function resetInput, which resets the value of the
input field to blank ("")
function resetInput(inputToReset) {

}
*/
/*function printView, which outputs a nicely formatted 
view of the list 
function printView() {
  
}
*/