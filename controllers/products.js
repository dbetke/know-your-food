var ProductController = function(){ 
    var Product = require('../models/product');

    function strip(item){
	return item.replace(/['";:.\/?\\-]/g, '');
    };

    //view everything stored in the database
    this.showAllProducts = function(req, res){
	Product.find(function (err, products) {
	    if (err) {
		res.send('bad news: '+err.message);
	    }
	    else{
		res.send(products);
	    }
	});
    };

    this.saveProduct = function(req, res)  {
	var brandname = req.body.brandname.toUpperCase();
	var brandname_stripped = strip(brandname);
	var productname = req.body.productname.toUpperCase();
	var productname_stripped = strip(productname);
	var ingredients = req.body.ingredients.toLowerCase();
	var ingredients_stripped = strip(ingredients);
	
	//parse ingredients by commas and store in array
	var ingredients_array = ingredients.split(',');
	var ingredients_stripped_array = ingredients_stripped.split(',');
	
	
	//require all fields
	if ((brandname != "") && (productname != "") && (ingredients != "")){
	    
	    //Test if product already exists
	    Product.find({brandname_stripped: brandname_stripped, productname_stripped: productname_stripped}, function(err, products){
		if(err){
		    res.send('bad news: ' + err.message);
		}
		else if (products != ""){
		    res.send("Oops.  This product already exists");
		}
		else{
		    
		    //create the new product
		    var newProduct = new Product({
			'brandname' : brandname,
			'brandname_stripped' : brandname_stripped,
			'productname' : productname,
			'productname_stripped' : productname_stripped,
			'ingredients' : ingredients_array,
			'ingredients_stripped' : ingredients_stripped_array
		    });
		    
		    //save the new product to the database
		    newProduct.save(function (err, newProduct) {
			if (err){
			    res.send(err);
			}
			else{
			    //send confirmation that product was saved
			    res.send("The following was written to the database: \n" + newProduct);
			}
		    });
		}
	    });
	}
	else{
	    res.send("All fields are required");
	}
    };
    
    //finds products based on search criteria
    this.findProduct = function(req, res){
	var brandname = strip(req.body.brandname.toUpperCase());
	var re_brandname = new RegExp('^'+brandname); //for partial match
	var productname = strip(req.body.productname.toUpperCase());
	var re_productname = new RegExp("(\\s|^)" + productname + "(\\s|$)", "i"); //for partial match
	var ingredient = strip(req.body.ingredient.toLowerCase());
	var re_ingredient = new RegExp(ingredient, "i"); //for partial match
	
	//if brandname
	if(brandname !== ""){
	    //if brand name and product name
	    if(productname !== ""){
		//check if brand name, product name, and ingredient
		if(ingredient !== ""){
		    Product.find({brandname_stripped : re_brandname, productname_stripped: re_productname, ingredients_stripped : re_ingredient}, function(err, products){
			if(err){
			    res.send('bad news: ' + err.message);
			}
			else{
			    res.send(products);
			}
		    });
		}
		//only brand name and product name
		else{
		    Product.find({brandname_stripped: re_brandname, productname_stripped: re_productname}, function(err, products){
			if(err){
			    res.send('bad news: ' + err.message);
			}
			else{
			    res.send(products);
			}
		    });
		}
	    }
	    //if brand name (without product name)
	    else{
		//check if brand name and ingredient
		if(ingredient !== ""){
		    Product.find({brandname_stripped : re_brandname, ingredients_stripped : re_ingredient}, function(err, products){
			if(err){
			    res.send('bad news: ' + err.message);
			}
			else{
			    res.send(products);
			}
		    });
		}
		//only brand name
		else{
		    Product.find({ brandname_stripped: re_brandname }, function (err, products) {
			if (err) {
			    res.send('bad news: '+err.message);
			}
			else {
			    res.send(products);
			}
		    });
		    
		}
	    }
	}
	//if only product name, no brand name
	else if (productname !== ""){
	    //if product name and ingredient
	    if (ingredient !== ""){
		Product.find({productname_stripped : re_productname, ingredients_stripped : re_ingredient}, function(err, products){
		    if(err){
			res.send('bad news: ' + err.message);
		    }
		    else{
			res.send(products);
		    }
		});
	    }
	    //if only product name
	    else{
		Product.find({ productname_stripped: re_productname }, function (err, products) {
		    if (err) {
			res.send('bad news: '+err.message);
		    }
		    else{
			res.send(products);
		    }
		});
	    }
	}
	//if only ingredient
	else if (ingredient !== ""){
	    //TODO: Remove this from production
	    Product.find({ingredients_stripped : re_ingredient}, function(err, products){
		if(err){
		    res.send('bad news: ' + err.message);
		}
		else{
		    res.send(products);
		}
	    });
	}
	
	else{
	    res.send("please enter a value to search");
	}
	
    };
    
    //TODO: THIS METHOD IS TO SAVE PRODUCTS FROM THE SCRIPT FILE RATHER THAN THE WEB PAGE. NOT SURE IF THIS IS THE BEST WAY TO HANDLE 
    this.saveProducts = function(req, res)  {
	var brandname = req.brandname.toUpperCase();
	var brandname_stripped = strip(req.brandname.toUpperCase());
	var productname = req.productname.toUpperCase();
	var productname_stripped = strip(req.productname.toUpperCase()); 
	var ingredients = req.ingredients.toLowerCase();
	var ingredients_stripped = strip(req.ingredients.toLowerCase());
	
	//parse ingredients by commas and store in array
	var ingredients_array = ingredients.split(',');
	var ingredients_stripped_array = ingredients_stripped.split(',');
	
	
	//require all fields
	if ((brandname != "") && (productname != "") && (ingredients != "")){
	    
	    //Test if product already exists
	    Product.find({brandname_stripped: brandname_stripped, productname_stripped: productname_stripped}, function(err, products){
		if(err){
		    console.log('bad news: ' + err.message);
		}
		else if (products != ""){
		    console.log("Oops.  This product already exists");
		}
		else{
		    
		    //create the new product
		    var newProduct = new Product({
			'brandname' : brandname,
			'brandname_stripped' : brandname_stripped,
			'productname' : productname,
			'productname_stripped' : productname_stripped,
			'ingredients' : ingredients_array,
			'ingredients_stripped' : ingredients_stripped_array
		    });
		    
		    //save the new product to the database
		    newProduct.save(function (err, newProduct) {
			if (err){
			    console.log(err);
			}
			else{
			    //send confirmation that product was saved
			    console.log("The following was written to the database: \n" + newProduct);
			}
		    });
		}
	    });
	}
	else{
	    console.log("All fields are required");
	}
	
    };
};

module.exports = ProductController;

