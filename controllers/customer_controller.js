var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", (req, res) => {
    res.render("index", { data: "hello" });
});
//create customer
router.post("/new", (req, res) => {
    var emailId;
    var addressId;
    var phoneId;
    db.Email.create({
        email: "tes@gemai.com"
    }).then((newEmail) => {
        emailId = newEmail.id;
        return db.Address.create({
            address1: "req.body.address1",
            address2: "req.body.address2",
            city: "req.body.city",
            state: "req.body.state",
            zip:11111
            //  req.body.zip
        });

    }).then((newAddress) => {
        addressId = newAddress.id;
        return db.Phone.create({
            mobile: "7777777777",
            // req.body.mobile,
            home: "7777777777"
            // "req.body.home"
        });
    }).then((newPhone) => {
        phoneId = newPhone.id;

        console.log('adding new customer', 'email:', emailId,
        'address:', addressId,
        'phone:', phoneId)
        return db.Customer.create({
            name: "req.body.name",
            lastname: "req.body.lastname",
            password: "req.body.password",
            gender: "req.body.gender",
            balance: 21.22,
            lastvisit: new Date(),
            photo: "req.body.photo",
            comment: "req.body.comment",
            EmailId: emailId,
            AddressId: addressId,
            PhoneId: phoneId
        }, {
                include: [db.Address
                    , db.Email, db.Phone
                ]
            });
    }).then(data => {
        console.log(data);
        res.json(data)
    }).catch((error) => {
        res.json(error);
    })
})


module.exports = router;



