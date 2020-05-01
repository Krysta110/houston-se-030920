
// Gets the character's current information from the server 
//  to use when initially placing the character
let getCharacterData = async function() {
    let response = await fetch('http://localhost:3000/characterData')
    return await response.json()
}

// Sends the character's current information back to the server 
//  to be saved in the database 
let saveCharacterData = function (link) {
    fetch('http://localhost:3000/characterData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            x: link.image.style.left,
            y: link.image.style.top
        })
    })
}