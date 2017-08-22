var twilio = require("twilio");

var accountSid = 'ACbee7cda09d1d49514c2b47f0a2bbc5f2'; // Your Account SID from www.twilio.com/console
var authToken = '9a5145f6e795c1911336d504e93eae4f';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);
var leadName = $("#firstNameContact").val().trim() + " " + $("#lastNameContact").val().trim();
var leadPhone = $("#phoneContact").val().trim();
var leadEmail = $("#emailContact").val().trim();
var leadInquiry = $("#reasonContact").val().trim();
var leadAddl = $("#addlContact").val().trim();

var textString = 
`You have a new lead!
Name: ${leadName}
Phone: ${leadPhone}
Email: ${leadEmail}
Reason for contact: ${leadInquiry}
Additional comments: ${leadAddl}`

client.messages.create({
    body: textString,
    to: '+13236202056',  // Text this number
    from: '+18182147591' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

module.exports = twilio;

