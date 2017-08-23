var express = require("express");
var router = express.Router();
var db = require("../models");
var Twilio = require('twilio');
var config = require('../config');
var client = new Twilio(config.accountSid, config.authToken);


//display
router.get("/about", (req, res) => {
  //show salon info on the about page
  db.Salon.findOne({
    where: {
      name: "Blvd6 Salon"
    },
    include: [db.Address
      , db.Email, db.Phone
    ]
  }).then(function (data) {
    console.log(data);
    // console.log(data.dataValues.name);
    // console.log(data.dataValues.description);
    // console.log(data.Address.dataValues.address1);
    // console.log(data.Address.dataValues.city);
    // console.log(data.Address.dataValues.state);
    // console.log(data.Address.dataValues.zip);
    // console.log(data.Phone.dataValues.mobile);
    // console.log(data.Email.dataValues.email);

    res.render("about", { about: data });

  });
});
//show contactus
router.get("/contactus", (req, res) => {
  db.Salon.findOne({
    where: {
      name: "Blvd6 Salon"
    },
    include: [db.Address
      , db.Email, db.Phone
    ]
  }).then(function (data) {
    // console.log(data);
    /*console.log(data.dataValues.name);
    console.log(data.dataValues.description);
    console.log(data.Address.dataValues.address1);
    console.log(data.Address.dataValues.address2);
    console.log(data.Address.dataValues.city);
    console.log(data.Address.dataValues.state);
    console.log(data.Address.dataValues.zip);
    console.log(data.Phone.dataValues.mobile);
    console.log(data.Email.dataValues.email);*/
    res.render("contactus", { contactus: data });

    });
});
//show product on the product page
router.get("/", (req, res) => {
  res.render("index", { data: hello });
});

router.post("/leads", (req, res) => {
  var textString = 
`You have a new lead -
Name: ${req.body.firstNameContact}
Phone: ${req.body.phoneContact}
Email: ${req.body.emailContact}
Reason for contact: ${reasonContact}
Additional comments: ${addlContact}`

client.messages.create({
    to: 'config.salonNumber',  // Text this number
    from: 'config.twilioNumber' // From a valid Twilio number
    body: textString,
})
.then(() => {
          // Otherwise, respond with 200 OK
          response.status(200).send('Lead notification was successfully sent.');
        })
        .catch((err) => {
          console.error(err);
          response.status(500).send();
        })
    });

router.get("/products", (req, res) => {

	db.Product.findAll({
		where: {
			brand: req.body.brand
		},
		attributes: ['name', 'size', 'price']
	}).then(function(data) {
		console.log(data);
		res.render("index", { data: "hello" });
	});  	

});

router.get("/services", (req, res) => {
  db.Service.findAll().then(data => {
    console.log(data);
    res.render("services", { services: data });
  })
});



module.exports = router;