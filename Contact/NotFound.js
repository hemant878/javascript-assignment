const BaseError = require("./BaseError")

class NotFound extends BaseError{
   constructor(message){
    super(message,"Error-Not-Found",404)
   }
}

module.exports=NotFound