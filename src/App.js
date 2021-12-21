import { useState, useEffect } from "react";
import ContactsList from "./components/ContactsList";
import ContactView from "./components/ContactView";
import CreateContactForm from "./components/CreateContactForm";
import EditContactForm from "./components/EditContactForm";
import "./styles/styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [hideForm, setHideForm] = useState(true);
  const [editContact, setEditContact] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const [isViewed, setIsViewed] = useState(false);
  const [viewContact, setViewContact] = useState(null);
  
  useEffect(() => {
    const fetchContact = async() => {
      try{
        const res = await fetch('http://localhost:3030/contacts')
        const data = await res.json();
        console.log(data);
        setContacts(data)
      }
      catch(error){
        console.log('error', error);
      }
    }
    fetchContact();
  }, [])

  return (
    <>
      <ContactsList
        contacts={contacts}
        hideForm={hideForm}
        setHideForm={setHideForm}
        setEditContact={setEditContact}
        setViewContact={setViewContact}
        setIsEdited={setIsEdited}
        isEdited={isEdited}
        setIsViewed={setIsViewed}
        isViewed={isViewed}
      />
      <main>
        {!hideForm && !isViewed && !isEdited && <CreateContactForm 
          editContact={editContact}
          />}

        {isViewed && <ContactView 
          viewContact={viewContact}/>}

        {isEdited && !isViewed && <EditContactForm editContact={editContact}/>}
      </main>
    </>
  );
}
