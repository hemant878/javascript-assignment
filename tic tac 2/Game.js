const Board = require("./Board");
const Player = require("./Player");

class Game {
    constructor(board, player1, player2) { 
      this.board = board; 
      this.player1 = player1; 
      this.player2 = player2; 
      this.turn = 0; 
      this.isGameOver = false; 
    } 
   
    static newGame(player1Name, player2Name) { 
      let board = new Board(); 
      let player1 = new Player(player1Name, "X"); 
      let player2 = new Player(player2Name, "O"); 
   
      return new Game(board, player1, player2); 
    } 
   
    play(cellNumber) { 
      if (this.isGameOver) { 
        return "Game has ended, Please start the new game"; 
      } 
     
      
      if(!Number.isInteger(cellNumber) || cellNumber < 0 || cellNumber > 8) { 
        return "Invalid number"; 
      } 
     
      let isCellEmpty = this.board.isEmpty(cellNumber); 
      let currentPlayer; 
      if (!isCellEmpty) { 
        return "Cell already Marked"; 
      } 
      if (this.turn % 2 === 0) { 
        currentPlayer = this.player1; 
      } else { 
        currentPlayer = this.player2; 
      } 
      currentPlayer.markCell(this.board.cells[cellNumber]); 
      this.turn++; 
      this.board.printBoard(); 
      let [winnerSymbol, gameState] = this.board.analyse();    
      
      if (gameState == "win") { 
        this.isGameOver = true; 
        if(winnerSymbol == "X"){
          return this.player1.name+" is winner"
        } 
        return this.player2.name+" is winner"
      } 
       if (gameState === "Draw") { 
        this.isGameOver = true; 
        return "Game has been Drawn"; 
      } 
      return "continue"; 
    }   
  }
  
let g2 = Game.newGame("hemant", "sarvesh"); 
          
console.log(g2.play(0)); 
console.log(g2.play(1)); 
console.log(g2.play(2)); 
console.log(g2.play(3)); 
console.log(g2.play(4)); 
console.log(g2.play(5));
console.log(g2.play(6));
console.log(g2.play(7));
  
  