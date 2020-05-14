import React, { Component } from 'react';
import { TicketListItem } from './TicketListItem';

export function TicketList(props){
    return (
        <ul>
            {props.tickets.map( ticket => (
                <TicketListItem
                    ticket={ticket}
                />
            ))}
        </ul>
    )
}