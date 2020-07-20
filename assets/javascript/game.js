var fruits = ["apples", "oranges", "bananas", "strawberries"];
var wins = 0;
var losses = 0;
var errors = [];
var guessesLeft = 10;

//make random fruits be the guessed fruit
var fruitsRandom = fruits[Math.floor(Math.random() * fruits.length)];
//console.log(fruitsRandom);
//Turn words into blanks
var eWord = "";

//for every letter in the word, create a dash
for (var i=0; i<fruitsRandom.length; i++) {
    eWord += "-";
}
console.log(fruitsRandom);
//add eWord to screen
var wordElement = document.getElementById("words");
var newWordsElement = document.createElement("p");
newWordsElement.textContent = eWord;
wordElement.appendChild(newWordsElement);


//If the user guess matches, the letter appears in the blanks.
    //When the user picks a letter, you want to compare the letter the user guesses to the letters in the random fruit chosen by the computer
    //If that letter appears in the fruit word, then that guess is correct, and we want to replace the dash with that letter
    //If that letter is not in the word, we want to alert the user to guess again, and add that incorrect letter to the screen, and reduce the number of guesses left by one
//Check to see if the whole word is completed 
//If statement/ Nested if statement
//If user guesses word correctly, the score goes up. If not, losses goes up. 
//reset game
    //random word appears as blanks again
    //errors (incorrect guessed letters) empties and goes back to zero

document.onkeyup = function(event) {
    var userGuess = event.key; 
    alert("You guessed " + userGuess);

    if (userGuess = fruitsRandom) {
        wins++; 
        alert("You guessed correctly!");
    }
    if (userGuess !== fruitsRandom) {
        guessesLeft--;
        if (guessesLeft === 0) {
            losses++;
            alert("You lose!");
        }

    }
}
