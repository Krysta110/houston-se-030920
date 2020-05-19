import React from 'react'

export const SearchBar = (props) => {
    return ( // Pass it down here 
        <div> 
            <label>Search:</label>
            <input 
                onChange={(e) => props.search(e)}
                styles={searchBarStyles} 
                type="text" 
            />
        </div>
    )
}

const searchBarStyles = {
    width: '100%'
}