import React, { useState, useEffect } from 'react'
import { AirlineListItem } from './AirlineListItem'

export function AirlineList(props) {

    const [airlines, setAirlines] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/airlines')
            .then(res => res.json())
            .then(airlines => setAirlines(airlines))
    }, [])

    if (airlines === null) return <h1>Loading airlines...</h1>

    return (
        <div>
            <h1>Airline List</h1>
            <ul>
                {airlines.map(airline => (
                    <AirlineListItem
                        key={airline.id}
                        airline={airline}
                        showDetails={props.showDetails}
                    />
                ))}
            </ul>
        </div>
    )
}