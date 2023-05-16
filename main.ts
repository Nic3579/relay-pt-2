input.onButtonPressed(Button.A, function () {
    if (toggle1 == 0) {
        toggle1 = 1
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        toggle1 = 0
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (toggle2 == 0) {
        toggle2 = 1
    } else {
        toggle2 = 0
    }
})
let toggle2 = 0
let toggle1 = 0
toggle1 = 0
toggle2 = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && toggle2 == 1) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.clearScreen()
    }
})
