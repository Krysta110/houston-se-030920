
class Link extends Character {

    constructor(color, left, top) {
        super(color, left, top)

        // An event listener to change which direction the character
        //  is walking on keypress
        let handleKeyDown = function (e) {
            if (e.repeat) return
            if (e.key == "ArrowLeft") {
                this.walkLeft()
            } else if (e.key == "ArrowRight") {
                this.walkRight()
            } else if (e.key == "ArrowUp") {
                this.walkUp()
            } else if (e.key == "ArrowDown") {
                this.walkDown()
            }
        }

        // An event listener to make the character stop
        //  when the user releases a key
        let handleKeyUp = function (e) {
            this.stop()
        }

        // Attach event listeners for keyboard events
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
    }

}

class NonPlayableCharacter extends Character {

    constructor(color, left, top) {
        super(color, left, top)
        this.walkAround()
    }

    async walkAround() {
        while (true) {
            this.walkRight()
            await after(5)
            this.walkDown()
            await after(5)
            this.walkLeft()
            await after(5)
            this.walkUp()
            await after(5)
        }
    }

    walkLeft() {
        // Super lets us call `Character`'s
        // version of the method
        super.walkLeft()
        console.log('in here')
    }

}