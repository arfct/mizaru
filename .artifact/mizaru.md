---
title: Mizaru
date: 2023-05
category: product
tags:
  - hardware
links:
  source: https://github.com/arfct/mizaru
media: []
unconfirmed:
  - date
---

Mizaru is a Node.js script that collects keyboard input on a Raspberry Pi and emails it to the Pi's owner. The README sets up a Pi with Raspberry Pi OS Lite to log in and start the script on boot, with a Bluetooth keyboard paired to it. The script keeps the typed text in memory. After ten seconds without input, or on Control-C, it sends the text through a Gmail account to that account's own address. The first line becomes the subject.

It is named for Mizaru, the monkey that covers its eyes among the three wise monkeys. The first version included code that toggled Caps Lock on the keyboard through node-hid. That code was removed the same day because it did not work.

Node.js and nodemailer. 2023.
