var ProductController = function () {
    "use strict";
    var Product = require('../models/product'),
        nodemailer = require('nodemailer'),
        config = require('../config');;

    function strip(item) {
	//strip all punctuation, leave whitespaces between words, strip whitespace at the beginning, strip whitespace at the end
	return item.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/^\s+/, '').replace(/\s+$/, '');
    }

    //view everything stored in the database
    this.showAllProducts = function (req, res) {
        Product.find(function (err, products) {
            if (err) {
                res.send(err);
            } else {
                res.send(products);
            }
        });
    };

    //finds products based on search criteria
    this.findProduct = function (req, res) {
        var brandname = strip(req.body.brandname.toUpperCase()),
            re_brandname = new RegExp('^' + brandname), //for partial match
            productname = strip(req.body.productname.toUpperCase()),
            re_productname = new RegExp("(\\s|^)" + productname + "(\\s|$)", "i"), //for partial match
	    ingredient = strip(req.body.ingredient.toLowerCase()),
	    re_ingredient = new RegExp(ingredient, "i"),
	    notIngredient = req.body.notIngredient; //for partial match

        //if brandname
        if (brandname !== "") {
            //if brand name and product name
            if (productname !== "") {
                //check if brand name, product name, and ingredient
                if (ingredient !== "") {
		    if(notIngredient){
			Product.find({ brandname_stripped : re_brandname, productname_stripped : re_productname, ingredients_stripped : { $not :  re_ingredient } }, function (err, products) {
				if (err) {
				    res.send(err);
				} else {
				    res.send(products);
				}
			    });
		    } else {
			Product.find({ brandname_stripped : re_brandname, productname_stripped : re_productname, ingredients_stripped : re_ingredient }, function (err, products) {
				if (err) {
				    res.send(err);
				} else {
				    res.send(products);
				}
			    });
		    }
                } else {//only brand name and product name
                    Product.find({ brandname_stripped: re_brandname, productname_stripped: re_productname }, function (err, products) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(products);
                        }
                    });
                }
            } else { //if brand name (without product name)
                //check if brand name and ingredient
                if (ingredient !== "") {
		    if(notIngredient){
			Product.find({ brandname_stripped : re_brandname, ingredients_stripped : { $not: re_ingredient } }, function (err, products) {
				if (err) {
				    res.send(err);
				} else {
				    res.send(products);
				}
			    });
		    } else {
			Product.find({ brandname_stripped : re_brandname, ingredients_stripped : re_ingredient }, function (err, products) {
				if (err) {
				    res.send(err);
				} else {
				    res.send(products);
				}
			    });
		    }
                } else { //only brand name
                    Product.find({ brandname_stripped : re_brandname }, function (err, products) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(products);
                        }
                    });
                }
            }
        } else if (productname !== "") {//if only product name, no brand name
            //if product name and ingredient
            if (ingredient !== "") {
		if(notIngredient){
		    Product.find({ productname_stripped : re_productname, ingredients_stripped : { $not: re_ingredient} }, function (err, products) {
			    if (err) {
				res.send(err);
			    } else {
				res.send(products);
			    }
			});
		} else {
		    Product.find({ productname_stripped : re_productname, ingredients_stripped : re_ingredient }, function (err, products) {
			    if (err) {
				res.send(err);
			    } else {
				res.send(products);
			    }
			});
		}
            } else { //if only product name
                Product.find({ productname_stripped : re_productname }, function (err, products) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(products);
                    }
                });
            }
        } else if (ingredient !== "") { //if only ingredient
	    if(notIngredient){
		Product.find({ ingredients_stripped : { $not: re_ingredient } }, function (err, products) {
			if (err) {
			    res.send(err);
			} else {
			    res.send(products);
			}
		    });

	    } else {
		//TODO: Remove this from production
		Product.find({ ingredients_stripped : re_ingredient}, function (err, products) {
			if (err) {
			    res.send(err);
			} else {
			    res.send(products);
			}
		    });
		    
		//res.send('please use a second search term');
	    }
        } else {
            res.send("please enter a value to search");
        }
    };

    this.contribute = function (req, res){
	
        var brandname = req.body.brandname.toUpperCase(),
            productname = req.body.productname.toUpperCase(),
            ingredients = req.body.ingredients.toLowerCase(),
	    smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
		user: config.username,
		pass: config.password
	    }
	});
	
	smtpTransport.sendMail({
	    from: "Know Your Food Contribution <KnowYourFoodIngredients@gmail.com>", // sender address
	    to: "Know Your Food <KnowYourFoodIngredients@gmail.com>", // comma separated list of receivers
	    subject: "Know Your Food Contribution", // Subject line
	    text: 'BRAND NAME: ' + brandname + '\nPRODUCT NAME: ' + productname + '\nINGREDIENTS: ' + ingredients 
	}, function(error, response){
	    if(error){
		res.send(error);
	    }else{
		res.redirect('/contribute');
	    }
	});
    }

    this.saveProduct = function (req, res) {
        var ingredients_array,
            brandname,
            brandname_stripped,
            productname,
            productname_stripped,
            ingredients,
            ingredients_stripped,
            ingredients_stripped_array,
            send;

        //check if req is from file or web    
        if (req.brandname) {
            brandname = req.brandname.toUpperCase();
            productname = req.productname.toUpperCase();
            ingredients = req.ingredients.toLowerCase();
            send = function (msg) {
                console.log(msg);
            };
        } else {
            brandname = req.body.brandname.toUpperCase();
            productname = req.body.productname.toUpperCase();
            ingredients = req.body.ingredients.toLowerCase();
            send = function (msg) {
                res.send(msg);
            };
        }

        brandname_stripped = strip(brandname);
        productname_stripped = strip(productname);
        ingredients_stripped = ingredients.replace(/['";:.\/?\\-]/g, '');

        //parse ingredients by commas and store in array
        ingredients_array = ingredients.split(',');
        ingredients_stripped_array = ingredients_stripped.split(',');

        //require all fields
        if ((brandname !== "") && (productname !== "") && (ingredients !== "")) {
            //Test if product already exists
            Product.count({ brandname_stripped : brandname_stripped, productname_stripped : productname_stripped }, function (err, count) {
                if (err) {
                    send(err);
                } else if (count >= 1) {
                    send("The following product already exists in the database and was not saved: \n  ~  " + brandname + " " + productname);
                } else {
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
                        if (err) {
                            send(err);
                        } else {
                            //send confirmation that product was saved
                            send("The following was written to the database: \n" + newProduct);
                        }
                    });
                }
            });
        } else {
            send("All fields are required");
        }
    };
};

module.exports = ProductController;

