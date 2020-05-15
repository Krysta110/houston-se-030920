import React, { Component } from 'react';
export class TicketForm extends Component {

    state = {
        startingPoint: '',
        destination: '',
        price: ''
    }

    setStartingPoint = e => this.setState({ startingPoint: e.target.value })

    setDestination = e => this.setState({ destination: e.target.value })

    setPrice = e => this.setState({ price: e.target.value })

    handleSubmit = () => {
        let newTicket = {
            starting_point: this.state.startingPoint,
            destination: this.state.destination,
            price: this.state.price
        }
        this.props.changeTicketsArray(newTicket)
    }

    render() {
        return (
            <div>
                <div>
                    <label>Starting Point</label>
                    <input onChange={this.setStartingPoint} />
                </div>
                <div>
                    <label>Destination</label>
                    <input onChange={this.setDestination} />
                </div>
                <div>
                    <label>Price</label>
                    <input onChange={this.setPrice} />
                </div>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}