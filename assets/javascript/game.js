var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// Array
var guessesSoFar = [];

// Checks the userGuess does not input till after the check
var userGuess = null;

// Generate a random letter
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];


// Create a onkeyup event for button press
document.onkeyup = function(event) { // creating the function

	// When user presses a key, it records it and saves to userGuess creating string also putting lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	// CHECK AREA
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) { //  make sure picks has to be within the alphabet/a usable character
		guessesSoFar[guessesSoFar.length]=userGuess;

		guessesLeft--;
	}



	// WIN
		// reset guessesLeft to 9, and empty the guessesSoFar array also have the computer make a new random pick
	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("Congrats you win!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

		//******* console log out to check  for errors
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}



	// LOSS
		// reset guessesLeft to 9, and empty the guessesSoFar array also have the computer make a new random pick
	if (guessesLeft == 0) {
		losses++;
		console.log("Sorry you lost! Feel free to try again.");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

		//***** console log out to check for errors
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}



	// Push the display to the html + make sure it is the same so the wins/loses/etc will record
	var html = "<p><h4>Guess the letter</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";


	// Place html into the game ID
	document.querySelector("#game").innerHTML = html;

}