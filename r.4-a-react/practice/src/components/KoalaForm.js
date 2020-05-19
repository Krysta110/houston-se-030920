import React from 'react'

export const KoalaForm = (props) => {
    return (
        <div>
            <div>
                <label>Name</label>
                <input 
                    value={props.newKoalaName}
                    onChange={props.setNewKoalaName}
                />
            </div>
            <div>
                <label>Image</label>
                <input
                    value={props.newKoalaImage}
                    onChange={props.setNewKoalaImage}
                />
            </div>
            <button onClick={() => props.onSubmit()}>
                Submit
            </button>
        </div>
    )
}