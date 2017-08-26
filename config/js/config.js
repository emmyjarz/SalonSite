var Config = {
    accountSid: process.env.twilio_Sid, // Your Account SID from www.twilio.com/console
    authToken: process.env.twilio_Token,   // Your Auth Token from www.twilio.com/console
    salonNumber: '+' + process.env.twilio_Phone_1,
    twilioNumber: '+' + process.env.twilio_Phone_2
};
    
module.exports = Config;