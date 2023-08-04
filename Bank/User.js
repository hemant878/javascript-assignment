const Account=require("./Account")

class User{
    static allUser=[]
    static Id=0
    static UserAccount=[]

    constructor(fullName,gender,country,pincode,adharNumber,panCard,admin){
       this.Id=User.Id++
       this.fullName=fullName
       this.gender=gender
       this.country=country
       this.pincode=pincode
       this.adharNumber=adharNumber
       this.panCard=panCard
       this.admin=admin
       this.userAcc=[]
       
    }

    newUser(fullName,gender,country,pincode,adharNumber,panCard){
        let userObj=new User(fullName,gender,country,pincode,adharNumber,panCard,false)
        User.allUser.push(userObj)
        return userObj
    }

    static newAdmin(fullName,gender,country,pincode,adharNumber,panCard){

        return new User(fullName,gender,country,pincode,adharNumber,panCard,true)

    }

    getallUser(){
        return User.allUser
    }

    findUser(userId){
        for(let i=0 ; i<User.allUser.length;i++){
            if(User.allUser[i].Id== userId){
                return[i,true]
            }
        }
        return[-1,false]
    }

    deleteUser(userId){
        let [userIndex,isUserExists]=this.findUser(userId)
        User.allUser.splice(userIndex,1)
        return User.allUser

    }

    updateUser(userId,fullName,gender,country,pincode,adharNumber,panCard){
           let [userIndex,isUserExists]=this.findUser(userId)
           
           User.allUser[userIndex].fullName=fullName
           User.allUser[userIndex].gender=gender
           User.allUser[userIndex].country=country
           User.allUser[userIndex].pincode=pincode
           User.allUser[userIndex].adharNumber=adharNumber
           User.allUser[userIndex].panCard=panCard

           return User.allUser
    }

    // Account Section

    createAccount(c){
            let account=new Account(c);
            this.userAcc.push(account)
            return this.userAcc
            

    }

    findAccount(AccountNumber){
        for(let i=0;i<this.userAcc.length;i++){
            if(AccountNumber==this.userAcc.userAccountNumber){
                return[i,true]
            }
        }
        return[-1,false]
    }

    deleteAccount(AccountNumber){
          let [AccountIndex,isAccountExits]=this.findAccount(AccountNumber)
          this.userAcc.splice(AccountIndex, 1)
    }


    //Deposite and withdraw

    deposite(deposite){
         this.userAcc[0].deposite(deposite)

    }

    withdraw(withdraw){
        this.userAcc[0].withdraw(withdraw)
    }
}

let a=User.newAdmin("hemant","M","INDIA","413512","78786778","90iuyu9")
let b=a.newUser("devansh","M","INDIA","413512","78786778","90iuyu9")
let c=a.newUser("sarvesh","M","INDIA","413512","78786778","90iuyu9")


// console.log(c);
// console.log(b.getallUser());
// console.log("--------------------------------------");
// console.log(b.deleteUser(1));
// console.log(b.updateUser(1,"rohan","M","USA","7687577","7787788","88898899"))     
 c.createAccount(900);
c.deposite(400);
c.withdraw(400)

console.log(c.userAcc[0].passbook);

// c.deleteAccount(334455);
// console.log(c);
