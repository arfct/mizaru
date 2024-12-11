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
    pass: config.password
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
console.log("\nMIZARU:\nListening for text input. Control-C to send.");
console.log("Sending to ", config.email)

process.stdin.on('data', (input) => {
  clearTimeout(timeoutId);
  inputBuffer += input;
  timeoutId = setTimeout(sendEmail, 10000); // 10 seconds
});

process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key.name);
  if (key && key.ctrl && key.name == 'enter') { // Ctrl + Enter
    sendEmail();
  }
});

process.on('SIGINT', function() {
  console.log('Ctrl+C pressed, sending email...');
  sendEmail();
});

function sendEmail() {
  console.log("Sending text:\n", inputBuffer)

  if (!inputBuffer) return;
  let text = inputBuffer.trim()
  emailData.subject = text.split('\n').shift(); // first line is the subject
  emailData.text = text; // join all lines of text
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
