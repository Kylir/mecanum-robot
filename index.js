const gpioUtils = require("./src/gpioUtils");

gpioUtils.moveLeftForward(200);

setTimeout(gpioUtils.stop, 2000);
