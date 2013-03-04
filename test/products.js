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

    var brandname = []
    var brandname_stripped = []
    var productname = []
    var productname_stripped = []
    var ingredients = []
    var ingredients_stripped = []

    function strip(item){
        return item.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/^\s+/, '').replace(/\s+$/, '');
    };
	
    //SAVE PRODUCT
    describe('#saveProduct()', function(){

	it('should strip punctuation for key fields', function(){
	    
	    for (var i=0; i<testProductLength; i++){
		brandname.push(test_brandname[i].toUpperCase());//.toUpperCase();
		brandname_stripped.push(strip(brandname[i]));
		productname.push(test_productname[i].toUpperCase());
		productname_stripped.push(strip(productname[i]));
		ingredients.push(test_ingredients[i].toLowerCase());
		ingredients_stripped.push(strip(ingredients[i]));
	    }

	    brandname[1].should.equal("AMY\'S");
	    brandname[1].should.not.equal("amy\'s");
	    brandname_stripped[1].should.equal("AMYS");
	    brandname_stripped[1].should.not.equal("AMYS ");
	    brandname_stripped[1].should.not.equal("AMY\'s");
	    
	});

	it('should require all fields', function(){	    
	    brandname[1].should.not.equal("");
	    productname[1].should.not.equal("");
	    ingredients[1].should.not.equal("");
	});


	it('should verify matching product does not already exist before saving', function(){
	    Product.find({brandname_stripped: brandname_stripped[1], productname_stripped: productname_stripped[1]}, function(err, products){
		products.should.not.exist;
		if (err) throw err;
	    });

	});

	it('should save the new products', function(done){ 
	 
	    for(var i=0; i<testProductLength; i++){
		//parse ingredients by commas and store in array                                                                                                                    
		var ingredients_array = ingredients[i].split(',');
		var ingredients_stripped_array = ingredients_stripped[i].split(',');
	
		//create the new product                                                                                                                               
		var newProduct = new Product({
		    'brandname' : brandname[i],
		    'brandname_stripped' : brandname_stripped[i],
		    'productname' : productname[i],
		    'productname_stripped' : productname_stripped[i],
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
	
    });    

    //FIND PRODUCT
    describe('#findProduct()', function(){
	it('should search for product by brand, name, and ingredient', function(done){
	    Product.find({brandname_stripped: brandname_stripped[0], productname_stripped : productname_stripped[0], ingredients_stripped : 'water'}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });
	});
	
	it('should search for product by brand and ingredient', function(done){
	    Product.find({brandname_stripped: brandname_stripped[0], ingredients_stripped : 'water'}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by name and ingredient', function(done){
	    Product.find({productname_stripped : productname_stripped[0], ingredients_stripped : 'water'}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by brand and name', function(done){
	    Product.find({brandname_stripped: brandname_stripped[0], productname_stripped : productname_stripped[0]}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by brand name', function(done){
	    Product.find({brandname_stripped: brandname_stripped[0]}, function(err, products){
                if(err){
                    return done(err);
                }
                else{
                    done();
                }
            });

	});

	it('should search for product by name', function(done){
	    Product.find({productname_stripped: productname_stripped[0]}, function(err, products){
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
	    Product.find({ingredients_stripped : 'water'}, function(err, products){
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


