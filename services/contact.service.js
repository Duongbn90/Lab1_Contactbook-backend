class ContactService {
    constructor(client){
        this.Contact = client.db().collection("contacts");
    }
    extractContactData(payload){
        const contact = {
            name: payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            favorite: payload.favorite,
        }

        Object.keys(contact).forEach(
            (key) => contact[key] == undefined && delete contact[key]
        );
        return contact;
    }



    async create(payload) {}
}

module.exports = ContactService;