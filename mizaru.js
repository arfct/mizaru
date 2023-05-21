const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Get a password from https://myaccount.google.com/apppasswords and edit config.json
const configData = fs.readFileSync(path.join(__dirname, 'config.json'));

const config = JSON.parse(configData);

if (!config.email.length) {
  console.log("Please edit config.json and add your email address")
  process.exit();
  // let transporter = nodemailer.createTransport({
  //   sendmail: true,
  //   newline: 'unix',
  //   path: '/usr/sbin/sendmail'
  // });
}

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email,
    pass: config.pass 
  }
});

// create reusable transporter object using the default SMTP transport


const emailData = {
  from: `"Mizaru" <${config.email}>`,
  to: config.email,
};

let inputBuffer = '';
let timeoutId;

process.stdin.setEncoding('utf8');
console.log("Listening for text input. Ctrl + Enter to send.");
console.log("Using:", config.email)

process.stdin.on('data', (input) => {
  console.log("Got input", input)
  clearTimeout(timeoutId);
  inputBuffer += input;
  timeoutId = setTimeout(sendEmail, 10000); // 10 seconds
});

process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key.nameee);
  if (key && key.ctrl && key.name == 'enter') { // Ctrl + Enter
    sendEmail();
  }
});

process.on('SIGINT', function() {
  console.log('Ctrl+C pressed, sending email...');
  sendEmail();
});





function sendEmail() {
  console.log("Sending email...", inputBuffer)

  if (!inputBuffer) return;
  emailData.subject = inputBuffer.split('\n').shift(); // first line is the subject
  emailData.text = inputBuffer; // join all lines of text
  transporter.sendMail(emailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // after sending the email, clear the inputBuffer and reset the timeout
    inputBuffer = '';
    clearTimeout(timeoutId);
  });
}


if (0) {
  const HID = require('node-hid');

  const devices = HID.devices();
  const keyboard = devices.find((device) => {
    return device.usagePage === 1 && device.usage === 6;
  });

  if (keyboard) {
    console.log(`Vendor ID: ${keyboard.vendorId}`);
    console.log(`Product ID: ${keyboard.productId}`);

    let device = keyboard;
  // const CAPS_LOCK_USAGE_ID = 0x39;
  // const device = new HID.HID(0x05ac, 0x026e);
  let capsLockOn = false;

  setInterval(() => {
    capsLockOn = !capsLockOn;
    device.sendFeatureReport([0, 0, capsLockOn ? 2 : 0, 0, 0, 0, 0, 0]);
  }, 500);

  } else {
    console.log('No keyboard found');
  }

}
