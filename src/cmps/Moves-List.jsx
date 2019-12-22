import React from 'react'

export default class MovesList extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <ul>
                {this.props.moves.map(move => {
                    const at = new Date(move.at).toLocaleString()
                    return <li key={move.at}>
                        <p>Transfered {move.amount} BTC to {move.to} at {at}</p>
                    </li>
                })}
            </ul>
        )
    }
}