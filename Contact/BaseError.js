class BaseError extends Error{
    constructor(message,name,httpStatusCode){
        super(message)
        this.name=name
        this.httpStatusCode=httpStatusCode
    }
}

module.exports = BaseError