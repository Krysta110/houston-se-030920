let rock = document.createElement('img')
rock.style.position = "absolute"
rock.style.width = "30px"
rock.src = "./assets/stone/static.gif"

document.body.append(rock)

const handleSubmit = function(e){
    e.preventDefault()
    let speedInput = document.querySelector('.speed-input')
    speed = parseFloat(speedInput.value)
}

let form = document.querySelector('.settings-form')
form.addEventListener('submit', handleSubmit)



let childDiv = document.querySelector('.child-div')
let parentDiv = document.querySelector('.parent-div')

// Bubbling Events - Go from child to parent (inside -> out)
// childDiv.addEventListener('click', function(){
//     console.log('Child was clicked')
// })

// parentDiv.addEventListener('click', function(){
//     console.log('Parent was clicked')
// })


// Capturing Events - Go from the parent to the child (outside -> in)
childDiv.addEventListener('click', function(){
    console.log('Child was clicked')
}, true)

parentDiv.addEventListener('click', function(){
    console.log('Parent was clicked')
}, true)