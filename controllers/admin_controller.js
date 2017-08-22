var express = require("express");
var router = express.Router();
var db = require("../models");
const SALON_NAME = "Blvd6 Salon";
// show all product
router.get("/product", (req, res) => {
    db.Product.findAll().then(data => {
        res.render("adminProduct", { product: data });
    });
});
//add product in database
router.post("/product/new", (req, res) => {
    // console.log(req.body)
    db.Product.create(
        {
            brand: req.body.brand,
            name: req.body.name,
            description: req.body.description,
            size: req.body.size,
            price: req.body.price,
            stock_quantity: req.body.stock_quantity,
            cost: req.body.cost,
            vendor: req.body.vendor,
            photo: req.body.photo
        }
    ).then(data => {
        res.redirect("/admin/product")
    });
});
//edit product - show update product
router.get("/product/:id/edit", (req, res) => {
    console.log(req.params.id)
    db.Product.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.render("adminProduct", { editproduct: data })
    });
});
//update - update database
router.put("/product/:id", (req, res) => {
    db.Product.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.redirect("/admin/product")
    }
)
})
//delete product in database
router.delete("/product/:id", (req, res) => {
    // console.log(req.params.id);
    db.Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.redirect("/admin/product")
    });
});

//service
router.get("/services", (req, res) => {
    db.Service.findAll().then(data => {
        res.render("adminservices", { services: data });
    });
});
//add service in database
router.post("/services/new", (req, res) => {
    // console.log(req.body)
    db.Service.create(
        {
            name: req.body.name,
            duration: req.body.duration,
            member_price: req.body.member_price,
            nonmember_price: req.body.nonmember_price,
            cost: req.body.cost,
            photo: req.body.photo,
            comment: req.body.comment,
        }
    ).then(data => {
        res.redirect("/admin/services")
    });
});
//edit service - show update service
router.get("/services/:id/edit", (req, res) => {
    console.log(req.params.id)
    db.Service.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.render("adminServices", { editservices: data })
    });
});
//update - update database
router.put("/services/:id", (req, res) => {
    db.Service.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.redirect("/admin/services")
    })
})
//delete service in database
router.delete("/services/:id", (req, res) => {
    // console.log(req.params.id);
    db.Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.redirect("/admin/services")
    });
});

//saloninfo
//edit
router.get("/salon/edit", (req, res) => {
    console.log(req.params.id)
    db.Salon.findOne({
        where: {
           name: SALON_NAME
    },
        include: [db.Address
            , db.Email, db.Phone
        ]
    }).then(data => {
        res.render("adminSalonEdit", { editSalon: data })
    });
});
//update - update database
router.put("/salon/update", (req, res) => {
    db.Salon.update(req.body, {
        where: {
            name: SALON_NAME
        },
        include: [db.Address
            , db.Email, db.Phone
        ]
    }).then(data => {
        res.redirect("/")
    })
})

//manage staff
// show all staff
router.get("/staff", (req, res) => {
    db.Staff.findAll({
        include: [db.Address
            , db.Email, db.Phone
        ]
    }).then(data => {
        // console.log(data)
        res.render("adminStaff", { staff: data });
    });
});
//add staff in database
router.post("/staff/new", (req, res) => {
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
            zip: 11111
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
        return db.Staff.create({
            name: "req.body.name",
            lastname: "req.body.lastname",
            bio: "req.body.bio",
            station: "req.body.station",
            day: "req.body.day",
            hour: "req.body.hour",
            emergency_contact_name: "req.body.emergency_contact_name",
            emergency_contact_phone: "req.body.emergency_contact_phone",
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
        res.redirect("/admin/staff")
        // console.log(data);
        // res.json(data)
    }).catch((error) => {
        res.json(error);
    });
});
//edit staff - show update product
router.get("/staff/:id/edit", (req, res) => {
    console.log(req.params.id)
    db.Staff.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.render("adminStaff", { editStaff: data })
    });
});
//update - update database
router.put("/Staff/:id", (req, res) => {
    db.Staff.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.redirect("/admin/staff")
    });
})
//delete staff in database
router.delete("/Staff/:id", (req, res) => {
    // console.log(req.params.id);
    db.Staff.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.redirect("/admin/staff")
    });
});


module.exports = router;