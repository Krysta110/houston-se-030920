import React from 'react'

export const KoalaCard = (props) => {
    return (
        <div style={cardStyles}>
            <h3>{props.name}</h3>
            <img src={props.image} style={{ width: '100%' }} />
        </div>
    )
}

const cardStyles = {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '25%',
    flex: 1,
    // float: 'left',
    margin: 10,
    padding: 5
}