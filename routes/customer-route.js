var db = require("../models");
module.exports = function(app){
    app.get("/", function(req,res){
       
        db.Customer.findAll({}).then(
            res.render("index", {data: data})
        )
    })
}