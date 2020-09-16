var underscores = []; 
var wins = 0;
var losses = 0;
var totalGames = 0; 
var guessesLeft = 10;
var wordGuess = []; 
var fruitsRandom = ""; 
var congrats = false; 

$(".guessesLeft").text(guessesLeft);
$(".totalGames").text(totalGames);
$(".wins").text(wins); 

$(document).ready(function() {
    displayLetterButtons();
    newGame();
}); 

function displayLetterButtons() {
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>"); 
        letterBtn.addClass("letter-button letter letter-button-color"); 
        letterBtn.attr("data-letter", letters[i]); 
        letterBtn.text(letters[i]); 
        $(".buttons").append(letterBtn);
    }
}

function newGame() {
    console.log("New game!!"); 
    guessesLeft = 10; 
    wordGuess = []; 

    $(".letter-button-color").css({ backgroundColor: "#d84a43", height: "40px", width: "40px", borderStyle: "solid", marginTop: "20px", borderColor: "#f6de9f", marginRight: "10px", color: "#f6de9f" }); 
    $(".letter-button-color").attr('disabled', false); 
    $(".guessesLeft").text(guessesLeft); 

    randomSelect = ""; 
    underscores = []; 
    congrats = false; 

    wordSelect(); 
}

function wordSelect() {
    var fruits = ["apples", "oranges", "bananas", "strawberries", "kiwi", "blueberry", "mangoe"];
    fruitsRandom = fruits[Math.floor(Math.random() * fruits.length)];

    underscores = []; 
    for (i = 0; i < fruitsRandom.length; i++) {
        underscores.push("_"); 
    }
    $(".word-guess").text(underscores.join(" "));
}

$(document).on("click", ".letter-button", function() {
    if (guessesLeft > 0) {
        fruitsRandom = fruitsRandom.toLowerCase(); 
        wordGuess = underscores; 

        var letterGuess = $(this).attr("data-letter").toLowerCase(); 

        for (i = 0; i < fruitsRandom.length; i++) {
            if (fruitsRandom[i] === letterGuess) {
                wordGuess[i] = letterGuess; 
                congrats = true; 
                $(".word-guess").text(wordGuess.join(" ").toUpperCase()); 
            }
        }

        if (congrats === true) {
            document.getElementById(this.style.backgroundColor = "lightgreen"); 
            $(".guessResult").text("You guessed correctly! " + letterGuess.toUpperCase()); 
            congrats = false; 
        }
        else {
            $(".guessResult").text("Guess again!"); 
            guessesLeft--; 
            document.getElementById(this.style.backgroundColor = "brightred"); 
            document.getElementById(this.style.color = "brightred") 
            $(this).attr('disabled', true); 
            $(".guessesLeft").text(guessesLeft); 
        }

        if (wordGuess.join("") === fruitsRandom) {
            var congratsMessage = ("Congrats! You guessed " + fruitsRandom.toUpperCase() + "! You win!");
            $(".guessResult").text(congratsMessage); 
            wins++; 
            totalGames++; 
            $(".totalGames").text(totalGames); 
            $(".wins").text(wins); 
            newGame();  
        }

        else if (guessesLeft === 0) {
            var loseMessage = ("Game over! No more guesses left. Try again!"); 
            $(".guessResult").text(loseMessage); 
            totalGames++; 
            $(".totalGames").text(totalGames); 
            newGame(); 
        }
    }
}); 

// //make random fruits be the guessed fruit
// var fruitsRandom = fruits[Math.floor(Math.random() * fruits.length)];
// //console.log(fruitsRandom);
// //Turn words into blanks
// var eWord = "";

// //for every letter in the word, create a dash
// for (var i=0; i<fruitsRandom.length; i++) {
//     eWord += "-";
// }
// console.log(fruitsRandom);
// //add eWord to screen
// var wordElement = document.getElementById("words");
// var newWordsElement = document.createElement("p");
// newWordsElement.textContent = eWord;
// wordElement.appendChild(newWordsElement);


// //If the user guess matches, the letter appears in the blanks.
//     //When the user picks a letter, you want to compare the letter the user guesses to the letters in the random fruit chosen by the computer
//     //If that letter appears in the fruit word, then that guess is correct, and we want to replace the dash with that letter
//     //If that letter is not in the word, we want to alert the user to guess again, and add that incorrect letter to the screen, and reduce the number of guesses left by one
// //Check to see if the whole word is completed 
// //If statement/ Nested if statement
// //If user guesses word correctly, the score goes up. If not, losses goes up. 
// //reset game
//     //random word appears as blanks again
//     //errors (incorrect guessed letters) empties and goes back to zero

// document.onkeyup = function(event) {
//     var userGuess = event.key; 
//     alert("You guessed " + userGuess);

//     if (userGuess = fruitsRandom) {
//         wins++; 
//         alert("You guessed correctly!");
//     }
//     if (userGuess !== fruitsRandom) {
//         guessesLeft--;
//         if (guessesLeft === 0) {
//             losses++;
//             alert("You lose!");
//         }

//     }
// }
