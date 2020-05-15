import React, { Component } from 'react';
import { AirlineTitle } from './AirlineTitle';
import { TicketList } from './TicketList';
import { TicketForm } from './TicketForm';

export function AirlineDetail(props) {
    return (
        <div>
            <AirlineTitle 
                airlineName={props.name}
            />
            <TicketList 
                tickets={props.tickets}
            />
            <TicketForm 
                changeTicketsArray={props.changeTicketsArray}
            />
        </div>
    );
}
