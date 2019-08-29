var inquirer = require("inquirer");
var Letter = require("./letter.js");
var Word = require("./word.js");

function newGame() {
  var word = new Word(Word);
  word.display();
  userInput(word);
}

function userInput(word) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Guess a letter.",
        name: "userLetter"
      }
    ])
    .then(function(inquirerResponse) {
      console.log(inquirerResponse.userLetter);
      word.checkLetter(guess.letter);
      word.display();
      userInput(word);
    });
}
newGame();
