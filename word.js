var Letter = require("./letter.js");

function Word(word) {
  this.wordConstruct = function(word) {
    var temp = [];
    for (i = 0; i < word.length; i++) {
      var wordChar = word[i];
      var wordLetter = new Letter(wordChar);
      temp.push(wordLetter);
    }
    return temp;
  };
  this.word = this.wordConstruct(word);

  this.display = function() {
    var wordDisplay = "";
    for (i = 0; i < this.word.length; i++) {
      var wordLetter = this.word[i];
      wordDisplay += wordLetter.display() + " ";
    }
    console.log(wordDisplay);
  };

  this.letterCheck = function(letter) {
    for (i = 0; i < this.word.length; i++) {
      var wordLetter = this.word[i];
      console.log(wordLetter);
      wordLetter.letterCheck(letter);
    }
    return this.display;
  };
}
module.exports = Word;
