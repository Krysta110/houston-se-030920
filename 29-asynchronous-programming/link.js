let createLink = function(){
    let linkImages = "./assets/green-character"

    let link = document.createElement('img')
    link.style.position = "absolute"
    link.style.top = "150px"
    link.style.left = "200px"
    link.style.width = "30px"
    link.src = `${linkImages}/static.gif`

    document.body.append(link)

    let direction = null;

    let move = function () {
        if (direction == 'left') {
            link.style.left = parseFloat(link.style.left) - 0.25 + 'px'
        }
        if (direction == 'right') {
            link.style.left = parseFloat(link.style.left) + 0.25 + 'px'
        }
        if (direction == 'up') {
            link.style.top = parseFloat(link.style.top) - 0.25 + 'px'
        }
        if (direction == 'down') {
            link.style.top = parseFloat(link.style.top) + 0.25 + 'px'
        }
    }

    setInterval(move, 60 / 1000)

    let walkLeft = function () {
        direction = 'left'
        link.src = `${linkImages}/walkleft.gif`
    }

    let walkUp = function () {
        direction = 'up'
        link.src = `${linkImages}/walkup.gif`
    }

    let walkRight = function () {
        direction = 'right'
        link.src = `${linkImages}/walkright.gif`
    }

    let walkDown = function () {
        direction = 'down'
        link.src = `${linkImages}/walkdown.gif`
    }

    let stop = function () {
        direction = null
        link.src = `${linkImages}/static.gif`
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

}