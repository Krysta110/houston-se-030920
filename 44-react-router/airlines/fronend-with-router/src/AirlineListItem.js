
import React from 'react';
import { useHistory } from 'react-router'

export function AirlineListItem(props) {
    const history = useHistory()
    const { airline } = props
    return (
        <li>
            {airline.name}
            <button onClick={() => history.push(`/airlines/${airline.id}`)}>
                Details
            </button>
        </li>
    );
}