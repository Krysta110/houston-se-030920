class PlayableCharacter extends Character {

    constructor(color, left, top) {
        super(color, left, top)
        document.addEventListener('keydown', this.handleKeyDown)
        document.addEventListener('keyup', this.handleKeyUp)
    }

    handleKeyUp = (e) => {
        this.stop()
    }

    handleKeyDown = (e) => {
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

}