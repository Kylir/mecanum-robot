const gpioUtils = require('./src/gpioUtils')
const { initController } = require('./src/controllerUtils')

/*
gpioUtils.moveLeft(50);
setTimeout(gpioUtils.moveLeft, 2000, -50);
setTimeout(gpioUtils.moveRight, 4000, 50);
setTimeout(gpioUtils.moveRight, 6000, -50);
setTimeout(gpioUtils.stop, 8000);
*/
let controller = initController()
controller.onanalog = function (axis, value) {
    console.log(axis, value)
}

//gpioUtils.allMotorsForward(30)
//setTimeout(gpioUtils.allMotorsStop, 2000)
