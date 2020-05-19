import React, { useState } from 'react'

export const KoalaCard = function(props){

    let [ likes, setLikes ] = useState(0)

    return (
        <div style={cardStyles}>
            <h3>{props.koala.name}</h3>
            <img src={props.koala.image} style={{ width: '100%' }} />
            <p>{likes}</p>
            <button onClick={() => setLikes(likes + 1)}>
                Like
            </button>
        </div>
    )
}

const cardStyles = {
    borderColor: 'black',
    borderWidth: 0.5,
    borderStyle: 'solid',
    flex: 1,
    margin: 10,
    padding: 5,
    minWidth: '200px'
}