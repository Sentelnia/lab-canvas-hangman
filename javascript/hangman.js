class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let index = Math.trunc(Math.random() * (this.words.length -1))
    return this.words[index];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true;
    }
    return false;
  }

checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    }
    return true;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
    this.letters.push(letter);
  }

  checkGameOver() {
    if (this.errorsLeft > 0){
      return false;
    }
    console.log('You lose');
    return true;
  }

  checkWinner() {

    if (this.secretWord.length === this.guessedLetters.length){
      console.log('Winner');
      return true;
    }
    return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    
    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  let keyCode = event.keyCode;
  let letter = event.key;
  var number = 0;
  console.log(letter);
  //si c'est une lettre
  if(hangman.checkIfLetter(keyCode) === true) {
    //on regarde si la lettre est dans le mot secret
    if (hangman.secretWord.includes(letter)){
      // on vérifie si elle est plusieurs fois dans secretword
      // on transforme le secretWord en array
      let secretWordArr = hangman.secretWord.split('');
      console.log("array mot secret "  + secretWordArr);
      secretWordArr.forEach(function (el) {
        if(letter === el){
          //on l'ajoute dans la string correctletter
        hangman.addCorrectLetter(letter)
        //sinon
        let index = secretWordArr.indexOf(el, number);
        number = index + 1;
        hangmanCanvas.writeCorrectLetter(index)
        //on vérifie la victoire
        hangman.checkWinner()
        }
      });
    // si non,
    } else { 
        //on vérifie que cette lettre n'est pas dans l'array des wrongsletters
        if(hangman.checkClickedLetters(letter)){
        //on l'ajoute
        hangman.addWrongLetter(letter) 
        //on vérifie si il y a Game over
        hangman.checkGameOver()
        }
    }
  }
});
