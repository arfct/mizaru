---
title: Mizaru
date: 2023-05
category: product
links:
  source: https://github.com/arfct/mizaru
media:
  - src: email.png
    caption: An email sent by the script, run here on a Mac with its mail delivered to MailDev, a local test inbox, in place of Gmail
    alt: A mail window titled MailDev holding one message, Notes on the Analytical Engine, from Mizaru at notes@example.com to the same address, with its three lines of plain text shown on the right
unconfirmed:
  - date
---

Ten seconds after the last input from the keyboard, Mizaru emails what has been typed. It is a Node.js script for a Raspberry Pi, and the README sets one up with Raspberry Pi OS Lite to log in on boot and start the script, with a Bluetooth keyboard paired to it. The script holds the text in memory until the pause, or until Control-C, then sends it through a Gmail account to that account's own address. The first line becomes the subject. In the image, three typed lines have arrived under the title "Notes on the Analytical Engine".

The first version, from May 2023, also carried code to toggle the keyboard's Caps Lock through node-hid, which was removed the same day. In the README a see-no-evil monkey emoji precedes the name, and the one-line summary under it begins with the word "Blindly".

Node.js and nodemailer. 2023.
