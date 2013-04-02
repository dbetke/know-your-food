var ProductController = function () {
   "use strict";
    var Product = require('../models/product'),
        nodemailer = require('nodemailer');
        config = require('../config');
    
    function send(res,msg) {
        if (res !== undefined) {
            res.send(msg);
        } else {
            console.log(msg);
        }
    }

    this.strip = function (item) {
        //strip all punctuation, leave whitespaces between words, strip whitespace at the beginning, strip whitespace at the end
        return item.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/^\s+/, '').replace(/\s+$/, '');
    };

    this.showAllProducts = function (req, res, callback) {
        Product.find(function (err, products) {
            if (err) {
                return callback(err);
            } else if (res !== undefined) {
                res.send(products);
            } else{
                return callback(null, products); //res.send(products);
            }
        });
    };
 
    this.removeAllProducts = function (req, res) {
        Product.find().remove();
    };
    

    this.findProduct = function (req, res, callback) {
        var obj = req.body || req,
            brandname,
            re_brandname,
            productname,
            re_productname, 
                ingredient,
                re_ingredient,
                notIngredient = false,
                searchObj,
                empty,
            serverReq = false,
            webReq = false;
                
        if (obj === req.body){
            webReq = true;
            empty = '';
        } else {
            serverReq = true;
            empty = undefined;
        }
    
        /* TODO:  FIND OUT WHY CANNOT USE THIS.STRIP METHOD FOR WEB */
        if (obj.brandname !== undefined) {
            if (webReq) {
                brandname = obj.brandname.toUpperCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/^\s+/, '').replace(/\s+$/, '');
            } else {
                brandname = this.strip(obj.brandname.toUpperCase());
            } 
        }
        
        if (obj.productname !== undefined) {
            if (webReq){
                productname = obj.productname.toUpperCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/^\s+/, '').replace(/\s+$/, '');
            } else {
                productname = this.strip(obj.productname.toUpperCase());
            }
        }
        
        if (obj.ingredient !== undefined) {
            if (webReq){
                ingredient = obj.ingredient.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/^\s+/, '').replace(/\s+$/, '');
            } else {
                ingredient = this.strip(obj.ingredient.toLowerCase());
            }
        }
        
        if (obj.notIngredient !== undefined) {
            notIngredient = obj.notIngredient;                  
        }

        //CREATE REGEX FOR PARTIAL MATCH
        re_brandname = new RegExp('^' + brandname);  
        re_productname = new RegExp("(\\s|^)" + productname + "(\\s|$)", "i");
        re_ingredient = new RegExp(ingredient, "i");

        //SETUP SEARCH CRITERIA
        if (obj.brandname !== empty) {
            if (obj.productname !== empty) {
                if (obj.ingredient !== empty) {
                    if (obj.notIngredient !== undefined) {
                        //brand, product, and not ingredient
                        searchObj = { 'brandname_stripped' : re_brandname, 'productname_stripped' : re_productname, 'ingredients_stripped' : { $not :  re_ingredient } };
                        search(searchObj);
                    } else {
                        //brand, product and ingredient
                        searchObj = { 'brandname_stripped' : re_brandname, 'productname_stripped' : re_productname, 'ingredients_stripped' : re_ingredient };
                        search(searchObj);
                    }
                    
                } else {        
                    //brand and product search
                    searchObj = { 'brandname_stripped' : re_brandname, 'productname_stripped' : re_productname };
                    search(searchObj);
                }
            } else {    
                if (obj.ingredient !== empty){
                    if (obj.notIngredient !== undefined) {
                        //brand and not ingredient search
                        searchObj = { 'brandname_stripped' : re_brandname, 'ingredients_stripped' : { $not :  re_ingredient } };
                        search(searchObj);  
                    } else {
                        //brand andingredient search
                        searchObj = { 'brandname_stripped' : re_brandname, 'ingredients_stripped' : re_ingredient };
                        search(searchObj);
                    }
                    
                } else {
                    //brand search
                    searchObj = { 'brandname_stripped' : re_brandname };
                    search(searchObj);
                }
            }
        } else if (obj.productname !== empty) {
            if (obj.ingredient !== empty) {
                if (obj.notIngredient !== undefined) {
                    //product and not ingredient search
                    searchObj = { 'productname_stripped' : re_productname, 'ingredients_stripped' : { $not :  re_ingredient }  };
                    search(searchObj);
                } else {    
                    //product and ingredient search
                    searchObj = { 'productname_stripped' : re_productname, 'ingredients_stripped' : re_ingredient };
                    search(searchObj);
                }
            } else {    
                //product search
                searchObj = { 'productname_stripped' : re_productname };
                search(searchObj);
            }
        } else if (obj.ingredient !== empty) {
            if (obj.notIngredient !== undefined) {
                //not ingredient search
                searchObj = { 'ingredients_stripped' : { $not: re_ingredient } };
                search(searchObj);
            } else {           
                //ingredient search 
                searchObj = { 'ingredients_stripped' : re_ingredient };
                search(searchObj);
            }
        } else {
            send(res,'Please enter search criteria');
        }
        
        //RETRIEVE SEARCH RESULTS FROM DB
        function search (str) {
            Product.find(str, function (err, products) {
                        if (err) {
                            return callback(err);
                        } else if (res !== undefined) {
                            res.render('search_results', { title: 'Results', nbsp: ' ', results: products });
                        } else {
                            callback(null, products);
                        }
                });
        }  
    };
    
    this.contribute = function (req, res){
        
        var brandname = req.body.brandname.toUpperCase(),
            productname = req.body.productname.toUpperCase(),
            ingredients = req.body.ingredients.toLowerCase(),
                smtpTransport = nodemailer.createTransport("SMTP",{
                service: "Gmail",
                    auth: {
                            user: process.env.user || config.username,
                            pass: process.env.pass || config.password
                    }
                });
      
        smtpTransport.sendMail({
                    from: "Know Your Food Contribution <KnowYourFoodIngredients@gmail.com>", // sender address
                    to: "Know Your Food <KnowYourFoodIngredients@gmail.com>", // comma separated list of receivers
                    subject: "Know Your Food Contribution", // Subject line
                    text: 'BRAND NAME: ' + brandname + '\nPRODUCT NAME: ' + productname + '\nINGREDIENTS: ' + ingredients 
            }, function(error, response){
                if (error) {
                        send(res, error.message);
                } else {
                    res.redirect('/contribute');
                }
        });
    }
    
    this.saveProduct = function (req, res) {
        
        var obj = req.body || req,
            ingredients_array,
            brandname,
            brandname_stripped,
            productname,
            productname_stripped,
            ingredients,
            ingredients_stripped,
            ingredients_stripped_array;

        //check if req is from file or web    
        if (obj.brandname && obj.productname && obj.ingredients) {
            brandname = obj.brandname.toUpperCase();
            productname = obj.productname.toUpperCase();
            ingredients = obj.ingredients.toLowerCase();
        }

        brandname_stripped = this.strip(brandname);
        productname_stripped = this.strip(productname);
        ingredients_stripped = ingredients.replace(/['";:.\/?\\-]/g, '');

        //parse ingredients by commas and store in array
        ingredients_array = ingredients.split(',');
        ingredients_stripped_array = ingredients_stripped.split(',');

        //require all fields
        if ((brandname !== "") && (productname !== "") && (ingredients !== "")) {
            //Test if product already exists
            Product.count({ brandname_stripped : brandname_stripped, productname_stripped : productname_stripped }, function (err, count) {
                if (err) {
                    send(res, err);
                } else if (count >= 1) {
                    send(res, "The following product already exists in the database and was not saved: \n  ~  " + brandname + " " + productname);
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
                            send(res, err);
                        } else {
                            //send confirmation that product was saved
                            send(res, "The following was written to the database: \n" + newProduct);
                        }
                    });
                }
            });
        } else {
            send("All fields are required");
        }
    };

    this.contact = function (req, res){
        
        var contactName = req.body.name,
            returnEmail = req.body.email,
            message = req.body.message,
                smtpTransport = nodemailer.createTransport("SMTP",{
                service: "Gmail",
                    auth: {
                            user: process.env.user || config.username,
                            pass: process.env.pass || config.password
                    }
                });
      
        smtpTransport.sendMail({
                    from: "Know Your Food Contribution <KnowYourFoodIngredients@gmail.com>", // sender address
                    to: "Know Your Food <KnowYourFoodIngredients@gmail.com>", // comma separated list of receivers
                    subject: "Contact Us", // Subject line
                    text: 'NAME: ' + contactName + '\nEMAIL ADDRESS: ' + returnEmail + '\nMESSAGE: ' + message 
            }, function(error, response){
                if (error) {
                        send(res, error.message);
                } else {
                    res.redirect('/');
                }
        });
    }

};


module.exports = ProductController;
