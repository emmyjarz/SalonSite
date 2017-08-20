var express = require("express");
var router = express.Router();
var db = require("../models");
//display
router.get("/", (req, res) => {
  //show salon info on the about page
  db.Salon.findOne({
    where: {
      id: 1
    },
    include: [db.Address
      , db.Email, db.Phone
    ]
  }).then(function (data) {
    console.log(data);
    console.log(data.dataValues.name);
    console.log(data.dataValues.description);
    console.log(data.Address.dataValues.address1);
    console.log(data.Address.dataValues.city);
    console.log(data.Address.dataValues.state);
    console.log(data.Address.dataValues.zip);
    console.log(data.Phone.dataValues.mobile);
    console.log(data.Email.dataValues.email);

  });
  // res.end();
  res.render("index", { about: data });
//show product on the product page









});





// router.get("/services", (req, res) => {
//   res.render("services", { data: "hello" });
// });

// router.get("/contactus", (req, res) => {
//   res.render("contactus", {data: "hello"}); 
// });

module.exports = router;