var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";


if (cardTwo === cardFour) {
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
}
