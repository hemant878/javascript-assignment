class Player { 
    constructor(name, symbol) { 
      this.name = name; 
      this.symbol = symbol; 
    } 
   
    markCell(cellObj) { 
      cellObj.markCell(this.symbol); 
    } 
  } 
   
  module.exports = Player