import React from 'react'
import { Link } from 'react-router-dom'
import bitcoinService from '../services/bitcoin.service'
import MovesList from '../cmps/Moves-List'
import userActions from '../stores/user/user.actions'
import { connect } from 'react-redux'


class Home extends React.Component {
    state = {
        rate: null,
    }
    async componentDidMount() {
        await this.props.getLoggedInUser()
        const rate = await bitcoinService.getRate()
        this.setState({ rate: rate.data })
    }

    render() {
        const { user } = this.props
        return (
            user && <>
                <h1>Hello {user.name}</h1>
                <h4>Coins : {user.coins}</h4>
                {this.state.rate && <h4>BTC Rate: {this.state.rate}</h4>}
                {user.moves.length > 0 && <MovesList moves={user.moves} />}
                <Link to="/contact">See Contacts</Link>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.loggedInUser
    }
}

const mapDispatchToProps = {
    getLoggedInUser: userActions.getLoggedInUser,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)