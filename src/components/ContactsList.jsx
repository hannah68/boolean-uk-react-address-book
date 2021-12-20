function ContactsList(props) {
  const { contacts, hideForm, setHideForm, setEditContact, setViewContact} = props;

  const getContactId = (contact) => {
    // setHideForm(!hideForm);
    console.log('contact', contact)
    setEditContact(contact)
  }

  const viewContact = (contact) => {
    setViewContact(contact)
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
          const { firstName, lastName, address } = contact;

          return (
            <li key={index}>
              <h3>
                {firstName} {lastName}
              </h3>
              <button className="button grey" onClick={() => viewContact(contact)}>View</button>
              <button className="button blue" onClick={() => getContactId(contact)}>Edit</button>
              <p>
                {address.street},{address.postCode}
              </p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ContactsList;
