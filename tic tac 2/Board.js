const Cell =require("./Cell.js"); 
 
class Board { 
  constructor() { 
    this.cells = [ 
      new Cell(), new Cell(), new Cell(), 
      new Cell(), new Cell(), new Cell(), 
      new Cell(), new Cell(), new Cell() 
    ]; 
  } 
  isEmpty(cellNumber) { 
    return this.cells[cellNumber].isEmpty(); 
  } 
 
  printBoard() { 
   
    console.log(this.cells);
    
  } 
 
  analyse() { 
    //rows
      if(
        this.cells[0].mark === this.cells[1].mark &&
        this.cells[2].mark === this.cells[1].mark &&
        !this.cells[0].isEmpty()
      )
      {
        return [this.cells[0].mark, "win"];
      }
      if(
        this.cells[3].mark === this.cells[4].mark &&
        this.cells[4].mark === this.cells[5].mark &&
        !this.cells[3].isEmpty()
      )
      {
        return [this.cells[3].mark, "win"];
      }
      if(
        this.cells[6].mark === this.cells[7].mark &&
        this.cells[7].mark === this.cells[8].mark &&
        !this.cells[6].isEmpty()
      )
      {
        return [this.cells[6].mark, "win"];
      }

      //columns
      if(
        this.cells[0].mark === this.cells[3].mark &&
        this.cells[3].mark === this.cells[6].mark &&
        !this.cells[0].isEmpty()
      )
      {
        return [this.cells[0].mark, "win"];
      }
      if(
        this.cells[1].mark === this.cells[4].mark &&
        this.cells[4].mark === this.cells[7].mark &&
        !this.cells[1].isEmpty()
      )
      {
        return [this.cells[1].mark, "win"];
      }
      if(
        this.cells[2].mark === this.cells[5].mark &&
        this.cells[5].mark === this.cells[8].mark &&
        !this.cells[2].isEmpty()
      )
      {
        return [this.cells[2].mark, "win"];
      }
 //Diagonals
      
 if(
  this.cells[0].mark === this.cells[4].mark &&
  this.cells[4].mark === this.cells[8].mark &&
  !this.cells[0].isEmpty()
)
{
  return [this.cells[0].mark, "win"];
}
if(
  this.cells[2].mark === this.cells[4].mark &&
  this.cells[4].mark === this.cells[6].mark &&
  !this.cells[2].isEmpty()
)
{
  return [this.cells[2].mark, "win"];
}

    
if (this.cells.every(cell => cell.mark !== "Z")) { 
     
      return ["", "Draw"]; 

    } 

 
    return ["", ""]; 
  } 
} 

 
module.exports=Board;