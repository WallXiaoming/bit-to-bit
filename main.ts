radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.mecanumRun(wuKong.RunList.Front, 35)
    }
    if (receivedNumber == 2) {
        wuKong.mecanumStop()
    }
    if (receivedNumber == 3) {
        wuKong.mecanumSpin(wuKong.TurnList.Left, 20)
    }
})
radio.setGroup(0)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    }
})
