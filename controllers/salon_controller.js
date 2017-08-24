var express = require("express");
var router = express.Router();
var db = require("../models");

var Twilio = require('twilio');
var config = require('../public/assets/js/config.js');
var client = new Twilio(config.accountSid, config.authToken);
const SALON_NAME = "Blvd6 Salon";

//display
router.get("/about", (req, res) => {
  //show salon info on the about page
  db.Salon.findOne({
    where: {
      name: SALON_NAME
    },
    include: [db.Address
      , db.Email, db.Phone
    ]
  }).then(function (data) {
    // console.log(data);
    // console.log(data.dataValues.name);
    // console.log(data.dataValues.description);
    // console.log(data.Address.dataValues.address1);
    // console.log(data.Address.dataValues.address2);
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
      name: SALON_NAME
    },
    include: [db.Address
      , db.Email, db.Phone
    ]
  }).then( data=> {
    // console.log(data);
    // console.log(data.dataValues.name);
    // console.log(data.dataValues.description);
    // console.log(data.Address.dataValues.address1);
    // console.log(data.Address.dataValues.address2);
    // console.log(data.Address.dataValues.city);
    // console.log(data.Address.dataValues.state);
    // console.log(data.Address.dataValues.zip);
    // console.log(data.Phone.dataValues.mobile);
    // console.log(data.Email.dataValues.email);
    res.render("contactus", { contactus: data });

    });
});


router.post("/leads", (req, res) => {
var textString = 
`You have a new lead -
Name: ${req.body.firstNameContact}
Phone: ${req.body.phoneContact}
Email: ${req.body.emailContact}
Reason for contact: ${req.body.reasonContact}
Additional comments: ${req.body.addlContact}`;

client.messages.create({
    to: 'config.salonNumber',  // Text this number
    from: 'config.twilioNumber', // From a valid Twilio number
    body: textString
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


//show product brand on the product page
router.get("/products", (req, res) => {
  db.Product.findAll({
    attributes:["brand","photo"],
    group:"brand"
  }).then(data =>{
    console.log(data);
    
    //  console.log(data[0].dataValues.brand);
    res.render("products", { productBrands: data });
  })

});

// show products in the brand
router.get("/products/:brand", (req, res)=>{
  db.Product.findAll({
    where:{
      brand:req.params.brand
    } 
  }).then(data =>{
    // console.log(data)
    res.render("products", {products: data});
  });
});
//show staff
router.get("/staff", (req, res)=>{
  db.Staff.findAll({
    include: [db.Address
      , db.Email, db.Phone
    ]
  }).then(data=>{
    console.log(data);
    res.render("staff", {staff:data});
  })
})

router.get("/", (req, res) => {
  res.render("index", { data: "hello" });
});
//show services
router.get("/services", (req, res) => {
  db.Service.findAll().then(data => {
    // console.log(data);
    res.render("services", { services: data });
  })
});




module.exports = router;