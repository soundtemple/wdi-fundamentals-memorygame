// CODE FROM EARLIER ASSIGNMENTS
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
//  **************************************************


var cards = ['queen', 'queen', 'king', 'king' ]; // set cards of the game
var cardsInPlay = []; // cards in play
var scoreCount = 0;


// Get an element with the id of game-board and set it to a variable.
var board = document.getElementById('game-board');
var score = document.getElementById('score');
var message = document.getElementById('message');

function createBoard() { //function to create board
	for (var i=0; i<cards.length; i++) { //loop to create card elements
		var cardElement = document.createElement('div'); //create the card
		cardElement.setAttribute('data-card', cards[i]);  // this will set the card's 'data-card' to be the element of the array
		cardElement.className = 'card'; //add the class 'card' to the card element
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement); //append the card to the board

	}
}


function isTwoCards() {
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  	console.log(this.getAttribute('data-card'));
  	if (this.getAttribute('data-card') === 'king') {
  		this.innerHTML = "<img src='images/king.jpg'>"; 
  	} else {
  		this.innerHTML = "<img src='images/queen.jpg'>";
  	}
  	 // if you have two cards in play check for a match
	if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
	}
  }
  
 

function isMatch(cards) {
  // alert winning message
  if (cardsInPlay[0] === cardsInPlay[1]) {
    scoreCount +=1;
    score.innerHTML = ("<h4>Score: " + scoreCount + "</h4>");
    message.innerHTML = ("<h4>You found a match!</h4>");
      } else {
    message.innerHTML = ("<h4>Sorry. Try again.</h4>");

  }
  if (scoreCount === 5) {
  	scoreCount = 0;
  	score.innerHTML = ("<h4>Score: " + scoreCount + "</h4>");
  	message.innerHTML = ("<h4>GAME OVER!!! Play again?</h4>");
  	resetGame();
  }
}

function resetGame() {
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML = " ";
	}
}

createBoard();




