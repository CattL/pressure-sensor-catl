basic.clearScreen()
basic.forever(function () {
    let value = ""
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
    serial.writeValue(value, pins.analogReadPin(AnalogPin.P0))
})
