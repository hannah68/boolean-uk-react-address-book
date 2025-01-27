function ContactsList(props) {
  const { 
    contacts, 
    hideForm, 
    setHideForm, 
    setEditContact, 
    setViewContact, 
    isEdited, 
    setIsEdited, 
    isViewed, 
    setIsViewed} = props;

  const editContact = (contact) => {
    setEditContact(contact);
    setIsEdited(!isEdited);
  }

  const viewContact = (contact) => {
    setViewContact(contact);
    setIsViewed(!isViewed);
  }


  return (
    <aside className="contacts-section light-shadow">
      <header>
        <h2>Contacts</h2>
        <button
          onClick={() => setHideForm(!hideForm)}
          className="button new-contact-btn"
        >
          {hideForm ? "Create" : "Cancel"}
        </button>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName } = contact;

          return (
            <li key={index}>
              <h3>
                {firstName} {lastName}
              </h3>
              <button className="button grey" onClick={() => viewContact(contact)}>View</button>
              <button className="button blue" onClick={() => editContact(contact)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ContactsList;
