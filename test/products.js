var mongoose = require('mongoose'),
    Product = require('../models/product'),
    ProductController = require('../controllers/products'),
    assert = require('assert'),
    should = require('should');

mongoose.connect('mongodb://localhost/product_test');

describe('ProductController', function(){
    var test_brandname = 'Some Brand';
    var test_productname = 'Some Product';
    var test_ingredients = 'Ingredient1, Ingredient2';
    
    var brandname = test_brandname.toUpperCase();
    var brandname_stripped = test_brandname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from brand name                                  
    var productname = test_productname.toUpperCase();
    var productname_stripped = test_productname.toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from product name                            
    var ingredients = test_ingredients.toLowerCase();
    var ingredients_stripped = test_ingredients.toLowerCase().replace(/['";:.\/?\\-]/g, ''); //strips all punctuation from ingredients except commas                

    //parse ingredients by commas and store in array                                                                                                                    
    var ingredients_array = ingredients.split(',');
    var ingredients_stripped_array = ingredients_stripped.split(',');

    describe('#saveProduct()', function(){
	it('saves a new product', function(done){                                                                                                                                                
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
		    if(err){
			return done(err);
		    }
		    else{
			done();
		    }
		});
	});

	it('verifies matching product does not exist', function(done){
	    Product.find({brandname_stripped: brandname_stripped, productname_stripped: productname_stripped}, function(err, products){
		if(err){
                    return done(err);
		}
		else if (products != ""){
                    done();
		}
	    });
	});
    });
});
