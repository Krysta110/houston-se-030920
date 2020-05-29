import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function App(){
    let count = useSelector( state => state.count )
    return (
        <div>
            <h1>Counter: {count}</h1>
            <IncrementButton />
        </div>
    )
}

function IncrementButton(){
    let dispatch = useDispatch()
    return (

        <button onClick={() => dispatch({ type: "INCREMENT_COUNT" }) }>
            Increment
        </button>
    )
}