var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", (req, res)=>{
    res.render("index", {data: "hello"});
});

module.exports = router;