---
title: Mizaru
date: 2023-05
category: product
tags:
  - hardware
  - security
  - open-source
links:
  source: https://github.com/arfct/mizaru
media: []
unconfirmed:
  - date
---

See no evil, taken literally. Mizaru captures keyboard input blind: a Raspberry Pi, set up to log in and start listening on boot, holds what a paired Bluetooth keyboard types in memory without echoing a keystroke. After ten seconds of silence, or on Control-C, it mails the lot to your own inbox. The first line becomes the subject.

Named for the first of the three wise monkeys. An earlier attempt at acting as a keyboard itself was removed from the code because it didn't work.

Node.js and nodemailer on a Raspberry Pi. 2023.
