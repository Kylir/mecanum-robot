const gpioUtils = require("./src/gpioUtils");

gpioUtils.moveLeftForward(100);

setTimeout(gpioUtils.stop, 1000);
