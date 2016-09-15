var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// Assignment instructions to test against two kings, two queens, one of each
if (cardTwo === "king" && cardFour === "king") {
  alert('You found a match. Two kings!');
} else if (cardTwo === "queen" && cardFour === "queen") {
  alert('You found a match. Two queens!');
} else {
	alert('Sorry. Try again.')
}


// Simpler code just testing strict equality
// if (cardThree === cardFour) {
// 	alert('You found a match!')
// } else {
// 	alert('Sorry. Try again.')
// }