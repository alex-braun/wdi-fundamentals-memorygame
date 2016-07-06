var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

var pick = document.getElementById('game-board');
function createBoard () {
	for (var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard[i] = newCard;
		newCard.className = "card";
		pick.appendChild(newCard);
	}
}
console.log(myFunction());
/*if (cardTwo === cardFour) {
	alert("Sorry, try again.")
} else if (cardTwo === cardThree) {
	alert("Sorry, try again.")
} else if (cardTwo === cardOne) {
	alert("You found a match!")
} else if (cardOne === cardThree) {
	alert("Sorry, try again.")
} else if (cardOne === cardFour) {
	alert("Sorry, try again.")
} else if (cardThree === cardFour) {
	alert("You found a match!")
}*/
