let after = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000)
    })
}

let overlapping = function(character1, character2){
    if(character1 === character2){
        return false // A character can't overlap with itself!
    }

    let character1Left = parseFloat(character1.image.style.left)
    let character1Right = character1Left + parseFloat(character1.image.style.width)
    let character1Top = parseFloat(character1.image.style.top)
    let character1Bottom = character1Top + parseFloat(character1.image.style.height)

    let character2Left = parseFloat(character2.image.style.left)
    let character2Right = character2Left + parseFloat(character2.image.style.width)
    let character2Top = parseFloat(character2.image.style.top)
    let character2Bottom = character2Top + parseFloat(character2.image.style.height)

    if (character1Left < character2Right &&
        character1Right > character2Left &&
        character1Top < character2Bottom  &&
        character1Bottom  > character2Top ) {
        return true
     } else {
         return false
     }
}