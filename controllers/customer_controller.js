var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", (req, res) => {
    res.render("index", { data: "hello" });
});
//create customer
router.post("/", (req, res) => {

    // db.Email.create({
    //     email: req.body.email
    // });
    // db.Address.create({
    //     address1: req.body.address1,
    //     address2: req.body.address2,
    //     city: req.body.city,
    //     state: req.body.state,
    //     zip: req.body.zip
    // });
    // db.Phone.create({
    //     mobile:req.body.mobile,
    //     home:req.body.home
    // });
    db.Customer.create({
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password,
        gender: req.body.gender,
        balance: req.body.balance,
        lastvisit: new Date(),
        photo: req.body.photo,
        comment: req.body.comment,
        Email: {
            email: req.body.email
        },
        Address: {
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        },
        Phone: {
            mobile: req.body.mobile,
            home: req.body.home
        }
    },{
            include: [db.Address
                , db.Email, db.Phone
            ]
    }),then(data =>{
        res.end()
    })
})


module.exports = router;



