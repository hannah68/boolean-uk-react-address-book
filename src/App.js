import { useState, useEffect } from "react";
import ContactsList from "./components/ContactsList";
import ContactView from "./components/ContactView";
import CreateContactForm from "./components/CreateContactForm";
import "./styles/styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [hideForm, setHideForm] = useState(true);
  // const [refresh, setRefresh] = useState(false);
  const [editContact, setEditContact] = useState(null);
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
      />
      <main>
        {!hideForm && <CreateContactForm 
          editContact={editContact}
          viewContact={viewContact}/>}

        {hideForm && viewContact && <ContactView 
          viewContact={viewContact}/>}
      </main>
    </>
  );
}
