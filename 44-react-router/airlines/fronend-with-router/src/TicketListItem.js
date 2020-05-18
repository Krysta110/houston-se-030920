import React, { Component } from 'react';

export function TicketListItem(props){
    const { ticket } = props
    return (
        <li>
            ({ticket.price}) {ticket.starting_point}-{ticket.destination}
        </li>
    )
}