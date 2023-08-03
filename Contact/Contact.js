const ContactInfo = require("./ContactInfo")
const NotFound=require("./NotFound")

class Contact {
    static Id = 0
    constructor(fullName) {
        this.Id = Contact.Id++
        this.fullName = fullName
        this.contactInfo = []
    }

    createContactInfo(typeOfContact, valueOfContact) {
        let contactInfoCreated = new ContactInfo(typeOfContact, valueOfContact)
        this.contactInfo.push(contactInfoCreated)
        return contactInfoCreated
    }

    getAllContactInfo() {
        return this.contactInfo
    }

    findContactInfo(contactInfoId) {
        for (let index = 0; index < this.contactInfo.length; index++) {
            if (contactInfoId == this.contactInfo[index].Id) {
                return [index, true]
            }
        }
        return [-1, false]
    }

    updateContactInfo(contactInfoId, newValue) {
       try {
            if (typeof contactInfoId != "number") {
                throw new NotFound("user not found")
            }
            let [indexOfContactInfo, isContactInfoExist] = this.findContactInfo(contactInfoId)
            if (!isContactInfoExist) {

                throw new NotFound("user not found")
            }
            this.contactInfo[indexOfContactInfo].updateContactInfo(newValue)
            return this.contactInfo[indexOfContactInfo]
        
       } catch (error) {
         return error
       }
        

    }

    deleteContactInfo(contactInfoId){
        try {
            if (typeof contactInfoId != "number") {
                throw new NotFound("user not found")
            }
            let [indexOfContactInfo, isContactInfoExist] = this.findContactInfo(contactInfoId)
            if (!isContactInfoExist) {
                throw new NotFound("user not found")
            }
            this.contactInfo.splice(indexOfContactInfo, 1)
            return this.contactInfo
            
        } catch (error) {
            return error
        }

    }

    getContactInfoById(contactInfoId){
        try {
            if (typeof contactInfoId != "number") {
                throw new NotFound("user not found")
            }
            let [indexOfContactInfo, isContactInfoExist] = this.findContactInfo(contactInfoId)
            if (!isContactInfoExist) {
                throw new NotFound("user not found")
            }
            return this.contactInfo[indexOfContactInfo]
        } catch (error) {
            return error
        }

    }
}

module.exports = Contact