import React from 'react'
import ContactList from '../cmps/Contact-List'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import contactActions from '../stores/contact/contact.actions'


function ContactFilter({ handleFilter }) {
    return (
        <input type="text" onChange={(ev) => handleFilter(ev.target.value)} />
    )
}

class ContactPage extends React.Component {
    state = {
        filter: null,
    }

    handleFilter = (value) => {
        this.setState({ filter: value })
    }

    async componentDidMount() {
        this.props.loadContacts()
    }

    render() {
        const { filter } = this.state
        const { contacts } = this.props
        let contactsToShow
        if (!filter) contactsToShow = contacts
        else contactsToShow = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase())
        })
        return (
            <>
                <h1>contacts</h1>
                <div className="filter">
                    Search Contact:  <ContactFilter handleFilter={this.handleFilter} />
                </div>
                <Link className="add-link" to="/contact/edit/">Add Contact</Link>
                {contacts && <ContactList contacts={contactsToShow} />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contact.contacts
    }
}

const mapDispatchToProps = {
    loadContacts: contactActions.loadContacts,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage)