import React from 'react'
import userService from '../services/user.service'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import contactActions from '../stores/contact/contact.actions'

class ContactDetails extends React.Component {
    state = {
        amount: null
    }

    updateAmount(ev) {
        const { value } = ev.target
        this.setState({ amount: value })
    }

    async removeContact(id) {
        if (window.confirm('Are you sure you wanna delete?')) {
            await this.props.removeContact(id)
            this.props.history.push('/contact')
        }
    }

    async componentDidMount() {
        const _id = this.props.match.params.id
        await this.props.loadCurrContact(_id)
    }

    async transferBTC(ev, contact, amount) {
        ev.preventDefault()
        const user = await userService.addMove(contact, amount)
        if (!user) return
        alert('successfully transfered the BTC\'s')
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.props
        return (
            contact &&
            <section className="contact-details">
                <h1>{contact.name}'s details:</h1>
                <p>Email : {contact.email}</p>
                <p>Phone Number : {contact.phone}</p>
                <div className="contact-actions">
                    <Link to={`/contact/edit/${contact._id}`}>Edit Contact</Link>
                    <button onClick={() => this.removeContact(contact._id)}>Remove Contact</button>
                </div>
                <form onSubmit={(ev) => this.transferBTC(ev, contact, this.state.amount)}>
                    <label>Insert Amount to transfer
                        <input onChange={(ev) => this.updateAmount(ev)} type="num" placeholder="BTC" />
                    </label>
                    <button>Transfer</button>
                </form>
                <img src={`https://robohash.org/${contact._id}/?set=set5`} alt="" />
                <Link to="/contact">← Back to contacts</Link>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact
    }
}

const mapDispatchToProps = {
    loadCurrContact: contactActions.loadCurrContact,
    removeContact: contactActions.removeContact,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails)