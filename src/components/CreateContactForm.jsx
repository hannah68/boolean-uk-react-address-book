import { useState } from "react";
function CreateContactForm() {
  // [TODO] Write form handlers here and POST requests here...
  const [contactInfo, setContactInfo] = useState({
    firstName:"",
    lastName:"",
    blockContact:false,
    addressId:null
  })

  const [address, setAddress] = useState ({
    city:"",
    street:"",
    postCode:"",

  })
  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
  }
  const handleChangeAddress = (e) =>{
    const name = e.target.name
    const value = e.target.value
  }
  return (
    <form className="form-stack light-shadow center contact-form">
      <h1>Create Contact</h1>
      <label htmlFor="first-name-input">First Name:</label>
      <input 
        id="first-name-input" 
        name="firstName" 
        type="text" 
        value={contactInfo.firstName} 
        onChange={handleChange}/>
      <label htmlFor="last-name-input">Last Name:</label>
      <input 
        id="last-name-input" 
        name="lastName" 
        type="text" 
        value={contactInfo.lastName} 
        onChange={handleChange}/>
      <label htmlFor="street-input">Street:</label>
      <input 
        id="street-input" 
        name="street" 
        type="text" />
      <label htmlFor="city-input">City:</label>
      <input 
        id="city-input" 
        name="city" 
        type="text" />
      <label htmlFor="post-code-input">Post Code:</label>
      <input 
        id="post-code-input" 
        name="postCode" 
        type="text" />
      <div className="checkbox-section">
        <input 
          id="block-checkbox" 
          name="blockContact" 
          type="checkbox"
          value={contactInfo.blockContact} 
          onChange={handleChange} 
        />
        <label htmlFor="block-checkbox">Block</label>
      </div>
      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateContactForm;
