class Contact {
    get id() {
        return this._id;
    }
    set id(id){
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name (name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!'
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9_ ]{1,}$')
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address is Incorrect!'
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[+]?.[91]?[6-9]{1}[0-9]{9}$')
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'PhoneNumber is Incorrect!'
    }
    get city () {
        return this._city;
    }
    set city (city) {
        this._city=city;
    }
    get state () {
        return this._state;
    }
    set state (state) {
        this._state=state;
    }

    get zipcode () {
        return this._zipcode;
    }
    set zipcode (zipcode) {
        let zipRegex = RegExp('^[0-9]{6}$')
        if(zipRegex.test(zipcode))
        this._zipcode = zipcode;
        else throw 'zip is Incorrect!'
    }
    toString(){
        return `id ${this.id} \nName ${this.name} \nPhone Number ${this.phoneNumber} \nAddress ${this.address} \nCity ${this.city} \nState ${this.state} \nZipcode  ${this.zipcode}`;
        
    }
  
}
