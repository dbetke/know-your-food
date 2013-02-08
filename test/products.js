var Product = require('../models/product');

var NewProduct = new Product(

 			     {'brandname'           : 'Progresso', 
			      'brandname_stripped'  : 'Progresso',
 			      'productname'         : 'Vegetable Classics Creamy Mushroom', 
			      'productname_stripped': 'Vegetable Classics Creamy Mushroom',
 			      'ingredients'         : ['water',
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
						       'spice'],
 			      'ingredients_stripped': ['water',
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

var NewProduct2 = new Product(
			     {'brandname'           : 'Campbell\'s',
			      'brandname_stripped'  : 'Campbells',
			      'productname'         : 'Cream of Mushroom Soup',
			      'productname_stripped': 'Cream of Mushroom Soup',
			      'ingredients'         : ['water', 
						       'mushrooms',
						       'Modified Food Starch',      
						       'wheat flour',      
						       'salt',      
						       'cream',      
						       'dried whey',      
						       'Monosodium Glutamate',      
						       'soy protein concentrate',      
						       'yeast extract',      
						       'spice extract',      
						       'dehydrated garlic',      
						       'vegetable oil'],
			      'ingredients_stripped': ['water', 
						       'mushrooms',
						       'Modified Food Starch',      
						       'wheat flour',      
						       'salt',      
						       'cream',      
						       'dried whey',      
						       'Monosodium Glutamate',      
						       'soy protein concentrate',      
						       'yeast extract',      
						       'spice extract',      
						       'dehydrated garlic',      
						       'vegetable oil']

			     } 
);

var NewProduct3 = new Product(
                             {'brandname'           : 'Amy\'s', 
			      'brandname_stripped'  : 'Amys',
			      'productname'         : 'Cream of Mushroom Soup',
			      'productname_stripped': 'Cream of Mushroom Soup',
			      'ingredients' : ['filtered water',      
					       'organic mushrooms',      
					       'organic onions',      
					       'organic wheat flour',      
					       'organic high oleic safflower and/or sunflower oil',      
					       'organic leeks',      
					       'organic grade AA butter (cream, salt, annatto [color])',      
					       'organic cream',      
					       'spices (100% pure herbs & spices (no hidden ingredients))',      
					       'sea salt',      
					       'organic garlic',      
					       'organic black pepper'],
			      'ingredients_stripped' : ['filtered water',      
					       'organic mushrooms',      
					       'organic onions',      
					       'organic wheat flour',      
					       'organic high oleic safflower and or sunflower oil',      
					       'organic leeks',      
					       'organic grade AA butter cream salt annatto color)',      
					       'organic cream',      
					       'spices 100 pure herbs spices no hidden ingredients',      
					       'sea salt',      
					       'organic garlic',      
					       'organic black pepper'] 

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

NewProduct2.save(function (err, newProduct) {
   if (err){ 
      console.log(err);
   }
   else{
      console.log("The following was written to the database: \n" + newProduct);
   }
});

NewProduct3.save(function (err, newProduct) {
   if (err){ 
      console.log(err);
   }
   else{
      console.log("The following was written to the database: \n" + newProduct);
   }
});

module.exports = NewProduct;
module.exports = NewProduct2;
module.exports = NewProduct3;