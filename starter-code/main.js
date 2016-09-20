// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";



// Assignment instructions to test against two kings, two queens, one of each
// if (cardTwo === "king" && cardFour === "king") {
//   alert('You found a match. Two kings!');
// } else if (cardTwo === "queen" && cardFour === "queen") {
//   alert('You found a match. Two queens!');
// } else {
// 	alert('Sorry. Try again.')
// }


// Simpler code just testing strict equality
// if (cardThree === cardFour) {
// 	alert('You found a match!')
// } else {
// 	alert('Sorry. Try again.')
// }

// Get an element with the id of game-board and set it to a variable.
var createBoard = document.getElementById('game-board');

function createBoard() { //function to create board
	for (var i=0; i<cards.length; i++) { //loop to create card elements
		var cardElement = document.createElement('div'); //create the card
	cardElement.className = 'card'; //add the class 'card' to the card element
	board.appendChild(cardElement); //append the card to the board

	}
}


