var Product = require('../models/product');

var ProductController = { };

ProductController.save = function(req, res)  {
    var brandname = req.params.brandname.toUpperCase();
    var brandname_stripped = req.params.brandname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from brand name  
    var productname = req.params.productname.toUpperCase();
    var productname_stripped = req.params.productname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from product name
    var ingredients = req.params.ingredients.toLowerCase();
    var ingredients_stripped = req.params.ingredients.toLowerCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from ingredients
    res.send("Brand name: " + brandname + "\nBrand name stripped: " + brandname_stripped + "\nProduct name: " + productname + "\nProduct name stripped :" + productname_stripped + "\nIngredients: " + ingredients + "\nIngredients stripped: " + ingredients_stripped);

/*
    product.save(function(err)  {
            if(err) {
            res.send('bad news: '+err.message);
            }
        else  {
            res.send('your product was succesfully saved to the database');
            }
    });
*/
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
    var brandname = req.params.brandname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from brand name  
    var re_brandname = new RegExp('^'+brandname); //for partial match

    Product.find({ brandname_stripped: re_brandname }, function (err, products) {
        if (err) {
            res.send('bad news: '+err.message);
        }
        else {
            res.send(products);
        }
    });
};

ProductController.findProductByName = function(req, res){
    var productname = req.params.productname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from product name
    /*TODO: This is not a good convention to use for searching. */
    var re_productname = new RegExp("(\\s|^)" + productname + "(\\s|$)", "i"); //for partial match

    Product.find({ productname_stripped: re_productname }, function (err, products) {
	if (err) {
            res.send('bad news: '+err.message);
	}
	else{
            res.send(products);
	}
    });
};

ProductController.findProductByBrandAndType = function(req, res){
    var brandname = req.params.brandname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from brand name  
    var re_brandname = new RegExp('^'+brandname); //for partial match
    var productname = req.params.productname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from product name
    /*TODO: This is not a good convention to use for searching. */
    var re_productname = new RegExp("(\\s|^)" + productname + "(\\s|$)", "i"); //for partial match

    Product.find({brandname_stripped: re_brandname, productname_stripped: re_productname}, function(err, products){
	if(err){
	    res.send('bad news: ' + err.message);
	}
	else{
	    res.send(products);
	}
    });
};

ProductController.findProductByIngredient = function(req, res){
    var ingredient = req.params.ingredient.toLowerCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from ingredient  
    var re_ingredient = new RegExp("(\\s|^)" + ingredient + "(\\s|$)", "i"); //for partial match
    
    Product.find({ingredients_stripped : re_ingredient}, function(err, products){
	if(err){
	    res.send('bad news: ' + err.message);
	}
	else{
	    res.send(products);
	}
    });
};


ProductController.findProductByTypeAndIngredient = function(req, res){
    var ingredient = req.params.ingredient.toLowerCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from ingredient  
    var re_ingredient = new RegExp("(\\s|^)" + ingredient + "(\\s|$)", "i"); //for partial match
    var productname = req.params.productname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from product name
    var re_productname = new RegExp("(\\s|^)" + productname + "(\\s|$)", "i"); //for partial match
    
    Product.find({productname_stripped : re_productname, ingredients_stripped : re_ingredient}, function(err, products){
	if(err){
	    res.send('bad news: ' + err.message);
	}
	else{
	    res.send(products);
	}
    });
};


module.exports = ProductController;
