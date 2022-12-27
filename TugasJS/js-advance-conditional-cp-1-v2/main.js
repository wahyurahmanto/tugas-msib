function rockPaperScissor(player1, player2) {
 hasil= "";
	if(player1=="scissor" && player2 == "paper"){
    hasil = "Player 1 Won!"
  }
  if(player1=="paper" && player2 == "scissor"){
    hasil = "Player 2 Won!"
  }
  if(player1=="paper" && player2 == "rock"){
    hasil = "Player 1 Won!"
  }
  if(player1=="scissor" && player2 == "rock"){
    hasil = "Player 2 Won!"
  }
  if(player1=="rock" && player2 == "paper"){
    hasil = "Player 2 Won!"
  }
  if(player1=="rock" && player2 == "scissor"){
    hasil = "Player 1 Won!"
  }
  if(player1 == player2){
    hasil = "Draw!"
  }
    return hasil // TODO: replace this
  }
  
  console.log(rockPaperScissor('scissor', 'paper')); // "Player 1 Won!"
  console.log(rockPaperScissor('rock', 'paper')); // "Player 2 Won!"
  console.log(rockPaperScissor('paper', 'paper')); // "Draw!"
  console.log(rockPaperScissor('rock', 'rock')); // "Draw!"
  
  module.exports = rockPaperScissor;
  