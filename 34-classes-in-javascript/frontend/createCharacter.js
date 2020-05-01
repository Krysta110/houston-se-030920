let allCharacters = []

// Classes
//  - Blueprints for objects

// Object (instance)
//  - Functionality and variables (data & behavior)

// Instance Methods

// Class Methods

// Inheritance


// Functional Programming Languages 
//  - Still generally use object


class Character {

    static all = []

    static isOverlaping(character1, character2){
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

    constructor(color, left, top, isPlayable = false){
        this.IMAGE_ROOT = `./assets/${color}-character`
        this.direction = null;
        let image = document.createElement('img')
        image.src = `${this.IMAGE_ROOT}/static.gif`
        image.style.position = "absolute"
        image.style.width = "30px"
        image.style.height = "45px"
        image.style.top = top
        image.style.left = left
        document.body.append(image)

        this.image = image

        Character.all.push(this)
    
        // Set an interval that re-positions the character 60 times a second
        setInterval(this.moveImage, 60 / 1000)

    }

    moveImage() {
        let image = this.image
        let direction = this.direction
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

    walkLeft(){
        // let { image, direction } = this;
        let image = this.image
        let direction = this.direction

        direction = 'left'
        image.src = `${this.IMAGE_ROOT}/walkleft.gif`
    }

    walkUp(){
        this.direction = 'up'
        this.image.src = `${this.IMAGE_ROOT}/walkup.gif`
    }

    walkRight(){
        this.direction = 'right'
        this.image.src = `${this.IMAGE_ROOT}/walkright.gif`
    }

    walkDown(){
        this.direction = 'down'
        this.image.src = `${this.IMAGE_ROOT}/walkdown.gif`
    }

     stop(){
        this.direction = null
        this.image.src = `${this.IMAGE_ROOT}/static.gif`
    }

}