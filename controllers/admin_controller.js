var express = require("express");
var router = express.Router();
var db = require("../models");

// function staff(){

//     db.Staff.create({
//         name:"test1"
        
//     });
// }
// function service(){

//     db.Service.create({
//         name: "wash"
//     });
// }
// staff();void
// service();




router.get("/", (req, res)=>{
    res.render("index", {data: "hello"});
});

module.exports = router;