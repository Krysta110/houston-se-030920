import React from 'react'
import { KoalaCard } from './KoalaCard'

export const KoalaContainer = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            {props.koalas.map( koala => (
                <KoalaCard 
                    key={koala.id}
                    koala={koala} 
                />
            ))}
        </div>
    )
}