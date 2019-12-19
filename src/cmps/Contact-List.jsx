import React from 'react'
import ContactPreview from './Contact-Preview'

export default class ContactList extends React.Component {

    render() {
        const { contacts } = this.props
        return (
                <ul className= "contact-list">
                    {contacts && contacts.map(contact => <ContactPreview contact={contact} key={contact._id} />)}
                </ul>
        )
    }
}