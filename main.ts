input.onButtonPressed(Button.A, function () {
    a = a + 1
})
let a = 0
a = 0
basic.forever(function () {
    if (a >= 10) {
        a = 0
    }
    basic.showNumber(a)
})
