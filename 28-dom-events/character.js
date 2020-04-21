let characterImages = "./assets/green-character"

let character = document.createElement('img')
character.style.position = "absolute"
character.style.top = "150px"
character.style.left = "200px"
character.style.width = "30px"
character.src = `${characterImages}/static.gif`

document.body.append(character)

let direction = null;
let speed = 0.25

let move = function () {
    if (direction == 'left') {
        character.style.left = parseFloat(character.style.left) - speed + 'px'
    }
    if (direction == 'right') {
        character.style.left = parseFloat(character.style.left) + speed + 'px'
    }
    if (direction == 'up') {
        character.style.top = parseFloat(character.style.top) - speed + 'px'
    }
    if (direction == 'down') {
        character.style.top = parseFloat(character.style.top) + speed + 'px'
    }
}

setInterval(move, 60 / 1000)

let walkLeft = function () {
    direction = 'left'
    character.src = `${characterImages}/walkleft.gif`
}

let walkUp = function () {
    direction = 'up'
    character.src = `${characterImages}/walkup.gif`
}

let walkRight = function () {
    direction = 'right'
    character.src = `${characterImages}/walkright.gif`
}

let walkDown = function () {
    direction = 'down'
    character.src = `${characterImages}/walkdown.gif`
}

let stop = function () {
    direction = null
    character.src = `${characterImages}/static.gif`
}


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

let handleKeyUp = function(e){
    stop()
}

document.addEventListener('keydown', handleKeyDown)
document.addEventListener('keyup', handleKeyUp)

// document.addEventListener('keydown', function(){
//     console.log('I ran')
// })