radio.onReceivedValue(function (name, value) {
    if ("M" == name) {
        if (value == 1) {
            robobit.go(RBDirection.Forward, speed)
            robobit.RBBias(RBRobotDirection.Left, 70)
        }
        if (value == 2) {
            robobit.go(RBDirection.Forward, speed)
            robobit.RBBias(RBRobotDirection.Right, 70)
        }
        if (value == 3) {
            robobit.go(RBDirection.Forward, speed)
            robobit.RBBias(RBRobotDirection.Right, 0)
        }
        if (value == 0) {
            robobit.stop(RBStopMode.Coast)
            robobit.RBBias(RBRobotDirection.Right, 0)
        }
    }
    if ("S" == name) {
        if (value / 16 < 90) {
            speed = value / 16
        }
    }
})
let speed = 0
robobit.select_model(RBModel.Mk1)
speed = 50
basic.forever(function () {
    led.plot(2, Math.round(robobit.sonar(RBPingUnit.Centimeters)))
})
