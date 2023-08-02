const ContactInfo = require("./ContactInfo")

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

        
        if (typeof contactInfoId != "number") {
            return "invalid user Id"
        }
        let [indexOfContactInfo, isContactInfoExist] = this.findContactInfo(contactInfoId)
        if (!isContactInfoExist) {

            return "contact info does not exist"
        }
        this.contactInfo[indexOfContactInfo].updateContactInfo(newValue)
        return this.contactInfo[indexOfContactInfo]
    }

    deleteContactInfo(contactInfoId){
        if (typeof contactInfoId != "number") {
            return "invalid user Id"
        }
        let [indexOfContactInfo, isContactInfoExist] = this.findContactInfo(contactInfoId)
        if (!isContactInfoExist) {
            return "contact info does not exist"
        }
        this.contactInfo.splice(indexOfContactInfo, 1)
        return this.contactInfo
    }

    getContactInfoById(contactInfoId){
        if (typeof contactInfoId != "number") {
            return "invalid user Id"
        }
        let [indexOfContactInfo, isContactInfoExist] = this.findContactInfo(contactInfoId)
        if (!isContactInfoExist) {
            return "contact info does not exist"
        }
        return this.contactInfo[indexOfContactInfo]
    }
}

module.exports = Contact