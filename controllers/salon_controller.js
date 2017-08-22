var express = require("express");
var router = express.Router();
var db = require("../models");

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
    console.log(data.dataValues.name);
    console.log(data.dataValues.description);
    console.log(data.Address.dataValues.address1);
    console.log(data.Address.dataValues.address2);
    console.log(data.Address.dataValues.city);
    console.log(data.Address.dataValues.state);
    console.log(data.Address.dataValues.zip);
    console.log(data.Phone.dataValues.mobile);
    console.log(data.Email.dataValues.email);
    res.render("contactus", { contactus: data });

    });
});
//show product on the product page
router.get("/", (req, res) => {
  res.render("index", { data: hello });
});

router.get("/products", (req, res) => {
  res.render("products", { data: "hello" });
});

router.get("/services", (req, res) => {
  db.Service.findAll().then(data => {
    console.log(data);
    res.render("services", { services: data });
  })
});



module.exports = router;