var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", (req, res) => {
  res.render("index", { data: "hello" });
});

module.exports = router;





// var express = require("express");
// var router = express.Router();
// // Import the model (burger.js) to use its database functions.
// var db = require("../models");

// // Create all our routes and set up logic within those routes where required.
// // Get all data for display
// // router.get("/", function(req, res) {
// //     db.salons.findAll({}).then(function(salon) {
// //       res.render("index", {salon});
// //     });
// // });

// // router.post("/", function(req, res) {
// // // Insert a new customer
// //   db.customers.create({
// //     customer_name: req.body.customer_name
// //   }).then(function(result) {
// //     // Insert a new burger
// //     db.burgers.create({
// //       burger_name: req.body.name,
// //       devoured: req.body.devoured,
// //       customerId: result.id
// //     }).then(function() {
// //       res.redirect("/");
// //     });
// //   });
// // });

// // //Update a burger by Id
// // router.put("/:id", function(req, res) {
// //   var condition = "id = " + req.params.id;

// //   db.burgers.update({
// //     devoured: req.body.devoured,
// //     customer_name: req.body.customer_name
// //   }, {
// //     where: {
// //       id: req.params.id
// //     }
// //   })
// //   .then(function(result) {
// //     res.redirect("/");
// //   }).catch(function(err) {
// //     res.status(400).json(err);
// //   });
// // });

// // Export routes for server.js to use.
// module.exports = router;