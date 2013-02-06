var Product = require('../models/product');

var NewProduct = new Product(
			     {'brandname' : 'Progresso', 
			      'productname' : 'Vegetable Classics Creamy Mushroom', 
			      'ingredients' : ['water',
					       'portabella mushrooms', 
					       'soybean oil', 
					       'modified food starch', 
					       'cream', 
					       'soy protein concentrate', 
					       'mushroom extract', 
					       'salt', 
					       'butter', 
					       'sugar', 
					       'sodium phosphate', 
					       'modified whey protein concentrate', 
					       'dried parsley', 
					       'onion powder', 
					       'garlic powder', 
					       'yeast extract', 
					       'spice']
			     }
);

NewProduct.save(function (err, newProduct) {
   if (err){ 
      console.log(err);
   }
   else{
      console.log("The following was written to the database: \n" + newProduct);
   }
});



module.exports = NewProduct;