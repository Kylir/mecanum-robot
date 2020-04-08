# mecanum-robot
Code for a mecanum robot programmed in NodeJS

## Install NodeJS

I'll assume you have a working Raspberry Pi with Raspbian installed and you can ssh to it.

First we need NodeJS. There are two ways (at least!) you can install Node.
I'm **not** going to add the repository and install it using the package manager.
Instead I'm going to download the binaries and copy them in my `/usr/local/` directory.

There are two ARM versions of NodeJS and you need to find the one for your Raspberry Pi.

Execute `uname -a`. It should tell you if your processor is an arm7 or an arm8.
In my case, for my Pi v3 A+, the command is returning: `armv7l GNU/Linux`

Go to NodeJS website and find the list of downloads.
I found it [here](https://nodejs.org/en/download/) last time I checked.
Find the link to the ARM version you need and copy the link.
Use this link in an ssh terminal to download the archive.

I did:

```sh
mkdir Downloads
cd Downloads
wget wget https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-armv7l.tar.xz
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

## Clone the repository

This one is quite easy. You need `git` on your raspberry and then you clone the repository.

### Git




