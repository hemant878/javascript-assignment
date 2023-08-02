const BaseError = require("./BaseError")

class NotFound extends BaseError{
   constructor(){
    super("not Found","Error-Not-Found",404)
   }
}

module.exports=NotFound