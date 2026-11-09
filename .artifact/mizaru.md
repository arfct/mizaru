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

Mizaru records keyboard input without a screen. A Raspberry Pi, set up to log in and start listening on boot, holds what a paired Bluetooth keyboard types in memory and does not echo it. After ten seconds without input, or on Control-C, it emails the text to the owner's inbox. The first line becomes the subject.

It is named for the first of the three wise monkeys. An earlier attempt at making the Pi act as a keyboard was removed from the code because it did not work.

Node.js and nodemailer on a Raspberry Pi. 2023.
