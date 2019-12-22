import React from 'react'
import { Link } from 'react-router-dom'

export default class ContactPreview extends React.Component {


    render() {
        const { contact } = this.props
        return (

            <li className="contact">
                <Link to={`/contact/${contact._id}`} key={contact._id}>
                    <img src={`https://robohash.org/${contact._id}/?set=set5`} alt="" />
                    <div className="contact-Info">
                        <h3>{contact.name}</h3>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.phone}</p>
                    </div>
                </Link>
            </li>
        )
    }
}   