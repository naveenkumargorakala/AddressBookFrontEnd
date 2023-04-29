class Contact{
    name;
    address;
    phoneNumber;
    constructor(...attributes){
        this.name=attributes[0];
        this.address=attributes[1];
        this.phoneNumber=attributes[2];
    }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
         if(nameRegex.test(name))
         this._name = name;
         else
         throw "Incorrect Name Format!!!";
    }
    get address(){
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^[[A-Z a-z]{3,}[A-Za-z]{3,}]+$');
        if(addressRegex.test(address))
        this._address=address;
        else
        throw "Incorrect Address Format!!!"
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex=RegExp('^[+]?[91]?[6-9]{1}[0-9]{9}$');
        if(phoneRegex.test(phoneNumber))
        this._phoneNumber=phoneNumber;
        else
        throw "Incorrect PhopneNumber Format!!!"
    }
}