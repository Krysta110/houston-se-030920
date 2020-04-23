let createLink = function(){
    let linkImages = "./assets/green-character"

    // Make HTTP Request
    // method: GET
    // path: /characterData
    // we expect to get back: 
    //   {
    //     "id": 1,
    //     "name": "Link",
    //     "x": 100,
    //     "y": 100
    //   }

    // HTTP Request:
    //  url/action => address
    //  method GET | POST | DELETE | PATCH
    //  body => whats inside the envelope
    //  headers => postage

    let link = document.createElement('img')

    fetch('http://localhost:3000/characterData', {
        method: 'GET' // <-- This is the default, so defining it is optional
        // body: 
        // headers: 
    }).then(function(response){
        return response.json()
    })
    .then(function(characterData){
        console.log(characterData)
        link.style.top = characterData.y
        link.style.left = characterData.x
    })

    link.style.position = "absolute"
   
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
        
        fetch('http://localhost:3000/characterData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                x: link.style.left,
                y: link.style.top
            })
        })
            
        // .then(function(response){
        //     return response.json()
        // })
        // .then(function(){
        //    // ?
        // })
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

}