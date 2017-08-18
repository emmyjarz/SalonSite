var twilio = require("twilio");

var accountSid = 'ACbee7cda09d1d49514c2b47f0a2bbc5f2'; // Your Account SID from www.twilio.com/console
var authToken = '9a5145f6e795c1911336d504e93eae4f';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+13236202056',  // Text this number
    from: '+18182147591' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

module.exports = twilio;