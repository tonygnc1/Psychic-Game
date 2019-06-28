var guessesLeft;
var soFar;
var computerGuess;
var wins = 0;
var losses = 0;


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function startNewGame() {
    guessesLeft = 6;
    soFar = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

startNewGame()
console.log(computerGuess)
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);
    soFar.push(userGuess)
    document.getElementById("soFar").textContent = soFar;
    console.log(soFar)
    if (userGuess === computerGuess) {
        document.getElementById("wins").textContent = ++wins;
        startNewGame()
    }

    document.getElementById("guessesLeft").textContent = --guessesLeft;

    if (guessesLeft <= 0) {
        document.getElementById("losses").textContent = ++losses;
        startNewGame()
    }



}