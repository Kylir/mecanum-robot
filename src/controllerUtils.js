const ds = require('dualshock')

var list = ds.getDevices()

console.log('Devices:', list)
if (list.length < 1) {
    console.log('Could not find a controller!')
    process.exit()
}

//Get gamepad's device object:
var device = list[0]

//Open device, return gamepad object:
var gamepad = ds.open(device)

// , {
//     smoothAnalog: 10,
//     smoothMotion: 15,
//     joyDeadband: 4,
//     moveDeadband: 4,
// })

gamepad.onmotion = true
gamepad.onstatus = true

gamepad.onupdate = function (changed) {
    console.log(changed)
}
