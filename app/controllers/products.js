var Product = require('../models/product');

var ProductController = { };

ProductController.save = function(req, res)  {
    var product = req.product;
    product.save(function(err)  {
	    if(err) {
    	    res.send('bad news: '+err.message);
  	    }
    	else  {
    	    res.send('your product was succesfully saved to the database');
  	    }
    });
};

ProductController.showAllProducts = function(req, res){
    Product.find(function (err, products) {
      if (err) {
        res.send('bad news: '+err.message);
      }
      else{
        res.send(products);
      }
   });
};

ProductController.findProductByBrand = function(req, res){
  var brandname = req.params.brandname;  

   //TODO: case sensitive. need to work on this
    Product.find({ brandname: brandname }, function (err, products) {
      if (err) {
        res.send('bad news: '+err.message);
      }
      else{
        res.send(products);
      }
    });
};

ProductController.findProductByName = function(req, res){
  var productname = req.params.productname;  

    //TODO: requires exact full match and is case sensitive.  need to work on this.
    Product.find({ productname: productname }, function (err, products) {
      if (err) {
        res.send('bad news: '+err.message);
      }
      else{
        res.send(products);
      }
    });
};

module.exports = ProductController;