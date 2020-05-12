import React from 'react'
import { dragons } from './dragons.js'
import { DragonCard } from './DragonCard.js'

export function CardContainer(){
    return (
        <ul>
            {dragons.map( dragon => 
                (
                    <DragonCard 
                        key={dragon.id}
                        name={dragon.name}
                        description={dragon.description}
                        atWar={dragon.atWar}
                        image={dragon.image}
                    />
                )
            )}
        </ul>
    )
}  