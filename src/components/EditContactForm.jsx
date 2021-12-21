import { useState, useEffect } from "react";

const EditContactForm = (props) => {
    const {editContact} = props;
    const [submit, setSubmit] = useState(false);

    const [newContactInfo, setNewContactInfo] = useState({
        firstName: editContact.firstName,
        lastName: editContact.lastName,
        blockContact: editContact.blockContact,
        addressId: editContact.addressId
    })
    
    const [newAddress, setNewAddress] = useState ({
        city: editContact.address.city,
        street: editContact.address.street,
        postCode: editContact.address.postCode,
    });

    useEffect(async() => {
        if(submit){
            await fetch(`http://localhost:3030/addresses/${editContact.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newAddress)
            })
        }
       setSubmit(false);
    }, [newAddress, submit])

    useEffect(async() => {
        await fetch(`http://localhost:3030/contacts/${editContact.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newContactInfo)
        })
    }, [newContactInfo])


     // refresh page====================
    const refreshPage = () => {
        window.location.reload()
    }

    const handleContactChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        console.log(value);
        setNewContactInfo({...newContactInfo, [name] : value});
    }
    
    const handleAddressChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setNewAddress({...newAddress, [name] : value});
    }

    const handleCheckboxChange = (e) => {
        const name = e.target.name
        const checked = e.target.checked
        setNewContactInfo({...newContactInfo, [name]: checked});
    }

    const submitEditHandler = (e) => {
        e.preventDefault();
        setSubmit(true);
        refreshPage();
    }

    return (
        <form className="form-stack light-shadow center contact-form" onSubmit={submitEditHandler}>
            <h1>Edit contact</h1>
            <label htmlFor="first-name-input">First Name:</label>
            <input 
                id="first-name-input" 
                name="firstName"
                type="text" 
                value={newContactInfo.firstName}
                onChange={handleContactChange}
            />
            <label htmlFor="last-name-input">Last Name:</label>
            <input 
                id="last-name-input" 
                name="lastName" 
                type="text" 
                value={newContactInfo.lastName}
                onChange={handleContactChange}
            />
            <label htmlFor="street-input">Street:</label>
            <input 
                id="street-input" 
                name="street" 
                type="text"
                value={newAddress.street}
                onChange={handleAddressChange}
            />
            <label htmlFor="city-input">City:</label>
            <input 
                id="city-input" 
                name="city" 
                type="text"
                value={newAddress.city}
                onChange={handleAddressChange}
            />
            <label htmlFor="post-code-input">Post Code:</label>
            <input 
                id="post-code-input" 
                name="postCode" 
                type="text" 
                value={newAddress.postCode}
                onChange={handleAddressChange}
            />
            <div className="checkbox-section">
            <input 
                id="block-checkbox" 
                name="blockContact" 
                type="checkbox"
                checked={newContactInfo.blockContact}
                onChange={handleCheckboxChange}
                />
            <label htmlFor="block-checkbox">Block</label>
            </div>
            <div className="actions-section">
              <button className="button blue" type="submit">Edit</button>

              <button 
              className="button blue" 
              >Delete</button>
            </div>
      </form>
    )
}

export default EditContactForm
