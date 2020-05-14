
import React, { Component } from 'react';

export function AirlineListItem(props) {
    const { airline, showDetails } = props
    return (
        <li>
            {airline.name}
            <button onClick={() => showDetails(airline)}>
                Details
            </button>
        </li>
    );
}