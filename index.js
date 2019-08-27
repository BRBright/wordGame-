var inquirer = require("inquirer");
var Letter = require("./letter.js");
var Word = require("./word.js");

inquirer
  .prompt([
    {
      type: "input",
      message: "Guess a letter.",
      name: "userGuess"
    }
  ])
  .then(function(inquirerResponse) {
    console.log(inquirerResponse.userGuess);
  });
