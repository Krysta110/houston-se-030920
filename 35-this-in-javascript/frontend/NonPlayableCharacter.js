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

}