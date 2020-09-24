input.onButtonPressed(Button.A, function () {
    spiller1.change(LedSpriteProperty.Y, -1)
})
function randomposition () {
    pong = randint(0, 2)
    if (pong == 0) {
        if (Bold.get(LedSpriteProperty.Y) == 0) {
            Bold.set(LedSpriteProperty.Y, 4)
        } else {
            Bold.change(LedSpriteProperty.Y, -1)
        }
    }
}
input.onButtonPressed(Button.B, function () {
	
})
let pong = 0
let spiller1: game.LedSprite = null
let Bold: game.LedSprite = null
Bold = game.createSprite(2, 2)
spiller1 = game.createSprite(0, 2)
let spiller2 = game.createSprite(4, 2)
basic.forever(function () {
    Bold.move(1)
    basic.pause(500)
    if (Bold.get(LedSpriteProperty.X) == 4 || Bold.get(LedSpriteProperty.X) == 0) {
        Bold.turn(Direction.Right, 180)
    }
    randomposition()
})
