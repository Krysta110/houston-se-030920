import React, { useState, useEffect } from 'react'
import { DragonCard } from './DragonCard.js'

// Rules of Hooks:
// 1.  Hooks can only be called inside of the body of a function component
// 2.  You cannot conditionally invoke hooks
// 3.  Hooks always start with `use`

// useState
// Returns an array of 2 elements
//  * Your state
//  * A function you can use to change state


export function CardContainer(props) {

    let [dragons, setDragons] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/dragons')
            .then(function (response) {
                return response.json()
            })
            .then((dragonsArray) => {
                setDragons(dragonsArray)
            })
    }, [])


    let moveDragon = (clickedDragon) => {

        let index = dragons.indexOf(clickedDragon)
        setDragons([
            ...dragons.slice(0, index),
            { ...clickedDragon, atWar: clickedDragon.atWar == true ? false : true },
            ...dragons.slice(index + 1),
        ])

        fetch(`http://localhost:3000/dragons/${clickedDragon.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                atWar: clickedDragon.atWar == true ? false : true
            })
        })
    }

    if(dragons == null) return <h1>Loading Dragons...</h1>

    let dragonsAtWar = dragons.filter(dragon => dragon.atWar == true)
    let dragonsAtHome = dragons.filter(dragon => dragon.atWar == false)

    return (
        <ul>
            <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#00ffd8' }}>
                <h1>Home</h1>
                {dragonsAtHome.map(dragon =>
                    (
                        <DragonCard
                            key={dragon.id}
                            dragon={dragon}
                            moveDragon={moveDragon}
                        />
                    )
                )}
            </div>
            <div style={{ float: 'left', width: '40%', padding: '5%', backgroundColor: '#f98181' }}>
                <h1>War</h1>
                {dragonsAtWar.map(dragon =>
                    (
                        <DragonCard
                            key={dragon.id}
                            dragon={dragon}
                            moveDragon={moveDragon}
                        />
                    )
                )}
            </div>
        </ul>
    )
}