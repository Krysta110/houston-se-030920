let walkUp, walkDown, walkLeft, walkRight, stop;

let createSteven = function () {
    let stevenImages = "./assets/red-character"

    let steven = document.createElement('img')
    steven.style.position = "absolute"
    steven.style.top = "150px"
    steven.style.left = "400px"
    steven.style.width = "30px"
    steven.src = `${stevenImages}/static.gif`

    document.body.append(steven)

    let direction = null;

    let move = function () {
        if (direction == 'left') {
            steven.style.left = parseFloat(steven.style.left) - 0.25 + 'px'
        }
        if (direction == 'right') {
            steven.style.left = parseFloat(steven.style.left) + 0.25 + 'px'
        }
        if (direction == 'up') {
            steven.style.top = parseFloat(steven.style.top) - 0.25 + 'px'
        }
        if (direction == 'down') {
            steven.style.top = parseFloat(steven.style.top) + 0.25 + 'px'
        }
    }

    setInterval(move, 60 / 1000)

    walkLeft = function () {
        direction = 'left'
        steven.src = `${stevenImages}/walkleft.gif`
    }

    walkUp = function () {
        direction = 'up'
        steven.src = `${stevenImages}/walkup.gif`
    }

    walkRight = function () {
        direction = 'right'
        steven.src = `${stevenImages}/walkright.gif`
    }

    walkDown = function () {
        direction = 'down'
        steven.src = `${stevenImages}/walkdown.gif`
    }

    stop = function () {
        direction = null
        steven.src = `${stevenImages}/static.gif`
    }
}