const PassBook=require("./PassBook")

class Account{
    static AccountNumber=334455

    constructor(depo){
          this.userAccountNumber=Account.AccountNumber++
          this.userDeposit=depo
          this.passbook=[]
       
    }

    deposite(balance){
          this.userDeposit=this.userDeposit + balance
          let passbooks=new PassBook(new Date(),this.userDeposit,"deposite",this.userAccountNumber)
          this.passbook.push(passbooks)
          return new Account(this.userDeposit)
    }

    withdraw(balance){
        this.userDeposit=this.userDeposit-balance
        let passbooks=new PassBook(new Date(),this.userDeposit,"withdraw",this.userAccountNumber)
        this.passbook.push(passbooks)
        return new Account(this.userDeposit)


    }

    getPassbook(){
        // for(let i=0;i<this.passbook.)
    }
}


module.exports=Account

// //    this.balance = this.balance+amount
// let passBookObj = new PassBook(new Date(), "credited", amount, this.balance)
// this.passBook.push(passBookObj)
// return this.balance