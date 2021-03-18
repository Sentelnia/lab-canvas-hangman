class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = hangman.secretWord;
  }

  createBoard() {
    this.context.lineWidth = 3;
    this.context.strokeStyle = 'black';
    this.context.beginPath();
    this.context.moveTo(200, 700);
    this.context.lineTo(300, 700);
    this.context.lineTo(250, 650);
    this.context.lineTo(200, 700);
    this.context.moveTo(250, 650);
    this.context.lineTo(250, 100);
    this.context.lineTo(550, 100);
    this.context.lineTo(550, 150);
    this.context.stroke();
    
    this.context.beginPath();
    this.context.arc(550, 200, 50, 0, Math.PI*2);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(550, 250);
    this.context.lineTo(550, 400);
    this.context.moveTo(550, 300);
    this.context.lineTo(475, 280);
    this.context.moveTo(550, 300);
    this.context.lineTo(625, 280);
    this.context.moveTo(550, 400);
    this.context.lineTo(465, 490);
    this.context.moveTo(550, 400);
    this.context.lineTo(635, 490);
    this.context.stroke();

    this.drawLines()
  }

  drawLines() {
    let number = hangman.secretWord.length;
    this.context.beginPath();
    this.context.moveTo(350, 700);
    let x = 350;
    for (let i = 1; i < number +1; i++ ){
      this.context.lineTo(x + 40 , 700);
      this.context.moveTo(x + 60 , 700);
      x += 60;  
    }
    this.context.stroke();
  }

  writeCorrectLetter(index) {
    let x = 350;
    let number = index * 60
    this.context.beginPath();
    this.context.moveTo(x, 650);
    this.context.font = 'bold 45px san-serif'
    this.context.fillText(hangman.secretWord[index].toUpperCase() , x + 5 + number, 690);

  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 800;
    
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
