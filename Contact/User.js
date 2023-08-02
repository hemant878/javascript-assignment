const Contact = require("./Contact")
const NotFound = require("./NotFound")
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
        if (!this.isAdmin) {
            return "unauthorised"
        }
        return User.allUsers
    }

    findUser(userID) {
        if (!this.isAdmin) {
            return "unauthorised"
        }
        for (let index = 0; index < User.allUsers.length; index++) {
            if (userID == User.allUsers[index].Id) {
                return [index, true]
            }
        }
        return [-1, false]
    }

    updateUser(userId, parameter, newValue) {
        if (typeof userId != "number") {
            return "invalid user Id"
        }
        if (!this.isAdmin) {
            return "unauthorised"
        }
        let [indexOfUser, isUserExist] = this.findUser(userId)
        if (!isUserExist) {
            return "user does not exist"
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
            default: return "Invalid Parameter"
        }
    }

    deleteUser(userId) {
        if (typeof userId != "number") {
            return "invalid user Id"
        }
        if (!this.isAdmin) {
            return "unauthorised"
        }
        let [indexOfUser, isUserExist] = this.findUser(userId)
        if (!isUserExist) {
            return "User does not exist"
        }
        User.allUsers.splice(indexOfUser, 1)
        return User.allUsers
    }

    createContact(fullName) {
        if (typeof fullName != "string") {
            return "invalid name"
        }
        let createdContact = new Contact(fullName)
        this.contacts.push(createdContact)
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
            throw new Error("invalid user Id")
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if (!isContactExist) {
            throw new Error("contact does not exist")
            
        }
        if (typeof newValue != "string") {
            throw new Error("invalid name")
           
        }
        this.contacts[indexOfContact].fullName = newValue
        return this.contacts[indexOfContact]
      }
     catch(e){
        return e.message;
     }   
    }

    deleteContact(contactId) {
        if (typeof contactId != "number") {
            return "invalid user Id"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if (!isContactExist) {
            return "contact does not exist"
        }
        this.contacts.splice(indexOfContact, 1)
    }

    createContactInfo(contactId, typeOfContact, valueOfContact) {
        if (typeof contactId != "number") {
            return "invalid user Id"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if (!isContactExist) {
            return "contact does not exist"
        }
        this.contacts[indexOfContact].createContactInfo(typeOfContact, valueOfContact)
        return this.contacts[indexOfContact]
    }

    getAllContactInfo(contactId) {
        if (typeof contactId != "number") {
            return "invalid user Id"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if (!isContactExist) {
            return "contact does not exist"
        }
        this.contacts[indexOfContact].getAllContactInfo()
        return this.contacts[indexOfContact]
    }

    updateContactInfo(contactId, contactInfoId, newValue) {
        if (typeof contactId != "number") {
            return "invalid user Id"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if (!isContactExist) {
            return "contact does not exist"
        }
        this.contacts[indexOfContact].updateContactInfo(contactInfoId, newValue)
        return this.contacts[indexOfContact]
    }

    deleteContactInfo(contactId, contactInfoId){
        if (typeof contactId != "number") {
            return "invalid user Id"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if (!isContactExist) {
            return "contact does not exist"
        }
        this.contacts[indexOfContact].deleteContactInfo(contactInfoId)
        return this.contacts[indexOfContact]
    }

    getUserById(userId){
        if(typeof userId != "number"){
            return "Invalid number"
        }
        let [indexOfUser, isUserExist] = this.findUser(userId)
        if(!isUserExist){
            return "User does not exist"
        }
        return User.allUsers[indexOfUser]
    }

    getContactById(contactId){
        if(typeof contactId != "number"){
            return "Invalid number"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if(!isContactExist){
            return "User does not exist"
        }
        return this.contacts[indexOfContact]
    }

    getContactInfoById(contactId, contactInfoId){
        if(typeof contactId != "number"){
            return "Invalid number"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactId)
        if(!isContactExist){
            return "User does not exist"
        }
        return this.contacts[indexOfContact].getContactInfoById(contactInfoId)
    }
}

let a = User.newAdmin(99, "M", "IND")
// let u1 = a.newUser("sarvesh", "M", "IND")


// u1.createContact("omkar")
// u1.createContact("rohan")

// u1.createContactInfo(0, "mobile", 7738530483)
console.log(a);
// console.log(u1.getContactInfoById(0,0));
// console.log(u1.updateContact(0,99));
