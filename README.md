# mecanum-robot

Code for a robot programmed in NodeJS.

The code is divided into several utils:

-   One to receive the input from the Dualshock controller
-   One for the GPIO, to talk to the motor driver

## TL;DR

-   Install PiGPIO: `sudo apt install pigpio`
-   Install NodeJS (See the Annexes below)
-   Install Git
-   Clone the repo: `git clone https://github.com/Kylir/mecanum-robot.git`
-   Install the dependencies: `npm install`

## Controller

We are using the library [Dualshock](https://github.com/Pecacheu/dualshock) version 3.1.1.
(The latest version is only working on Windows.)

The controller library is providing an event listener called `onupdate` that is called when something is pressed or move on the controller.

## GPIO

To send orders to the motor driver we are using a NodeJS wrapper around a C library called PiGpio. You need both to be able to

PiGpio

sudo apt-get install pigpio

## Annexes

### Install NodeJS

I'll assume you have a working Raspberry Pi with Raspbian installed and you can ssh to it.

First we need NodeJS. There are two ways (at least!) you can install Node.
I'm **not** going to add the repository and install it using the package manager.
Instead I'm going to download the binaries and copy them in my `/usr/local/` directory.

There are several ARM versions of NodeJS and you need to find the one for your Raspberry Pi.

Execute `uname -a`. It should tell you if your processor is an arm7 or an arm8.
In my case, for my Pi v3 A+, the command is returning: `armv7l GNU/Linux`.
For a Pi Zero W, I had to use the armv6l version.

Go to NodeJS website and find the list of downloads.
I found it [here](https://nodejs.org/en/download/) last time I checked.
Find the link to the ARM version you need and copy the link.
Use this link in an ssh terminal to download the archive.

This is what I did:

```sh
mkdir Downloads
cd Downloads
wget https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-armv7l.tar.xz
```

Unzip the archive and check that it's working by calling the `node` binary:

```sh
tar xf node-v12.16.1-linux-armv7l.tar.xz
cd node-v12.16.1-linux-armv7l/bin
node -v
```

The last command returned: `v12.16.1`. A good start!

Now if we want to have `node` and `npm` on the path do the following:

```sh
cd ~/Downloads/node-v12.16.1-linux-armv7l/
sudo cp -R * /usr/local/
```

We are good to procede to the next step!

### Clone the repository

You need `git` on your raspberry and then you clone the repository.

To install git do:

```sh
sudo apt install git
```

Then clone the repository:

```
git clone
```
