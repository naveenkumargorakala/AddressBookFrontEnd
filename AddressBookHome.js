let contactList;
window.addEventListener('DOMContentLoaded', (event) => {
    contactList = getAddressBookDataFromStorage();
    document.querySelector('.person-count').textContent = contactList.length;
    createInnerHtml();
    localStorage.removeItem('editPerson');
});

const getAddressBookDataFromStorage = () => {
  return localStorage.getItem('ContactList') ? 
                    JSON.parse(localStorage.getItem('ContactList')) : [];
}

const createInnerHtml = () => {
const headerHtml ="<th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip code</th><th>Phone Number</th><th>Delete-Edit</th>";
    
        
if(contactList.length == 0)return;
let innerHtml = `${headerHtml}`;
for(const contact of contactList){
innerHtml = `${innerHtml}
      <tr>
        
        <td>${contact._name}</td>
        <td>${contact._address}</td>
        <td>${contact._city}</td>
        <td>${contact._state}</td>
        <td>${contact._zipcode}</td>
        <td>${contact._phoneNumber}</td>

        
        <td>
        <img id="${contact._id}" src="delete.jpeg" alt="delete" id="1" onclick="remove(this)">
        <img id="${contact._id}" src="update.jpeg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}
 