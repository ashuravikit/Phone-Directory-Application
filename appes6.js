class Contact {
constructor(number, name) {
this.number = number;
this.name = name;

}

}

class UI {

addContactToList(contact) {

        const list = document.getElementById('contact-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        
        <td>${contact.number}</td>
        <td>${contact.name}</td>
        <td><a href="" class="delete">X</a></td>
        `;
list.appendChild(row);

    
}

showAlert(message, className){

            const div = document.createElement('div');

            //Add className

            div.className = `alert ${className}`;
            
            div.appendChild(document.createTextNode(message));
            
            const container = document.querySelector('.container');
            
            //Get Form
            
            const form = document.querySelector('#contact-form');
            
            //Insert alert
            
            container.insertBefore(div, form);
            
            // Timeout after 3 sec
        
            setTimeout(function(){
            
                document.querySelector('.alert').remove();
            }, 3000);
            

}
deleteContact(target) {

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }
}

clearFields(){

    document.getElementById('number').value = '';
    document.getElementById('name').value = '';

}

}

//Event Listening

document.getElementById('contact-form').addEventListener('submit',function(e){
    
    //Get form values
    
    const number = document.getElementById('number').value;
    const name = document.getElementById('name').value;
    
    //Instantiate contact
    const contact = new Contact(number, name);

    //Instantiate UI
    const ui = new UI();
    
    //Validate
    if(number === '' || name === '') {
    
        //Error alert
    
        ui.showAlert('please fill in all fields', 'error');
    }
    else{
    
    //Add Contact to list
    
    ui.addContactToList(contact);
    
    //show success
    
    ui.showAlert('Contact Added', 'success');
    
    // Clear Fields
    
    ui.clearFields();
       
    }
    
    e.preventDefault();
    })
    
    //Event listening for delete 
    document.getElementById('contact-list').addEventListener('click', function(e){

    //Instantiate UL
    const ui = new UI();

    // Delete Contact
    ui.deleteContact(e.target);
    
    //Show Message
    
    ui.showAlert('Contact Removed!', 'success');
    
    
    e.preventDefault();
    });

