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

Ten seconds after the last input from the keyboard, Mizaru emails what has been typed. It is a Node.js script for a Raspberry Pi, and the README sets one up with Raspberry Pi OS Lite to log in on boot and start the script, with a Bluetooth keyboard paired to it. The script holds the text in memory until the pause, or until Control-C, then sends it through a Gmail account to that account's own address. The first line becomes the subject.

The name is that of the monkey that covers its eyes among the three wise monkeys, and the README's one-line summary begins with the word "Blindly". The first version also carried code to toggle the keyboard's Caps Lock through node-hid. That code was removed about two hours later, in a commit titled "Remove HID stuff, since it doesn't work."

Node.js and nodemailer. 2023.
