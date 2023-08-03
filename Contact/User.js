const Contact = require("./Contact")
const NotFound = require("./NotFound")
const NotAuthorized = require("./NotAuthorized")
class User {
    static Id = 0;
    static allUsers = []
    constructor(fullName, gender, country, isAdmin) {
        this.Id = User.Id++
        this.fullName = fullName
        this.gender = gender
        this.country = country
        this.isAdmin = isAdmin
        this.contacts = []
    }

    newUser(fullName, gender, country) {
        try {
            if (!this.isAdmin) {
                throw new NotFound("Invalid string")
            }
            if (typeof fullName != "string") {
                throw new NotFound("Invalid string")
            }
            let userObj = new User(fullName, gender, country, false)
            User.allUsers.push(userObj)
            return userObj
            
        } catch (e) {
            return e;
        }
       
    }  

    static newAdmin(fullName, gender, country) {
      try {
        if (typeof fullName != "string") {
               throw new NotFound("Invalid string")
        }
        return new User(fullName, gender, country, true)
        
      } catch (e) {
           return e
      }

       
    }

    getAllUsers() {
        try {
            if (!this.isAdmin) {
                throw new NotAuthorized("user not authorized")
            }
            return User.allUsers
            
        } catch (error) {
             return error
        }
       
    }
     
    findUser(userID) {

        try {
            if (!this.isAdmin) {
                throw new NotAuthorized("user not authorized")
            }
            for (let index = 0; index < User.allUsers.length; index++) {
                if (userID == User.allUsers[index].Id) {
                    return [index, true]
                }
            }
            return [-1, false]
            
        } catch (error) {
            return error
        }
       
    }

    updateUser(userId, parameter, newValue) {
       try {
        
        if (typeof userId != "number") {
            throw new NotFound("user not found")
        }
        if (!this.isAdmin) {
            throw new NotAuthorized("user not authorized")
        }
        let [indexOfUser, isUserExist] = this.findUser(userId)

        if (!isUserExist) {
            throw new NotAuthorized("user not authorized")
        }
        switch (parameter) {
            case "fullName": if (typeof newValue != "string") { return "invalid name" }
                User.allUsers[indexOfUser].fullName = newValue
                return User.allUsers[indexOfUser]
            case "gender": if (typeof newValue != "string") { return "invalid gender" }
                User.allUsers[indexOfUser].gender = newValue
                return User.allUsers[indexOfUser]
            case "country": if (typeof newValue != "string") { return "invalid country" }
                User.allUsers[indexOfUser].country = newValue
                return User.allUsers[indexOfUser]
            default: throw new NotFound("user not Found")
        }
        
       } catch (error) {
             return error
       }

    }


    deleteUser(userId) {
        try {
            if (typeof userId != "number") {
                throw new NotFound("user not Found")
            }
            if (!this.isAdmin) {
                throw new NotAuthorized("user not authorized")
            }
            let [indexOfUser, isUserExist] = this.findUser(userId)

            if (!isUserExist) {
                throw new NotFound("user not Found")
            }
            User.allUsers.splice(indexOfUser, 1)
            return User.allUsers
            
        } catch (error) {
            return error
        }
        
       
    }

    createContact(fullName) {
        try {
            if (typeof fullName != "string") {
                throw new NotFound("user not Found")
            }
            let createdContact = new Contact(fullName)
            this.contacts.push(createdContact)
            
        } catch (error) {
            return error
        }
       
    }

    getAllContact() {
        return this.contacts
    }

