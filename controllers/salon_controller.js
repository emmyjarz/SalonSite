var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/products", (req, res) => {
  res.render("index", { data: "hello" });
});




router.get("/services", (req, res) => {
  res.render("services", { data: "hello" });
});

module.exports = router;