const ds = require('dualshock')

function initController() {
    const list = ds.getDevices()

    console.log('Devices:', list)
    if (list.length < 1) {
        console.log('Could not find a controller!')
        return null
    }

    //Open device, return gamepad object:
    let controller = ds.open(list[0], {
        smoothAnalog: 10,
        smoothMotion: 15,
        joyDeadband: 4,
        moveDeadband: 4,
    })

    return controller
}

module.exports = { initController }
