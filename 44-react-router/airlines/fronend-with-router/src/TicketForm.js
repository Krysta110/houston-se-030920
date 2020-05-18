import React, { useState } from 'react';

export function TicketForm(props) {

    let [newTicket, setNewTicketValues] = useState({
        starting_point: '',
        destination: '',
        price: ''
    })

    let setStartingPoint = e => setNewTicketValues({ ...newTicket, starting_point: e.target.value })

    let setDestination = e => setNewTicketValues({ ...newTicket, destination: e.target.value })

    let setPrice = e => setNewTicketValues({ ...newTicket, price: e.target.value })

    return (
        <div>
            <div>
                <label>Starting Point</label>
                <input onChange={setStartingPoint} />
            </div>
            <div>
                <label>Destination</label>
                <input onChange={setDestination} />
            </div>
            <div>
                <label>Price</label>
                <input onChange={setPrice} />
            </div>
            <button onClick={() => props.onSubmit(newTicket)}>
                Submit
            </button>
        </div>
    );

}