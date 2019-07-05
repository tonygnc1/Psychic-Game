var guessesLeft;
var soFar;
var computerGuess;
var wins = 0;
var losses = 0;
var usedLetters = [];
var userInput = userInput;
var checkGuess = 0;


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function startNewGame() {
    guessesLeft = 6;
    soFar = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

startNewGame()

// New computer guess
console.log(computerGuess)
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

    // New user guess
    soFar.push(userGuess)
    document.getElementById("soFar").textContent = soFar;
    console.log(soFar)

    // Code to keep user from repeating same guess 
if (userGuess === (usedLetters)) {

    // if (letters.includes(userInput)) {
    //     if(usedLetters.includes(userInput))
        document.getElementById("userGuess").innerHTML = "";
        console.log(usedLetters);
        alert("You have repeated a guess");
    }

// Compare user guess to computer guess, if user guess is equal 
// to computer guess, add to wins
    if (userGuess === computerGuess) {
        document.getElementById("wins").textContent = ++wins;
        startNewGame()
        console.log(wins)
    }
// How many guesses user has left
    document.getElementById("guessesLeft").textContent = --guessesLeft;
console.log(guessesLeft)

// If user uses all gueses, add to losses
    if (guessesLeft <= 0) {
        document.getElementById("losses").textContent = ++losses;
        startNewGame()
        console.log(losses)
    }



}