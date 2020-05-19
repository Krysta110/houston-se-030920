import React from 'react'
import { KoalaCard } from './KoalaCard'

export const KoalaContainer = (props) => {
    return (
        <div style={{ display: 'flex'}}>
        {props.koalas.map(koala => (
            <KoalaCard
                name={koala.name}
                image={koala.image}
            />
        ))}
        </div>
    )
}