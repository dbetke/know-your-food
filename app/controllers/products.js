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

ProductController.showProducts = function(req, res){
    Product.find(function (err, products) {
      if (err) {
        res.send('bad news: '+err.message);
      }
      else{
        res.send(products);
      }
   });
};