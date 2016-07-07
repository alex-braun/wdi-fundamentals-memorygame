var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

/*var pick = document.getElementById('game-board');
function createBoard () {
	for (var i = 1; i <= 4; i++) {
		var newCard = document.createElement('div');
		newCard[i] = newCard;
		newCard.className = "card";
		pick.appendChild(newCard);
	}
}
console.log(createBoard());*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function createBoard () {
	for (var i = 0; i < cards.length i++) {
		document.cardElement.setAttribute('data-card', cards[i]);
		document.cardElement.addEventListener('click', isTwoCards);
		document.cardElement.innerHTML = '<img src="images/Hearts 12.png" alt="Queen of Hearts" />';
	}
}

function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch () {
if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.")
} else if (card[0] === card[1]) {
	alert("You found a match!")
}
document.getElementByClassName('card').innerHTML = "";
}
