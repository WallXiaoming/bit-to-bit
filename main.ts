radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.setServoAngel(wuKong.ServoList.S0, 0)
        wuKong.setServoAngel(wuKong.ServoList.S1, 0)
        wuKong.setServoAngel(wuKong.ServoList.S2, 0)
        wuKong.setServoAngel(wuKong.ServoList.S4, 0)
    }
    if (receivedNumber == 2) {
        wuKong.setServoAngel(wuKong.ServoList.S0, 180)
        wuKong.setServoAngel(wuKong.ServoList.S1, 180)
        wuKong.setServoAngel(wuKong.ServoList.S2, 180)
        wuKong.setServoAngel(wuKong.ServoList.S4, 180)
    }
    if (receivedNumber == 3) {
        wuKong.setServoAngel(wuKong.ServoList.S0, 90)
        wuKong.setServoAngel(wuKong.ServoList.S1, 90)
        wuKong.setServoAngel(wuKong.ServoList.S2, 90)
        wuKong.setServoAngel(wuKong.ServoList.S4, 90)
    }
})
radio.setGroup(0)
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
