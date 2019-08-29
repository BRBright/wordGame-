function Letter(letter) {
  this.letter = letter;
  this.guess = false;

  this.display = function() {
    if (this.guess === true) {
      return this.letter;
    } else {
      return "_";
    }
  };
  this.checkLetter = function(guess) {
    if (guess === this.letter) {
      this.guess = true;
    } else {
      return false;
    }
  };
}

module.exports = Letter;
