var inquirer = require("inquirer");
var Letter = require("./letter.js");
var Word = require("./word.js");

function newGame() {
  var word = new Word("gameWord");
  word.display();
  userInput(word);

  /*if (this.guessed.length > 0) {
    this.guessed = [];
  }*/
}

function guessesRemain() {
  this.guesses = 10;
  this.guessed = [];
  if (guesses > 0) {
    for (i = 0; i < guessed.length; i++) {
      console.log(guessed[i]);
    }
    userInput();
  } else if (guesses === 0) {
    console.log("Game over!");
  }
}

function userInput(word) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Guess a letter.",
        name:
          "userLetter" /*,
        validate: function(val) {
          if (Letter(val)) {
            return true;
          } else {
            return false;
          }
        }*/
      }
    ])
    .then(function(inquirerResponse) {
      //console.log(inquirerResponse.userLetter);
      word.letterCheck(inquirerResponse.userLetter);
      word.display();
      guessesRemain();
    });
}
newGame();
