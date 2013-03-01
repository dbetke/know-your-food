var ProductController = require('./controllers/products'), 
    mongoose = require('mongoose'),
    mongoServer = 'mongodb://localhost/Products',
    pc = new ProductController;

mongoose.connect(mongoServer);

pc.saveProduct({ brandname: 'Progresso',
		  productname: 'Vegetable Classics Creamy Mushroom',
		  ingredients: 'Water, Portabella Mushrooms, Soybean Oil, Modified Food Starch, Cream, Soy Protein Concentrate, Mushroom Extract, Salt, Butter, Sugar, Sodium Phosphate, Modified Whey Protein Concentrate, Dried Parsley, Onion Powder, Garlic Powder, Yeast Extract, Spice'});

pc.saveProduct({ brandname: "Amy's",
		  productname: 'Cream of Mushroom Soup',
		  ingredients: 'filtered water, organic mushrooms, organic onions, organic wheat flour, organic high oleic safflower and/or sunflower oil, organic leeks, organic grade AA butter (cream, salt, annatto [color]), organic cream, spices (100% pure herbs & spices (no hidden ingredients)), sea salt, organic garlic, organic black pepper'});

pc.saveProduct({ brandname: "Campbell's",
		  productname: 'Cream of Mushroom Soup',
		  ingredients: 'water, mushrooms, Modified Food Starch, wheat flour, salt, cream, dried whey, Monosodium Glutamate, soy protein concentrate, yeast extract, spice extract, dehydrated garlic, vegetable oil'});

