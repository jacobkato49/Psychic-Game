var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// guessesSoFar will be an array
var guessesSoFar = [];

// Checks the userGuess to make sure it is a "letter" aka real guess
var userGuess = null;

// Generate a random lette
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];


// Create a onkeyup event for button press
document.onkeyup = function(event) { // creating the function

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	// Check Area
	// Add the user's guess to guessesSoFar array only if it wasn't already previously picked
	// picks has to be within the alphabet and a usable character
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
	}



	// User WINS
	// reset guessesLeft to 9, and empty the guessesSoFar array also have the computer make a new random pick
	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

		// console log out to check  for errors
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}



	// User LOSS
	// reset guessesLeft to 9, and empty the guessesSoFar array also have the computer make a new random pick
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

		// console log out to check for errors
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}



	// Push the display to the html + make sure it is the same so the wins/loses/etc will record
	var html = "<p><h4>Guess the letter</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";


	// place html into the game ID
	document.querySelector("#game").innerHTML = html;

}