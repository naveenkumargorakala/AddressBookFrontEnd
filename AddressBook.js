window.addEventListener('DOMContentLoaded', (event) => {
    const Name = document.querySelector('#name');
    const nameError = document.querySelector('.nameError');
    Name.addEventListener('input', function() {
        if(Name.value.length == 0) {
            nameError.textContent = " ";
            return;
        }
        try {
            (new Contact()).name = Name.value;;
            nameError.textContent = " ";
        }
        catch (e) {
            nameError.textContent = e;
        }

        });

        const Address = document.querySelector('#address');
        const addressError = document.querySelector('.addressError');
        Address.addEventListener('input', function() {
            if(address.value.length == 0) {
                addressError.textContent = " ";
                return;
            }
            try {
                (new Contact()).address = address.value;;
                addressError.textContent = " ";
            }
            catch (e) {
                addressError.textContent = e;
            }
    
            });

            const phoneNumber = document.querySelector('#phoneNumber');
            const phoneNumberError = document.querySelector('.phoneError');
            phoneNumber.addEventListener('input', function() {
            if(phoneNumber.value.length == 0) {
                phoneNumberError.textContent = " ";
                return;
            }
            try {
                (new Contact()).phoneNumber = phoneNumber.value;;
                phoneNumberError.textContent = " ";
            }
            catch (e) {
                phoneNumberError.textContent = e;
            }
    
            });

            const zipcode = document.querySelector('#zipcode');
            const zipError = document.querySelector('.zipError');
            zipcode.addEventListener('input', function() {
            if(zipcode.value.length == 0) {
                zipError.textContent = " ";
                return;
            }
            try {
                (new Contact()).zipcode = zipcode.value;;
                zipError.textContent = " ";
            }
            catch (e) {
                zipError.textContent = e;
            }
    
            });

            
            

            const setTextValue = (id, value) => {
                const element = document.querySelector(id);
                element.textContent = value;
              };
    

    });

    // new
    const save = (event) => {
        event.preventDefault();
        let contact;
         try {
             contact = createAddressBook();
            createAndUpdateStorage(contact);
            
        } catch (e) {
            return;
        }
      }
        const createAddressBook = () => {
            let contact = new Contact();
            try {
                contact.name = getInputValueById('#name');
            } catch (e) {
                setTextValue('.nameError', e);
                throw e;
            }

            
            try {
                contact.address = getInputValueById('#address');
            } catch (e) {
                setTextValue('.addressError', e);
                throw e;
            }

            try {
                contact.phoneNumber = getInputValueById('#phoneNumber');
            } catch (e) {
                setTextValue('.phoneError', e);
                throw e;
            }
            
            try {
                contact.city = getInputValueById('#city');
            } catch (e) {
                setTextValue('.phoneError', e);
                throw e;
            }

            try {
                contact.state = getInputValueById('#state');
            } catch (e) {
                setTextValue('.phoneError', e);
                throw e;
            }

             
            try {
                contact.zipcode = getInputValueById('#zipcode');
            } catch (e) {
                setTextValue('.zipError', e);
                throw e;
            }
            
            
             alert(contact.toString());
             return contact; 
        }
            const getSelectedValues = (propertyValue) => {
                let allItems = document.querySelectorAll(propertyValue);
                let selItems = [];
                allItems.forEach(item => {
                    if(item.checked) selItems.push(item.value);
                });
                return selItems;
            };
            const getInputValueById = (id) => {
                let value = document.querySelector(id).value;
                return value;
            };
      
            const getInputElementValue = (id) => {
                let value = document.getElementById(id).value;
                return value;
            };
      
      
      function createAndUpdateStorage(contact) {
        let contactList = JSON.parse(localStorage.getItem("ContactList"));
        if (contactList != undefined) {
            contactList.push(contact);
        } else {
            contactList = [contact];
        }
        alert(contactList.toString());
        localStorage.setItem("ContactList", JSON.stringify(contactList));
      }
      
      const resetForm = () => {
        setValue('#name', '');
        setValue('#address', '')
        setValue('#phoneNumber', '')
        setValue('#zip', '')
      }
      
      const unsetSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        allItems.forEach(item => {
            item.checked = false;
        });
      }
      
      const setTextValue = (id, value) => {
        const element = document.querySelector(id);
        element.textContent = value;
      }
      
      const setValue = (id, value) => {
        const element = document.querySelector(id);
        element.value = value;
      }