    findContact(contactId) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (contactId == this.contacts[i].Id) {
                return [i, true]
            }
        }
        return [-1, false]
    }

    updateContact(contactId, newValue) {
     try{    
        if (typeof contactId != "number") {
            throw new NotFound("invalid user Id")
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)

        if (!isContactExist) {
            throw new NotFound("contact does not exist")
            
        }
        if (typeof newValue != "string") {
            throw new NotFound("invalid name")
           
        }
        this.contacts[indexOfContact].fullName = newValue
        return this.contacts[indexOfContact]
      }
     catch(e){
        return e.message;
     }   
    }

    deleteContact(contactId) {
      try {
        if (typeof contactId != "number") {
            throw new NotFound("user not found")
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if (!isContactExist) {
            throw new NotFound("user not found")
        }
        this.contacts.splice(indexOfContact, 1)
        
      } catch (error) {
          return error
      }

       
    }

    createContactInfo(contactId, typeOfContact, valueOfContact) {
       try {
           
            if (typeof contactId != "number") {
                throw new NotFound("user not found")
            }
            let [indexOfContact, isContactExist] = this.findContact(contactId)
            if (!isContactExist) {
                throw new NotFound("user not found")
            }
            this.contacts[indexOfContact].createContactInfo(typeOfContact, valueOfContact)
            return this.contacts[indexOfContact]
        
       } catch (error) {
          return error
       }

    }

    getAllContactInfo(contactId) {
        try {
            if (typeof contactId != "number") {
                throw new NotFound("user not found")
            }
            let [indexOfContact, isContactExist] = this.findContact(contactId)
            if (!isContactExist) {
                throw new NotFound("user not found")
            }
            this.contacts[indexOfContact].getAllContactInfo()
            return this.contacts[indexOfContact]
            
        } catch (error) {
            return error
        }
        
    }

    updateContactInfo(contactId, contactInfoId, newValue) {
        try {
            if (typeof contactId != "number") {
                throw new NotFound("user not found")
            }
            let [indexOfContact, isContactExist] = this.findContact(contactId)
            if (!isContactExist) {
                throw new NotFound("user not found")
            }
            this.contacts[indexOfContact].updateContactInfo(contactInfoId, newValue)
            return this.contacts[indexOfContact]
            
        } catch (error) {
            return error
        }

    }

    deleteContactInfo(contactId, contactInfoId){
      try {
        if (typeof contactId != "number") {
            throw new NotFound("user not found")
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if (!isContactExist) {
            throw new NotFound("user not found")
        }
        this.contacts[indexOfContact].deleteContactInfo(contactInfoId)
        return this.contacts[indexOfContact]
        
      } catch (error) {
          return error
      }


    }

    getUserById(userId){
        try {
            if(typeof userId != "number"){
                throw new NotFound("user not found")
            }
            let [indexOfUser, isUserExist] = this.findUser(userId)
            if(!isUserExist){
                throw new NotFound("user not found")
            }
            return User.allUsers[indexOfUser]
            
        } catch (error) {
            return error
        }

    }

    getContactById(contactId){
       try {
            if(typeof contactId != "number"){
                throw new NotFound("user not found")
            }
            let [indexOfContact, isContactExist] = this.findContact(contactId)
            if(!isContactExist){
                throw new NotFound("user not found")
            }
            return this.contacts[indexOfContact]
        
       } catch (error) {
          return error
       }


    }

    getContactInfoById(contactId, contactInfoId){
        try {
            if(typeof contactId != "number"){
                throw new NotFound("user not found")
            }
            let [indexOfContact, isContactExist] = this.findContact(contactId)
            if(!isContactExist){
                throw new NotFound("user not found")
            }
            return this.contacts[indexOfContact].getContactInfoById(contactInfoId)
            
        } catch (error) {
            return error
        }
       
    }
}

let a = User.newAdmin(22, "M", "IND")
// let u1 = a.newUser("sarvesh", "M", "IND")
// let u2 = a.newUser("mohan", "M", "IND")


// // u1.createContact("omkar")
// u2.createContact("rohan")
// u2.updateContact(0,"hemant")

// // u1.createContactInfo(0, "mobile", 7738530483)
console.log(a);
// updateContact()
// console.log(u1.getContactInfoById(0,0));
// console.log(u1.updateContact(0,99));
