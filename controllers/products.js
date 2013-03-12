var ProductController = function () {
    "use strict";
    var Product = require('../models/product'),
        nodemailer = require('nodemailer'),
        config = require('../config');
        
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
    
 //working, but partial
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

        function send(msg) {
            if (res !== undefined) {
                res.send(msg);
            } else {
                console.log(msg);
            }
        }

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
                        send('brand, product, and ingredient'); /*TODO: Replace with search, test*/
                    }
                    
                } else {        
                    //brand and product search
                    send('brand and product search'); /*TODO: Replace with search, test*/
                }
            } else {    
                if (obj.ingredient !== empty){
                    if (obj.notIngredient !== undefined) {
                        //brand and not ingredient search
                        send('brand and not ingredient search');   /*TODO: Replace with search, test*/    
                    } else {
                        //brand andingredient search
                        send('brand and ingredient search'); /*TODO: Replace with search, test*/
                    }
                    
                } else {
                    //brand search
                    send('brand search'); /*TODO: Replace with search, test*/
                }
            }
        } else if (obj.productname !== empty) {
            if (obj.ingredient !== empty) {
                if (obj.notIngredient !== undefined) {
                    send('product and not ingredient search'); /*TODO: Replace with search, test*/
                    //product and not ingredient search
                } else {    
                    send('product and ingredient search'); /*TODO: Replace with search, test*/
                    //product and ingredient search
                }
            } else {    
                send('product search'); /*TODO: Replace with search, test*/
                //product search
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
        }
        
        //RETRIEVE SEARCH RESULTS FROM DB
        function search (str){
            Product.find(str, function (err, products) {
		        if (err) {
		            return callback(err);//res.send(err);
		        } else if (res !== undefined) {
		            res.send(products);
		        } else {
		            callback(null, products);
		        }
	        });
        }  
    };
};


module.exports = ProductController;
