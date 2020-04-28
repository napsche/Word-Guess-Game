var fruits = ["apples", "oranges", "bananas", "strawberries"];
var wins = 0;
var losses = 0;
var errors = [];

//make random fruits be the guessed fruit
var fruitsRandom = fruits[Math.floor(Math.random() * fruits.length)];
//console.log(fruitsRandom);
var wordElement = document.getElementById("words");

var newWordsElement = document.createElement("p");
newWordsElement.textContent = fruitsRandom;

wordElement.appendChild(newWordsElement);

//Turn words into blanks
//If the user guess matches, the letter appears in the blanks.
//If the user guess does not match, it comes up as an error
//Check to see if the whole word is completed 
//If statement/ Nested if statement
//If user guesses word correctly, the score goes up. If not, losses goes up. 
