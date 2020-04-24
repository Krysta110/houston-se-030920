let createLink = function(){
    
    // Define a variable so we don't have to write this out EVERY time
    let IMAGE_ROOT = "./assets/green-character"

    // Declare `image` here so that it's in scope (available) inside the 
    //  rest of the file
    let image;

    // Declare `direction` here so that it's in scope (available) inside 
    //  the rest of the file
    let direction = null;

    // Creates an image to represent the character, adds it to the screen
    let createCharacterImage = function(characterData){
        image = document.createElement('img')
        image.src = `${IMAGE_ROOT}/static.gif`
        image.style.position = "absolute"
        image.style.width = "30px"
        image.style.top = characterData.y
        image.style.left = characterData.x
        document.body.append(image)
    }

    // Gets the character's information from the server, then 
    //  calls upon createCharacterImage to display the character
    let getCharacterData = function(){
        fetch('http://localhost:3000/characterData')
            .then(function(response){
                return response.json()
            })
            .then(function(characterData){
                createCharacterImage(characterData)
            })
    }

    // Sends the character's current information back to the server 
    //  to be saved in the database 
    let saveCharacterData = function(){
        fetch('http://localhost:3000/characterData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                x: image.style.left,
                y: image.style.top
            })
        })
    }

    // Some functions to change the `direction` our character should be
    //  moving. Also changes the src of the character's image, so that
    //  he always appears to be walking the same direction he's moving
    let walkLeft = function () {
        direction = 'left'
        image.src = `${IMAGE_ROOT}/walkleft.gif`
    }

    let walkUp = function () {
        direction = 'up'
        image.src = `${IMAGE_ROOT}/walkup.gif`
    }

    let walkRight = function () {
        direction = 'right'
        image.src = `${IMAGE_ROOT}/walkright.gif`
    }

    let walkDown = function () {
        direction = 'down'
        image.src = `${IMAGE_ROOT}/walkdown.gif`
    }

    let stop = function () {
        direction = null
        image.src = `${IMAGE_ROOT}/static.gif`
    }


    // A function to incrementally re-position the character based on the
    //  `direction` that he is currently moving
    let moveCharacterImage = function () {
        if (direction == 'left') {
            image.style.left = parseFloat(image.style.left) - 0.25 + 'px'
        }
        if (direction == 'right') {
            image.style.left = parseFloat(image.style.left) + 0.25 + 'px'
        }
        if (direction == 'up') {
            image.style.top = parseFloat(image.style.top) - 0.25 + 'px'
        }
        if (direction == 'down') {
            image.style.top = parseFloat(image.style.top) + 0.25 + 'px'
        }
    }

    // An event listener to change which direction the character
    //  is walking on keypress
    let handleKeyDown = function(e){
        if(e.repeat) return
        
        if(e.key == "ArrowLeft"){
            walkLeft()
        } else if( e.key == "ArrowRight"){
            walkRight()
        } else if( e.key == "ArrowUp"){
            walkUp()
        } else if( e.key == "ArrowDown"){
            walkDown()
        }
    }

    // An event listener to make the character stop
    //  when the user releases a key
    let handleKeyUp = function(e){
        stop()
        saveCharacterData() // <--- When the character stops moving, 
                            //          send his new position to the server
    }

    // Attach event listeners for keyboard events
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    // Set an interval that re-positions the character 60 times a second
    setInterval(moveCharacterImage, 60 / 1000)

    // Get the characterData, so that they can be displayed on the page
    getCharacterData()
}