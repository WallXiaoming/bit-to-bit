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
let 指南针角度 = 0
radio.setGroup(0)
basic.forever(function () {
    指南针角度 = input.rotation(Rotation.Pitch)
    if (指南针角度 < 45) {
        radio.sendNumber(1)
    } else if (指南针角度 < 135) {
        radio.sendNumber(2)
    } else {
        radio.sendNumber(3)
    }
    basic.showNumber(指南针角度)
})
