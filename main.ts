function randomposition () {
    pong = randint(0, 2)
    if (pong == 0) {
        Bold.change(LedSpriteProperty.Y, -1)
    }
}
let pong = 0
let Bold: game.LedSprite = null
Bold = game.createSprite(2, 2)
basic.forever(function () {
    Bold.move(1)
    basic.pause(1000)
    if (Bold.get(LedSpriteProperty.X) == 4 || Bold.get(LedSpriteProperty.X) == 0) {
        Bold.turn(Direction.Right, 180)
    }
    randomposition()
})
