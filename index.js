const gpioUtils = require('./src/gpio2MotorsUtils')
const { initController } = require('./src/controllerUtils')

let controller = initController()

gpioUtils.allMotorsStop()

controller.onanalog = function (axis, value) {
    // axis is one of those 4: lStickX, lStickY, rStickY, rStickY
    // value is in [0, 255]. For the Y, 0 is max bottom and 255 is max top
    if (axis === 'lStickY') {
        gpioUtils.moveLeft(127 - value)
    } else if (axis === 'rStickY') {
        gpioUtils.moveRight(127 - value)
    }

    //console.log(axis, value)
}
