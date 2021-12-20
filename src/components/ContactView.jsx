import React from 'react'

const ContactView = (props) => {
    const {viewContact} = props;
    
    return (
        <article className="center light-shadow address-card">
            <h1>{viewContact.firstName} {viewContact.lastName}</h1>
            <section>
                <h2>Address</h2>
                <p>{viewContact.address.street}</p>
                <p>{viewContact.address.city}</p>
                <p>{viewContact.address.postCode}</p>
            </section>
        </article>
    )
}

export default ContactView
