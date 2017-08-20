var express = require("express");
var router = express.Router();
var db = require("../models");


// show all product
router.get("/product", (req, res)=>{
    db.Product.findAll().then(data =>{
        res.render("adminProduct", {product:data});
    });
});

//insert product in database
router.post("/product/add", (req, res) =>{
    // console.log(req.body)
    db.Product.create(
        {
            brand:req.body.brand,
            name:req.body.name,
            description:req.body.description,
            size:req.body.size,
            price:req.body.price,
            stock_quantity:req.body.stock_quantity,
            cost:req.body.cost,
            vendor:req.body.vendor,
            photo:req.body.photo
        }
    ).then(data =>{

        res.redirect("/admin/product")
    });
});
//update product - show update product
router.get("/product/edit/:id", (req, res) =>{
    console.log(req.params.id)
        db.Product.findOne({
      
        where:{
            id: req.params.id
        }
    }).then(data =>{
        res.render("adminProduct", {editproduct:data})
    });
});
//update - update database
router.put("/product/edit/:id", (req, res)=>{
   db.Product.update(req.body,{
       where:{
           id:req.params.id
       }
   }).then(data =>{
       res.redirect("/admin/product")
   })
})




//delete product in database
router.delete("/product/delete/:id", (req, res)=>{
    // console.log(req.params.id);
    db.Product.destroy({
        where:{
            id: req.params.id
        }
    }).then(data =>{
        res.redirect("/admin/product")
    });
});



module.exports = router;