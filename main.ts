function visszaeses () {
    if (tikk == ugrasTikk + ugrasHossz) {
        ugras += -1
        y += 1
        microTrex.set(LedSpriteProperty.Y, y)
    }
}
function talajrajz () {
    for (let index = 0; index <= 4; index++) {
        talaj1 = game.createSprite(index, 4)
    }
}
input.onButtonPressed(Button.AB, function () {
    ugrasTikk = tikk
    ugras += 1
    y += 0 - ugras
    microTrex.set(LedSpriteProperty.Y, y)
})
let talaj1: game.LedSprite = null
let tikk = 0
let ugrasTikk = 0
let ugrasHossz = 0
let ugras = 0
let microTrex: game.LedSprite = null
let y = 0
let x = 0
y = 3
microTrex = game.createSprite(x, y)
ugras = 0
ugrasHossz = 2
ugrasTikk = -10
basic.forever(function () {
    talajrajz()
    tikk += 1
    basic.pause(500)
    visszaeses()
})
