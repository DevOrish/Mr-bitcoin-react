import React from 'react'
import userActions from '../stores/user/user.actions'
import { connect } from 'react-redux'


class Login extends React.Component {
    state = {
        name: ''
    }
    async componentDidMount() {

    }

    updateName = (ev) => {
        const { value } = ev.target
        this.setState({ name: value })
    }

    login = async (ev) => {
        ev.preventDefault()
        const { name } = this.state
        var user;
        try {
            user = await this.props.checkLogin(name)            
        } catch (err) {
            if (window.confirm('No such user. Would you like to create this user?')) {
                user = await this.props.signUp(name)                
            }
        }        
        if (user) this.props.history.push('/home')
    }

    render() {
        return (
            <>
                <h1>Login / Signup</h1>
                <img className='bitcoin-img' src={require("../assets/img/bitcoin.png")} alt="bitcoin"/>
                <form onSubmit={(ev) => this.login(ev)}>
                    <label>Name:
                   <input onChange={(ev) => this.updateName(ev)} type="text" placeholder="Enter name" />
                    </label>
                    <button>Login</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = {
    checkLogin: userActions.checkLogin,
    signUp: userActions.signUp,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)