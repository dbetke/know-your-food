// force the test environment to 'test'
process.env.NODE_ENV = 'test';

var mongoose = require('mongoose'),
    Product = require('../models/product'),
    ProductController = require('../controllers/products'),
    assert = require('assert'),
    should = require('should');

mongoose.connect('mongodb://localhost/product_test');

describe('ProductController', function(){
    var test_brandname = ["Progresso",
			  "Amy's",
			  "Campbell's" ];
    var test_productname = ['Vegetable Classics Creamy Mushroom',
			    'Cream of Mushroom Soup',
			    'Cream of Mushroom Soup'];
    var test_ingredients = ['water, portabella mushrooms,soybean oil, modified food starch, cream, soy protein concentrate, mushroom extract, salt, butter, sugar, sodium phosphate, modified whey protein concentrate, onion powder, garlic powder, yeast extract, spice',
			    'filtered water, organic mushrooms, organic onions, organic wheat flour, organic high oleic safflower and/or sunflower oil, organic leeks, organic grade AA butter (cream, salt, annatto [color]), organic cream, spices (100% pure herbs & spices (no hidden ingredients)), sea salt, organic garlic, organic black pepper',
			    'water, mushrooms, Modified Food Starch, wheat flour, salt, cream, dried whey, Monosodium Glutamate, soy protein concentrate, yeast extract, spice extract, dehydrated garlic, vegetable oil'];
    
    var testProductLength = test_brandname.length;

    var brandname;
    var brandname_stripped;
    var productname;
    var productname_stripped;
    var ingredients;
    var ingredients_stripped;


    //SAVE PRODUCT
    describe('#saveProduct()', function(){
	it('should save some new products', function(done){ 
	    for (var i=0; i<testProductLength; i++){
		brandname = test_brandname[i].toUpperCase();
		brandname_stripped = test_brandname[i].toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from brand name                                  
		productname = test_productname[i].toUpperCase();
		productname_stripped = test_productname[i].toUpperCase().replace(/['";:,.\/?\\-]/g, ''); //strips all punctuation from product name                            
		ingredients = test_ingredients[i].toLowerCase();
		ingredients_stripped = test_ingredients[i].toLowerCase().replace(/['";:.\/?\\-]/g, ''); //strips all punctuation from ingredients except commas        
		
		//parse ingredients by commas and store in array                                                                                                                    
		var ingredients_array = ingredients[i].split(',');
		var ingredients_stripped_array = ingredients_stripped[i].split(',');
	        
		//create the new product                                                                                                                               
		var newProduct = new Product({
		    'brandname' : brandname,
		    'brandname_stripped' : brandname_stripped,
		    'productname' : productname,
		    'productname_stripped' : productname_stripped,
		    'ingredients' : ingredients_array,
		    'ingredients_stripped' : ingredients_stripped_array
		});
		
		newProduct.save(function (err, newProduct) {
		    if(err){
			return err;
		    }
		});
	    }
	    
	    done();
	});
	
	//TODO:  Fix this test - currently when breaking it, it times out instead of sending the message
	it('should require all fields', function(done){
	    if((brandname != null) && (productname != null) && (ingredients != null)){
		done();
	    }
	    else{
		return('Missing required data');
	    }
	});

	it('should verify  matching product does not exist', function(done){
	    Product.find({brandname_stripped: brandname_stripped, productname_stripped: productname_stripped}, function(err, products){
		if(err){
		    return done(err);
		}
		else if (products != ""){ //product should exist in this case
		    done();
		}
	    });
	});
 	
    });    

    //FIND PRODUCT
    describe('#findProduct()', function(){
	it('should search for product by brand, name, and ingredient', function(done){
	    Product.find({brandname_stripped: brandname_stripped, productname_stripped : productname_stripped, ingredients_stripped : ingredients_stripped}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });
	});
	
	it('should search for product by brand and ingredient', function(done){
	    Product.find({brandname_stripped: brandname_stripped, ingredients_stripped : ingredients_stripped}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by name and ingredient', function(done){
	    Product.find({productname_stripped : productname_stripped, ingredients_stripped : ingredients_stripped}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by brand and name', function(done){
	    Product.find({brandname_stripped: brandname_stripped, productname_stripped : productname_stripped}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by brand name', function(done){
	    Product.find({brandname_stripped: brandname_stripped}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by name', function(done){
	    Product.find({productname_stripped: productname_stripped}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by ingredient', function(done){
	    //Note: Do not want this functionality in production
	    Product.find({ingredients_stripped : ingredients_stripped}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });
	});
    });

    //CLEAR DATABASE AFTER TESTS ARE COMPLETE
    after(function (done) {
	mongoose.connection.db.dropDatabase(function () {
            mongoose.connection.close(function () {
		done();
            });
	});
    });
});


