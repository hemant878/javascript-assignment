const PassBook = require("./PassBook")
const ValidationError = require("./ValidationError")
const UnauthorizedError = require("./UnAuthorizedError")
const NotFound = require("./NotFound")

class Account{
    static accountId = 0
    constructor(balance){
        this.id = Account.accountId++
        this.balance = balance
        this.passBook = []
    }

    getAccountId(){
        return this.id
    }

    getBalance(){
        return this.balance
    }

    deposit(amount){
        try {
            if(typeof amount != "number" || amount<0){
                throw new ValidationError("amount not valid")
            }
            this.balance = this.balance+amount
            let passBookObj = new PassBook(new Date(), "credited", amount, this.balance)
            this.passBook.push(passBookObj)
            return this.balance
        } catch (error) {
            throw error
        }
    }

    withdraw(amount){
        try {
            if(typeof amount != "number" || (amount<0 || amount > this.balance)){
                throw new ValidationError("amount not valid")
            }
            this.balance = this.balance-amount
            let passBookObj = new PassBook(new Date(), "debited", amount, this.balance)
            this.passBook.push(passBookObj)
            return this.balance
        } catch (error) {
            throw error
        }
    }
    
    getPassBook(){
        return this.passBook
    }
}

module.exports = Account