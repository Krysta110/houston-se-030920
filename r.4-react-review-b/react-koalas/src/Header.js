import React from 'react'

export const Header = (props) => {
    return (
        <div>
            <label>Search:</label>
            <input 
                onChange={(e) => props.onSearch(e.target.value)} 
            />
        </div>
    )
}