var guessesLeft;
var soFar;
var computerGuess;
var wins = 0;
var losses = 0;
var usedLetters = [];
var userInput;



var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function startNewGame() {
    usedLetters = [];
    guessesLeft = 6;
    document.getElementById("soFar").textContent = usedLetters;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

startNewGame()

// New computer guess
console.log(computerGuess)
document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(usedLetters)

    if (usedLetters.includes(userGuess)) {
        alert("You have chosen the same letter, try again!");
    }
    // Compare user guess to computer guess, if user guess is equal 
    // to computer guess, add to wins
    else if (userGuess === computerGuess) {
        wins++;
        document.getElementById("wins").textContent = wins;
        startNewGame()
        console.log(wins)
    } else {
    // If user uses all gueses, add to losses
        usedLetters.push(userGuess)
        document.getElementById("soFar").textContent = usedLetters;
        guessesLeft--;
        if (guessesLeft <= 0) {
            losses++;
            document.getElementById("losses").textContent = losses;
            startNewGame()
            console.log(losses)
        }
         // How many guesses user has left
        document.getElementById("guessesLeft").textContent = guessesLeft;
        console.log(guessesLeft)
    }


   



}



