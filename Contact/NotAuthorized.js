const BaseError = require("./BaseError")

class NotAuthorized extends BaseError{
   constructor(message){
    super(message,"Error-Not-Found",404)
   }
}

module.exports=NotAuthorized