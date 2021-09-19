radio.onReceivedNumber(function (receivedNumber) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(receivedNumber)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
