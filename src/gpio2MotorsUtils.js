const Gpio = require('pigpio').Gpio

// Motor A - Left track
const ain1 = new Gpio(22, { mode: Gpio.OUTPUT })
const ain2 = new Gpio(27, { mode: Gpio.OUTPUT })
const pwma = new Gpio(17, { mode: Gpio.OUTPUT })
// Motor B - right track
const bin1 = new Gpio(18, { mode: Gpio.OUTPUT })
const bin2 = new Gpio(23, { mode: Gpio.OUTPUT })
const pwmb = new Gpio(24, { mode: Gpio.OUTPUT })

function allMotorsForward(pwm) {
    ain1.digitalWrite(1)
    ain2.digitalWrite(0)
    pwma.pwmWrite(pwm)
    bin1.digitalWrite(1)
    bin2.digitalWrite(0)
    pwmb.pwmWrite(pwm)
}

function allMotorsStop() {
    pwma.pwmWrite(0)
    ain1.digitalWrite(0)
    ain2.digitalWrite(0)
    pwmb.pwmWrite(0)
    bin1.digitalWrite(0)
    bin2.digitalWrite(0)
}

// Primitives to stop the robot
function stopLeft() {
    pwma.pwmWrite(0)
    ain1.digitalWrite(0)
    ain2.digitalWrite(0)
}

function stopRight() {
    pwmb.pwmWrite(0)
    bin1.digitalWrite(0)
    bin2.digitalWrite(0)
}

function stop() {
    stopLeft()
    stopRight()
}

// Move LEFT
function moveLeftForward(pwm) {
    ain1.digitalWrite(1)
    ain2.digitalWrite(0)
    pwma.pwmWrite(pwm)
}

function moveLeftBackward(pwm) {
    ain1.digitalWrite(0)
    ain2.digitalWrite(1)
    pwma.pwmWrite(pwm)
}

/**
 * Set the left track movement.
 * If pwm is positive it'll go forward.
 * If pwm is negative it'll go backward.
 * @param {number} pwm the amout of pwm
 */
function moveLeft(pwm, multiplier) {
    let multip = multiplier || 1
    if (pwm === 0) {
        stopLeft()
    } else if (pwm > 0) {
        moveLeftForward(pwm * multip)
    } else {
        moveLeftBackward(-pwm * multip)
    }
}

// Move RIGHT
function moveRightForward(pwm) {
    bin1.digitalWrite(1)
    bin2.digitalWrite(0)
    pwmb.pwmWrite(pwm)
}

function moveRightBackward(pwm) {
    bin1.digitalWrite(0)
    bin2.digitalWrite(1)
    pwmb.pwmWrite(pwm)
}

/**
 * Set the left track movement.
 * If pwm is positive it'll go forward.
 * If pwm is negative it'll go backward.
 * @param {number} pwm the amout of pwm
 */
function moveRight(pwm, multiplier) {
    let multip = multiplier || 1
    if (pwm === 0) {
        stopRight()
    } else if (pwm > 0) {
        moveRightForward(pwm * multip
    } else {
        moveRightBackward(-pwm * multip)
    }
}

module.exports = {
    allMotorsForward,
    allMotorsStop,
    moveLeft,
    moveLeftForward,
    moveLeftBackward,
    moveRight,
    moveRightForward,
    moveRightBackward,
    stopLeft,
    stopRight,
    stop,
}
