let allCharacters = []






let createCharacter = function (color, left, top, isPlayable = false) {
    
    let onStop = function(){}

    // Define a variable so we don't have to write this out EVERY time
    let IMAGE_ROOT = `./assets/${color}-character`

    // Declare `image` here so that it's in scope (available) inside the 
    //  rest of the file
    let image;

    // Declare `direction` here so that it's in scope (available) inside 
    //  the rest of the file
    let direction = null;

    // Creates an image to represent the character, adds it to the screen
    image = document.createElement('img')
    image.src = `${IMAGE_ROOT}/static.gif`
    image.style.position = "absolute"
    image.style.width = "30px"
    image.style.height = "45px"
    image.style.top = top
    image.style.left = left
    document.body.append(image)

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

        //  This sets the "depth"  of the image, so that things overlap 
        //  correctly
        image.style.zIndex = parseFloat(image.style.top) 
    }

    // Set an interval that re-positions the character 60 times a second
    setInterval(moveCharacterImage, 60 / 1000)

    // Define Some functions to change the `direction` our character should be
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
        onStop()
    }

    // An event listener to change which direction the character
    //  is walking on keypress
    let handleKeyDown = function (e) {
        if (e.repeat) return
        if (e.key == "ArrowLeft") {
            walkLeft()
        } else if (e.key == "ArrowRight") {
            walkRight()
        } else if (e.key == "ArrowUp") {
            walkUp()
        } else if (e.key == "ArrowDown") {
            walkDown()
        }
    }

    // An event listener to make the character stop
    //  when the user releases a key
    let handleKeyUp = function (e) {
        stop()
    }

    // Attach event listeners for keyboard events
    if(isPlayable){
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
    }

    let addEventListener = function(event, callback){
        if(event == 'stop'){
            onStop = callback
        }
    }

    // What's happening here?
    let character = {
        addEventListener: addEventListener,
        image: image,
        walkLeft: walkLeft,
        walkUp: walkUp,
        walkRight: walkRight,
        walkDown: walkDown,
        stop: stop,
    }

    allCharacters.push(character)

    return character
}