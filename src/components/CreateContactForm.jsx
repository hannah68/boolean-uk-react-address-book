import { useState, useEffect } from "react";
function CreateContactForm(props) {
  const [submit, setSubmit] = useState(false);
  // const {refresh, setRefresh} = props;
  const {editContact} = props;

  console.log(editContact)

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
  });

  // use effect for post Address===================
  useEffect(() => {
    if(submit){
      console.log('submit', submit);
      postAddress()
    }
    setSubmit(false)
  }, [submit, address])


  // useEffect for post ContactInfo==============
  useEffect(() => {
    if(contactInfo.addressId === null) return;
    postContactInfo();
    resetForm();
    refreshPage();
  }, [contactInfo])


  // refresh page====================
  const refreshPage = () => {
    window.location.reload()
  }


  // fetch post contact================
  const postContactInfo = () => {
    try{
      fetch('http://localhost:3030/contacts', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactInfo)
      })
    }
    catch(error){
      console.log(error)
    }
  }

  // post fetch address==================
  const postAddress = () => {
    try{
      fetch('http://localhost:3030/addresses', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(address)
      })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        setContactInfo({...contactInfo, addressId: data.id})
      })
    }
    catch(error){
      console.log(error);
    }
  }

  // reset form===================
  const resetForm = () => {
    contactInfo.firstName = '';
    contactInfo.lastName = '';
    contactInfo.blockContact = false;
    contactInfo.addressId = null;

    address.city = '';
    address.street =  '';
    address.postCode= '';
  }

  // submit handler=================
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
  }

  // handle change inputs=============
  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setContactInfo({...contactInfo, [name] : value});
  }

  // handle change address=============
  const handleChangeAddress = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setAddress({...address, [name] : value});
  }

  // handle change blockcontact checkbox=============
  const handleCheckboxChange = (e) => {
    const name = e.target.name
    const checked = e.target.checked
    setContactInfo({ ...contactInfo, [name]: checked});
  }

  return (
    <form className="form-stack light-shadow center contact-form" onSubmit={submitHandler}>
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
        type="text"
        value={address.street} 
        onChange={handleChangeAddress}/>
      <label htmlFor="city-input">City:</label>
      <input 
        id="city-input" 
        name="city" 
        type="text"
        value={address.city} 
        onChange={handleChangeAddress}
        />
      <label htmlFor="post-code-input">Post Code:</label>
      <input 
        id="post-code-input" 
        name="postCode" 
        type="text"
        value={address.postCode} 
        onChange={handleChangeAddress}
        />
      <div className="checkbox-section">
        <input 
          id="block-checkbox" 
          name="blockContact" 
          type="checkbox"
          value={handleCheckboxChange.blockContact} 
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
