# 🙈 Mizaru
*Blindly capture keyboard input and send it to your email.*


## Setup:

### Install Raspberry Pi OS:
- https://www.raspberrypi.com/software/
- (Other -> Pi OS Lite)
- Pre-configure SSH access, and WiFi setup if you can.

### SSH into the device
```
ssh user@raspberrypi.local
```

### Install git and node
```
sudo apt update
```
```
sudo apt install git nodejs npm
```

### Clone https://github.com/sub-pixel/mizaru.git
```
git clone https://github.com/sub-pixel/mizaru.git
```
Install dependencies:
```
cd mizaru; npm install
```
Make sure it works: 
```
node mizaru.js
```

### Edit config.json
- Add a gmail and password to `config.js`
- You can get a password from https://myaccount.google.com/apppasswords if you have 2factor on.
    `test`
    
### Connect Bluetooth keyboard (optional):
1. Open a terminal window on your Raspberry Pi.
2. Type `bluetoothctl` and press Enter to start the Bluetooth control utility.
3. Type `power on` to turn on the Bluetooth adapter.
4. Type `agent on` to enable the agent that will handle the pairing process.
5. Type `scan on` to start scanning for Bluetooth devices.
6. Put your keyboard in pairing mode by pressing the pairing button or following the manufacturer’s instructions.
7. Wait for your keyboard to appear in the list of available devices. Once it appears, note its MAC address.
8. Type `pair MAC_ADDRESS` (replace MAC_ADDRESS with the actual MAC address of your keyboard) to initiate the pairing process.
9. Follow the on-screen instructions to complete the pairing process.
10. Type `trust MAC_ADDRESS` to mark the keyboard as a trusted device.
11. Type `connect MAC_ADDRESS` to connect to the keyboard.

### Set up auto-login
To have your Raspberry Pi automatically login a user on boot, you can modify the ﻿getty service configuration. Here are the steps:

  1.	Open a terminal window on your Raspberry Pi.
  2.	Edit the getty service configuration file by running the command `sudo nano /etc/systemd/system/getty@tty1.service.d/autologin.conf`
  3.	Add the following lines to the file: 
```
[Service]
ExecStart=
ExecStart=-/sbin/agetty --autologin USERNAME --noclear %I $TERM
```
  4. Save the file by pressing Ctrl+X, then Y, then Enter.
  5. Reload the systemd daemon by running the command `sudo systemctl daemon-reload`.
  6. Enable the getty service by running the command `sudo systemctl enable getty@tty1.service`.
  Now when your Raspberry Pi boots up, it will automatically login the specified user. Note that this will bypass the login prompt, so use with caution and only on trusted devices.

### Setup mizaru to auto-start

1.	Open a terminal window on your Raspberry Pi.
2.	Edit the .bashrc file for the user you want to automatically start the program for by running the command ﻿nano ~/.bashrc.
3.	Scroll to the bottom of the file and add the command to start the program. For example, if you want to start the ﻿chromium-browser program, you would add the following line:
chromium-browser
4.	Save the file by pressing Ctrl+X, then Y, then Enter.
5.	Restart your Raspberry Pi to apply the changes.
