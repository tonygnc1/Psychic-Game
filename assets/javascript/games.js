{/* <script type="javascript"> */}

var wins = 0;
var losses = 0;
var guessesLeft = 20;
var soFar = 0;

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeyup = function() {
     var userGuess = String.fromCharCode(event.keyCode), 
     toLowerCase();

     
     var computerGuess = letters[Math.floor(Math.random()*letters.length)];


if (userGuess === computerGuess) {
    document.getElementById("wins").textContent = wins++;
    soFar = []

    if (guessesLeft <= 0) {
        document.getElementById("losses").textContent = losses++;
        document.getElementById("guessesLeft").textContent = guessesLeft--;
    }   
}


// </script>