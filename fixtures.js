var ProductController = require('./controllers/products'), 
    mongoose = require('mongoose'),
    mongoServer = 'mongodb://localhost/Products',
    pc = new ProductController,
    productArray;

mongoose.connect(mongoServer);

productArray = [
                    {
                        brandname: 'Progresso',
                        productname: 'High Fiber Chicken Tuscany (Soup)',
                        ingredients: 'Chicken Broth, Great Northern Beans, Cooked White Chicken Meat, Tomatoes, Celery, Carrots, Zucchini, Spinach, Cream, Modified Food Starch, Corn Syrup Solids, Water, Onions, Salt, Corn Protein (hydrolyzed), Potassium Chloride, Chicken Fat, Carrot Puree, Spice, Onion Powder, Soy Protein Isolate, Garlic (dried), Maltodextrin, Yeast Extract, Sodium Phosphate, Garlic Powder, Calcium Chloride, Citric Acid, Natural Flavor, Egg Yolk (dried), Sugar, Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'High Fiber Creamy Tomato Basil (Soup)',
                        ingredients: 'Tomato Puree (water, tomato paste), Water, Sugar, Soluble Corn Fiber, Soybean Oil, Cream, Wheat Flour Bleached, Salt, Modified Food Starch, Garlic Powder, Dried Parsley, Dried Basil, Natural Flavor, Yeast Extract, Ascorbic Acid, Citric Acid'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'High Fiber Hearty Vegetable & Noodles (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Green Beans, Great Northern Beans, Celery, Soluble Corn Fiber, Egg Noodle (wheat flour, semolina wheat, egg (dried)), Tomatoes, Red Bell Peppers, Peas (dried), Salt, Chicken Fat, Corn Protein (hydrolyzed), Potassium Chloride, Xanthan Gum, Carrot Puree, Egg White (dried), Onion Powder, Yeast Extract, Garlic Powder, Natural Flavor, Parsley (dried), Spice, Calcium Chloride, Citric Acid, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'High Fiber Homestyle Minestrone (Soup)',
                        ingredients: 'Water, Tomato Paste, Carrots, Celery, Kidney Beans, Potatoes, Green Beans, Soluble Corn Fiber, Peas, Penne Rigate Pasta (wheat flour, semolina wheat, egg whites (dried)), Spinach, Garbanzo Beans, Modified Food Starch, Salt, Soybean Oil, Spice, Yeast Extract, Parsley (dried), Sugar, Corn and Soy  and Wheat Proteins (hydrolyzed), Natural Flavor, Caramel Color'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'High Fiber Three-Bean Chili with Beef (Soup)',
                        ingredients: 'Water, Tomatoes, Beef Broth, Seasoned Cooked Beef (beef, soy protein [hydrolyzed], salt, dextrose, yeast extract, spice, onion powder, garlic powder, canola oil, natural flavor), Green Sweet Peppers, Kidney Beans, Great Northern Beans, Black Beans, Onions, Corn, Modified Food Starch, Tomato Paste, Red Bell Peppers, Sugar, Maltodextrin, Chili Powder (chili pepper, spice, salt, garlic powder), Chicken Fat, Salt, Spice, Natural Flavor, Yeast Extract, Soy Protein (hydrolyzed), Potassium Chloride, Beef Fat, Caramel Color, Garlic Powder, Beef Extract, Toasted Onion Powder, Onion Powder, Calcium Chloride, Citric Acid, Paprika, Soybean Oil, Grill Flavor, Smoke Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Beef Pot Roast (Soup)',
                        ingredients: 'Beef Broth, Water, Carrots, Cooked Beef, Tomatoes, Potatoes, Celery, Green Beans, Peas (dried), Tomato Paste, Corn and Soy Proteins (hydrolyzed), Sugar, Salt, Potassium Chloride, Xanthan Gum, Yeast Extract, Natural Flavor, Maltodextrin, Garlic Powder, Toasted Onion Powder, Caramel Color, Beef Fat, Beef Extract, Spice, Parsley (dried), Soybean Oil, Sodium Phosphate, Calcium Chloride, Citric Acid, Soy Sauce (soybeans, wheat, salt) (dried), Onion Powder'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Chicken & Dumpling (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Partially Cooked Spaetzle Dumplings (water, durum wheat flour, eggs, salt, spice, natural flavor, turmeric [color]), Celery, Cooked White Chicken Meat, Green Beans, Water, Salt, Corn Protein (hydrolyzed), Onion, Maltodextrin, Chicken Fat, Xanthan Gum, Carrot Puree, Modified Food Starch, Yeast Extract, Potassium Chloride, Onion Powder, Soy Protein Isolate, Natural Flavor, Sodium Phosphate, Spice, Parsley (dried), Chives (dried), Garlic Powder, Whey Powder, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Chicken Noodle (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Egg Noodle (wheat flour, semolina wheat, egg (dried)), Celery, Water, Salt, Corn Protein (hydrolyzed), Chicken Fat, Egg White (dried), Xanthan Gum, Carrot Puree, Modified Food Starch, Potassium Chloride, Onion Powder, Sugar, Soy Protein Isolate, Maltodextrin, Yeast Extract, Sodium Phosphate, Garlic Powder, Chives (dried), Parsley (dried), Natural Flavor, Spice, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Chicken Pot Pie Style (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Celery, Carrots, Modified Food Starch, Potatoes, Peas, Polydextrose, Water, Cream, Soybean Oil, Salt, Maltodextrin, Sugar, Yeast Extract, Natural Flavor, Chicken Fat, Soy Protein Concentrate, Butter, Sodium Phosphate, Soy Protein Isolate, Nonfat Milk, Whey Protein Concentrate, Modified Whey Protein Concentrate, Fermented Whey, Parsley (dried), Wheat Starch, Sweetened Condensed Milk (sugar, milk) (dried), Garlic Powder, Safflower Oil, Chicken Meat, Spice, Citric Acid, Cultured Wheat Gluten, Butter Oil, Honey, Rosemary Extract (preservative), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Chicken Vegetable Rotini (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Spiral Pasta (semolina wheat, durum wheat, egg whites (dried)), Green Beans, Celery, Corn, Water, Red Bell Peppers, Salt, Corn Protein (hydrolyzed), Chicken Fat, Maltodextrin, Xanthan Gum, Carrot Puree, Modified Food Starch, Potassium Chloride, Yeast Extract, Onion Powder, Soy Protein Isolate, Sugar, Natural Flavor, Sodium Phosphate, Garlic Powder, Whey Powder, Parsley (dried), Spice, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Creamy Potato with Bacon & Cheese (Soup)',
                        ingredients: 'Chicken Broth, Potatoes (dried), Onions, Modified Food Starch, Celery, Polydextrose, Cream, Salt, Soybean Oil, Cooked Bacon (cured with water, salt, sugar, sodium nitrite, natural smoke flavor, sodium phosphate, sodium erythorbate, sodium ascorbate), Natural Flavor, Canola Oil, Whey, Yeast Extract, Artificial Color, Cheddar Cheese (cultured milk, salt, enzymes) (dried), Sugar, Soy Protein Concentrate, Nonfat Milk (dried), Butter, Sodium Phosphate, Chives (dried), Hydrolyzed Corn Gluten, Whey Protein Concentrate, Fermented Whey, Modified Whey Protein Concentrate, Chicken Fat, Spice, Sweetened Condensed Milk (sugar, milk) (dried), Enzyme Modified Milk, Citric Acid, Chicken Meat, Bacon Fat, Blue Cheese (cultured milk, salt, enzymes) (dried), Butter Oil, Natural Flavor (wheat protein), Potassium Chloride, Extractives of Turmeric, Annatto Extract (color), Corn Syrup Solids, Rosemary Extract (preservative)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Homestyle Vegetable & Rice (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Celery, Tomatoes, Green Beans, Corn, Red Bell Peppers, Rice, Soluble Corn Fiber, Wild Rice, Corn Protein (hydrolyzed), Salt, Xanthan Gum, Potassium Chloride, Carrot Puree, Sugar, Chicken Fat, Yeast Extract, Onion Powder, Natural Flavor, Maltodextrin, Chives (dried), Garlic Powder, Parsley (dried), Calcium Chloride, Whey Powder, Spice, Citric Acid, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Italian Style Meatball (Soup)',
                        ingredients: "Water, Carrots, Celery, Tomato Paste, Cooked Meatballs (pork, beef, water, eggs, textured soy protein [soy protein concentrate, caramel color], romano cheese [made from sheep's milk, cultures, salt, enzymes], bread crumbs [bleached wheat flour, dextrose, salt, yeast], corn syrup, onion, soy protein concentrate, salt, spice, sodium phosphate, garlic powder, dried parsley, onion powder, natural flavor), Enriched Penne Pasta (semolina wheat, egg whites, niacin [B Vitamin], ferrous sulfate [iron], thiamin mononitrate [B Vitamin], riboflavin [B Vitamin], folic acid [B Vitamin]), Sugar, Green Sweet Peppers, Onion, Salt, Natural Flavor, Potassium Chloride, Yeast Extract, Maltodextrin, Xanthan Gum, Onion Powder, Corn Protein (hydrolyzed), Oregano, Garlic Powder, Basil, Citric Acid, Spice, Lactic Acid, Tocopherol (preservative), Ascorbic Acid (preservative)"
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Italian-Style Vegetable (Soup)',
                        ingredients: 'Water, Tomatoes, Celery, Green Beans, Carrots, Tomato Paste, Peas, Penne Rigate Pasta (wheat flour, semolina wheat, dried egg whites), Spinach, Soluble Corn Fiber, Modified Food Starch, Sugar, Corn Protein (hydrolyzed), Salt, Yeast Extract, Potassium Chloride, Spice, Natural Flavor, Garlic Powder, Citric Acid, Calcium Chloride, Olive Oil, Oregano, Extractives of Turmeric, Milk'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light New England Clam Chowder (Soup)',
                        ingredients: 'Clam Broth, Potatoes (dried), Clams, Celery, Modified Food Starch, Water, Polydextrose, Onions, Artificial Color, Soybean Oil, Natural Flavor, Salt, Potassium Chloride, Soy Protein Concentrate, Butter, Sodium Phosphate, Modified Whey Protein Concentrate, Parsley (dried), Yeast Extract, Spice, Citric Acid'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Roasted Chicken & Vegetable (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Celery, Green Beans, Curly Pasta (wheat flour, semolina wheat, egg white (dried), whole egg (dried)), Red Bell Peppers, Water, Peas (dried), Maltodextrin, Corn Protein (hydrolyzed), Salt, Xanthan Gum, Potassium Chloride, Yeast Extract, Carrot Puree, Modified Food Starch, Natural Flavor, Sugar, Onion Powder, Soy Protein Isolate, Sodium Phosphate, Spice, Garlic Powder, Chives (dried), Chicken Fat, Whey Powder, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Savory Vegetable Barley (Soup)',
                        ingredients: 'Water, Beef Broth, Celery, Tomatoes, Carrots, Green Beans, Barley, Tomato Paste, Onion, Soluble Corn Fiber, Corn and Soy  Proteins (hydrolyzed), Modified Food Starch, Sugar, Salt, Potassium Chloride, Natural Flavor, Yeast Extract, Parsley (dried), Caramel Color, Spice, Beef Fat, Beef Extract, Soybean Oil, Calcium Chloride, Toasted Onion Powder, Citric Acid, Soy Sauce (soybeans, wheat, salt) (dried)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Vegetable (Soup)',
                        ingredients: 'Water, Tomato Puree (water, tomato paste), Celery, Green Beans, Tomatoes, Carrots, Corn, Spiral Pasta (semolina wheat, durum wheat, dried egg whites), Soluble Corn Fiber, Modified Food Starch, Corn Protein (hydrolyzed), Sugar, Potassium Chloride, Salt, Yeast Extract, Garlic Powder, Onion Powder, Spices, Citric Acid, Calcium Chloride'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Vegetable & Noodle (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Celery, Green Beans, Corn, Red Bell Peppers, Tomatoes, Egg Noodle (wheat flour, semolina wheat, egg (dried)), Soluble Corn Fiber, Peas, Potassium Chloride, Corn Protein (hydrolyzed), Natural Flavor, Salt, Xanthan Gum, Yeast Extract, Egg White (dried), Carrot Puree, Chicken Fat, Chives (dried), Parsley (dried), Torula Yeast, Sugar, Egg Yolk, Spice, Onion Powder, Garlic Powder, Calcium Chloride, Citric Acid, Beta Carotene (color), Caramel Color'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Zesty Santa Fe Style Chicken (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Rice, Black Beans, Corn, Red Bell Peppers, Green Sweet Peppers, Water, Tomato Paste, Corn Protein (hydrolyzed), Onion, Salt, Potassium Chloride, Corn (dried), Xanthan Gum, Yeast Extract, Maltodextrin, Natural Flavor, Onion Powder, Garlic Powder, Modified Food Starch, Cilantro, Sugar, Chili Pepper (dried), Spice, Chicken Fat, Soy Protein Isolate, Sodium Phosphate, Chipotle Pepper (dried), Cream'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Light Zesty Southwestern-Style Vegetable (Soup)',
                        ingredients: 'Chicken Broth, Celery, Tomatoes, Carrots, Green Sweet Peppers, Corn, Black Beans, Red Bell Peppers, Corn Protein (hydrolyzed), Natural Flavor, Salt, Xanthan Gum, Soluble Corn Fiber, Potassium Chloride, Cilantro, Sugar, Onion Powder, Yeast Extract, Garlic Powder, Spice, Chipotle Pepper (dried), Chili Pepper (dried), Torula Yeast, Calcium Chloride, Citric Acid, Caramel Color'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Beef & Vegetable (Soup)',
                        ingredients: 'Beef Broth, Potatoes, Carrots, Cooked Beef, Green Beans, Onions, Peas (dried), Tomatoes, Modified Food Starch, Water, Sugar, Corn and Soy Proteins (hydrolyzed), Sherry Wine with Potassium Sorbate (preservative), Potassium Chloride, Salt, Yeast Extract, Juice Concentrates (carrot, celeriac, red beet, lettuce, spinach, citric acid, natural flavor), Soybean Oil, Sea Salt, Caramel Color, Natural Flavor, Garlic Powder, Toasted Onion Powder, Parsley (dried), Spice, Sodium Phosphate, Beef Fat, Beef Extract, Paprika, Citric Acid, Calcium Chloride'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Beef & Vegetable (Soup)',
                        ingredients: 'Beef Broth, Potatoes, Carrots, Cooked Beef, Green Beans, Onions, Peas (dried), Tomatoes, Modified Food Starch, Water, Sugar, Corn and Soy Proteins (hydrolyzed), Sherry Wine with Potassium Sorbate (preservative), Potassium Chloride, Salt, Yeast Extract, Juice Concentrates (carrot, celeriac, red beet, lettuce, spinach, citric acid, natural flavor), Soybean Oil, Sea Salt, Caramel Color, Natural Flavor, Garlic Powder, Toasted Onion Powder, Parsley (dried), Spice, Sodium Phosphate, Beef Fat, Beef Extract, Paprika, Citric Acid, Calcium Chloride'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Chicken & Wild Rice (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Tomatoes, Wild Rice, Rice, Celery, Water, Modified Food Starch, Chicken Fat, Potassium Chloride, Onion Powder, Corn Protein (hydrolyzed), Sea Salt, Carrot Puree, Sugar, Salt, Maltodextrin, Yeast Extract, Garlic Powder, Soy Protein Isolate, Sodium Phosphate, Natural Flavor, Parsley (dried), Calcium Chloride, Egg Yolk (dried), Citric Acid, Whey Powder, Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Chicken Gumbo (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Okra, Celery, Partially Cooked Rice (rice, water), Tomatoes, Tomato Paste, Carrot Puree, Onions, Red Bell Peppers, Green Sweet Peppers, Kidney Beans, Water, Maltodextrin, Corn and Soy and Wheat Proteins (hydrolyzed), Xanthan Gum, Chicken Fat, Potassium Chloride, Sugar, Salt, Spice, Onion Powder, Modified Food Starch, Garlic Powder, Yeast Extract, Natural Flavor, Sea Salt, Soy Protein Isolate, Sodium Phosphate, Parsley (dried), Corn Starch, Whey (dried), Natural Smoke Flavor, Citric Acid, Carrots, Celery (dried), Egg Yolk, Calcium Chloride, Whole Milk (dried), Tocopherol (preservative), Ascorbic Acid, Caramel Color'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Chicken Noodle (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Egg Noodle (wheat flour, semolina wheat, egg (dried)), Celery, Modified Food Starch, Water, Chicken Fat, Corn Protein (hydrolyzed), Potassium Chloride, Egg White (dried), Onion Powder, Carrot Puree, Sea Salt, Salt, Maltodextrin, Soy Protein Isolate, Yeast Extract, Sugar, Garlic Powder, Sodium Phosphate, Chives (dried), Natural Flavor, Parsley (dried), Spice, Whey Powder, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Garden Vegetable (Soup)',
                        ingredients: 'Water, Potatoes, Tomato Puree (water, tomato paste), Tomatoes, Carrots, Celery, Corn, Dark Red Kidney Beans, Green Beans, Onions, Modified Food Starch, Sugar, Celery Juice Concentrate, Sea Salt, Potassium Chloride, Onion Powder, Garlic Powder, Dextrose, Corn Protein (hydrolyzed), Salt, Citric Acid, Natural Flavor, Yeast Extract, Dried Parsley, Spice, Beet Powder (color), Calcium Chloride, Carrot Juice Concentrate, Onion Juice, Bell Pepper Juice Concentrate, Sodium Phosphate, Corn Syrup, Egg Yolk Powder, Soy Lecithin, Caramel Color, Milk. Freshness Preserved by Potassium Sorbate'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Italian-Style Wedding (Soup)',
                        ingredients: "Chicken Broth, Partially Cooked Tubettini Pasta (water, semolina wheat, egg whites), Carrots, Cooked Meatballs (pork, beef, water, eggs, textured soy protein [soy protein concentrate, caramel color], romano cheese [made from sheep's milk, cultures, salt, enzymes], bread crumbs [bleached wheat flour, dextrose, salt, yeast], corn syrup, onion, soy protein concentrate, salt, spice, sodium phosphate, garlic powder, dried parsley, onion powder, natural flavor), Great Northern Beans, Spinach, Onions, Potassium Chloride, Carrot Puree, Corn Protein (hydrolyzed), Xanthan Gum, Sea Salt, Sugar, Onion Powder, Salt, Maltodextrin, Yeast Extract, Chicken Fat, Spice, Garlic Powder, Citric Acid, Natural Flavor, Egg Yolk"
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Minestrone (Soup)',
                        ingredients: 'Water, Tomato Puree (water, tomato paste), Carrots, Celery, Kidney Beans, Potatoes, Green Beans, Peas, Penne Pasta (wheat flour, semolina wheat, egg whites (dried)), Spinach, Garbanzo Beans, Modified Food Starch, Soybean Oil, Sea Salt, Sugar, Potassium Chloride, Onion Powder, Garlic Powder, Corn Protein (hydrolyzed), Parsley (dried), Salt, Yeast Extract, Natural Flavor, Spices, Fennel Seed, Milk, Citric Acid, Extractives of Turmeric, Freshness Preserved by Vitamin E (tocopherol)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Reduced Sodium Tomato Parmesan (Soup)',
                        ingredients: 'Tomato Puree (water, tomato paste), Water, Tomatoes, Onions, Modified Food Starch, Sugar, Salt, Parmesan Cheese (part skim milk, cheese cultures, salt, enzymes) (dried), Potassium Chloride, Cream, Parsley (dried), Butter, Corn Protein (hydrolyzed), Maltodextrin, Yeast Extract, Garlic Powder, Natural Flavor, Calcium Chloride, Spice, Oregano, Sodium Phosphate, Citric Acid, Onion Powder'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Beef Pot Roast (Soup)',
                        ingredients: 'Beef Broth, Potatoes, Carrots, Cooked Beef, Tomatoes, Green Beans, Pearl Onions, Modified Food Starch, Water, Sugar, Salt, Soy Protein (hydrolyzed), Potassium Chloride, Yeast Extract, Caramel Color, Natural Flavor, Garlic Powder, Toasted Onion Powder, Dried Parsley, Sodium Phosphate, Beef Fat, Beef Extract, Spice, Soybean Oil, Citric Acid, Calcium Chloride, Paprika'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Chicken & Homestyle Noodles (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Carrots, Egg Noodle (semolina wheat, egg (dried)), Celery, Water, Modified Food Starch, Salt, Chicken Fat, Egg White (dried), Carrot Puree, Maltodextrin, Potassium Chloride, Yeast Extract, Sugar, Soy Protein Isolate, Sodium Phosphate, Chicken Skin, Onion Powder, Chives (dried), Spice, Chicken (dried), Parsley (dried), Natural Flavor, Invert Sugar, Beta Carotene (color), Barley Extract'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Chicken Corn Chowder (Soup)',
                        ingredients: 'Chicken Broth, Corn, Cooked White Chicken Meat, Potatoes, Celery, Onions, Soybean Oil, Modified Food Starch, Water, Sugar, Bacon (pork cured with water, salt, sugar, sodium phosphate, sodium erythorbate, sodium nitrite), Salt, Corn Powder, Cream, Soy Protein Concentrate, Butter, Corn Protein (hydrolyzed), Sodium Phosphate, Potassium Chloride, Titanium Dioxide, Chicken Fat, Soy Protein Isolate, Maltodextrin, Onion Powder, Yeast Extract, DATEM, Corn Starch, Spice, Parsley (dried), Chives (dried), Egg Yolk, Natural Flavor, Garlic Powder'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Chicken Pot Pie Style (Soup)',
                        ingredients: 'Chicken Broth, Potatoes , Carrots, Cooked White Chicken Meat, Celery, Corn, Modified Food Starch, Dried Peas, Water, Soybean Oil, Salt, Cream, Chicken Fat, Corn Protein (hydrolyzed), Soy Protein Concentrate, Butter, Onion Powder, Sodium Phosphate, Modified Whey Protein Concentrate, Soy Protein Isolate, Yeast Extract, Titanium Dioxide, Spice, Natural Flavor, Maltodextrin, Wheat Starch, Garlic Powder, Egg Yolk, Honey'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Creamy Chicken Wild Rice (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Wild Rice, Celery, Rice, Modified Food Starch, Soybean Oil, Water, Salt, Dried Shredded Carrots, Sherry Wine with Potassium Sorbate (preservative), Sugar, Soy Protein Concentrate, Cream, Onion, Butter, Corn Protein (hydrolyzed), Sodium Phosphate, Maltodextrin, Potassium Chloride, Modified Whey Protein Concentrate, Soy Protein Isolate, Yeast Extract, Titanium Dioxide, Garlic Powder, Natural Flavor, Spice, Onion Powder, Chicken Fat, Corn Starch, Whey Powder, Egg Yolk'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Loaded Potato with Bacon (Soup)',
                        ingredients: "Chicken Broth, Potatoes (dried), Celery, Onions, Soybean Oil, Cream, Modified Food Starch, Wheat Flour Bleached, Cooked Bacon (cured with water, salt, sugar, sodium nitrite, natural smoke flavor, sodium phosphate, sodium erythorbate, sodium ascorbate), Bacon (pork cured with water, salt, sugar, sodium phosphate, sodium erythorbate, sodium nitrite), Soy Protein Concentrate, Salt, Butter, Natural Flavor, Sodium Phosphate, Potassium Chloride, Artificial Color, Yeast Extract, Sour Cream (cream, nonfat milk, cultures), Modified Whey Protein Concentrate, Chicken Fat, Garlic Powder, Chives (dried), Onion Powder, Enzyme Modified Cheddar Cheese (cultured milk, salt, enzymes, sorbitol), Torula Yeast, Whey Powder, Spice, Egg Yolk, Enzyme Modified Romano Cheese (made from cultured cow's milk, salt, enzymes, maltodextrin)"
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty New England Clam Chowder (Soup)',
                        ingredients: 'Clam Broth, Potatoes (dried), Clams, Soybean Oil, Water, Modified Food Starch, Onions, Soy Protein Concentrate, Sugar, Salt, Cream, Butter, Sodium Phosphate, Potassium Chloride, Artificial Color, Chablis Wine, DATEM, Natural Flavor, Brandy, Parsley (dried), Celery (dried), Yeast Extract'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Savory Beef Barley Vegetable (Soup)',
                        ingredients: 'Beef Broth, Carrots, Cooked Beef, Green Beans, Tomatoes, Barley, Corn, Celery, Modified Food Starch, Water, Sugar, Salt, Soy Protein (hydrolyzed), Wheat Flour Bleached, Potassium Chloride, Yeast Extract, Toasted Onion Powder, Caramel Color, Garlic Powder, Natural Flavor, Spice, Soybean Oil, Dried Parsley, Citric Acid, Sodium Phosphate, Beef Fat, Beef Extract, Calcium Chloride, Paprika'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Slow Cooked Vegetable Beef (Soup)',
                        ingredients: 'Beef Broth, Cooked Beef, Potatoes, Carrots, Green Beans, Celery, Tomatoes, Corn, Tomato Paste, Modified Food Starch, Peas, Water, Sugar, Salt, Onion, Soy Protein (hydrolyzed), Potassium Chloride, Yeast Extract, Garlic Powder, Dried Parsley, Toasted Onion Powder, Sodium Phosphate, Soybean Oil, Natural Flavor, Spice, Caramel Color, Beef Fat, Beef Extract, Calcium Chloride, Paprika, Citric Acid'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Steak & Homestyle Noodles (Soup)',
                        ingredients: 'Beef Broth, Carrots, Cooked Beef, Egg Noodle (semolina wheat, egg (dried)), Celery, Modified Food Starch, Water, Sugar, Salt, Carrot Puree, Soy Protein (hydrolyzed), Potassium Chloride, Egg White (dried), Yeast Extract, Natural Flavor, Toasted Onion Powder, Garlic Powder, Caramel Color, Parsley (dried), Spice, Beef Fat, Beef Extract, Sodium Phosphate, Citric Acid, Soybean Oil, Paprika'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Steak & Roasted Russet Potatoes (Soup)',
                        ingredients: ' Beef Broth, Potatoes, Cooked Beef, Carrots, Modified Food Starch, Water, Sugar, Salt, Soy Protein (hydrolyzed), Potassium Chloride, Soybean Oil, Yeast Extract, Toasted Onion Powder, Natural Flavor, Caramel Color, Garlic Powder, Dried Parsley, Sodium Phosphate, Beef Fat, Beef Extract, Spice, Citric Acid, Paprika'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Steak & Vegetables (Soup)',
                        ingredients: ' Beef Broth, Carrots, Potatoes, Cooked Beef, Tomatoes, Peas, Modified Food Starch, Water, Sugar, Salt, Onion, Soy Protein (hydrolyzed), Yeast Extract, Potassium Chloride, Caramel Color, Soybean Oil, Garlic Powder, Natural Flavor, Dried Parsley, Toasted Onion Powder, Sodium Phosphate, Beef Fat, Beef Extract, Spice, Citric Acid, Calcium Chloride, Paprika'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Rich & Hearty Steak Burger & Country Vegetables (Soup)',
                        ingredients: 'Beef Broth, Cooked Steak Burger (hamburger [beef, salt], beef, hydrolyzed soy protein, onion powder, spice, garlic powder, natural flavor), Carrots, Potatoes, Green Beans, Celery, Modified Food Starch, Wheat Flour Bleached, Tomato Paste, Peas, Salt, Maltodextrin, Yeast Extract, Chicken Fat, Sugar, Natural Flavor, Onion Powder, Spice, Caramel Color, Beef Extract, Lactic Acid, Beef Tallow, Citric Acid, Beef, Gelatin, Garlic Powder, Dextrose'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional 99% Fat Free Beef Barley (Soup)',
                        ingredients: 'Water, Beef Broth, Carrots, Cooked Beef, Barley, Potatoes, Tomatoes, Tomato Paste, Celery, Dried Peas, Corn, Soy Protein (hydrolyzed), Sugar, Salt, Xanthan Gum, Modified Food Starch, Yeast Extract, Caramel Color, Spice, Natural Flavor, Sodium Phosphate, Beef Fat, Toasted Onion Powder, Soybean Oil, Beef Extract, Garlic Powder, Calcium Chloride, Citric Acid, Maltodextrin'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional 99% Fat Free New England Clam Chowder (Soup)',
                        ingredients: 'Clam Broth, Potatoes, Clams, Water, Modified Food Starch, Celery, Onions, Soybean Oil, Salt, Sugar, Soy Protein Concentrate, Artificial Color, Potassium Chloride, Sodium Phosphate, Chablis Wine, Xanthan Gum, Natural Flavor, DATEM, Dried Parsley, Spice, Brandy, Tuna Extract, Yeast Extract, Corn Protein (hydrolyzed)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Beef & Vegetable (Soup)',
                        ingredients: 'Beef Broth, Cooked Beef, Carrots, Potatoes, Tomatoes, Green Beans, Modified Food Starch, Water, Sugar, Onion, Soy and Corn Proteins (hydrolyzed), Salt, Sherry Wine with Potassium Sorbate (preservative), Yeast Extract, Soybean Oil, Potassium Chloride, Juice Concentrates (carrot, celeriac, red beet, lettuce, spinach, citric acid, natural flavor), Natural Flavor, Caramel Color, Garlic Powder, Dried Parsley, Toasted Onion Powder, Beef Fat, Beef Extract, Sodium Phosphate, Citric Acid, Spice, Calcium Chloride, Paprika'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Beef Barley (Soup)',
                        ingredients: 'Water, Beef Broth, Cooked Beef, Carrots, Barley, Peas, Tomato Paste, Tomatoes, Celery, Potatoes, Corn, Modified Food Starch, Soybean Oil, Sugar, Salt, Soy Protein (hydrolyzed), Caramel Color, Spice, Sodium Phosphate, Corn Oil, Yeast Extract, Garlic Powder, Potato Flour, Natural Flavor, Onion Powder, Maltodextrin, Calcium Chloride, Citric Acid'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chickarina© with Meatballs (Soup)',
                        ingredients: "Chicken Broth, Meatballs (beef, pork, water, soy protein concentrate, bread crumbs [bleached wheat flour, dextrose, salt, yeast], salt, egg white, romano cheese [made from sheep's milk, cheese cultures, salt, enzymes], parsley (dried), garlic powder, natural flavor), Enriched Pasta (semolina wheat, egg whites, niacin [B Vitamin], ferrous sulfate [iron], thiamin mononitrate [B Vitamin], riboflavin [B Vitamin], folic acid [B Vitamin]), Carrots, Celery, Cooked White Chicken Meat, Carrot Puree, Water, Corn Protein (hydrolyzed), Salt, Chicken Fat, Potassium Chloride, Yeast Extract, Sugar, Onion Powder, Modified Food Starch, Soy Protein Isolate, Parsley (dried), Sodium Phosphate, Natural Flavor"
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken & Orzo with Lemon (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Orzo Pasta (semolina wheat, egg white (dried)), Spinach, Red Bell Peppers, Modified Food Starch, Water, Onion, Salt, Maltodextrin, Corn Protein (hydrolyzed), Potassium Chloride, Yeast Extract, Lemon Juice Concentrate, Soy Protein Isolate, Chicken Fat, Onion Powder, Sugar, Garlic (dried), Olive Oil, Natural Flavor, Sodium Phosphate, Safflower Oil, Celery Juice Concentrate, Citric Acid, Parsley (dried), Fermented Whey, Celery Juice, Extractives of Turmeric, Spices, Egg Yolk, Potassium Sorbate (preservative)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken & Sausage Gumbo (Soup)',
                        ingredients: 'Chicken Broth, Rice, Cooked White Chicken Meat, Andouille Cooked Sausage Made with Pork and Beef (pork, beef, water, corn syrup solids, salt, spice, dextrose, lemon juice concentrate, sodium erythorbate, natural flavor, sodium nitrite, extractives of paprika), Celery, Tomatoes, Tomato Paste, Okra, Green Sweet Peppers, Red Bell Peppers, Modified Food Starch, Water, Maltodextrin, Carrot Puree, Salt, Corn and Soy and Wheat Proteins (hydrolyzed), Onions, Spice, Potassium Chloride, Dextrose, Garlic Powder, Onion Powder, Soy Protein Isolate, Sugar, Yeast Extract, Dried Parsley, Sodium Phosphate, Citric Acid, Calcium Chloride, Natural Flavor, Caramel Color'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken & Wild Rice (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Tomatoes, Wild Rice, Rice, Celery, Water, Modified Food Starch, Salt, Chicken Fat, Corn Protein (hydrolyzed), Carrot Puree, Potassium Chloride, Yeast Extract, Sugar, Soy Protein Isolate, Sodium Phosphate, Dried Parsley, Calcium Chloride, Citric Acid, Natural Flavor, Maltodextrin, Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken Barley (Soup)',
                        ingredients: 'CHICKEN BROTH, CARROTS, COOKED WHITE CHICKEN MEAT, BARLEY, CELERY, PEAS, WATER, TOMATO PASTE, MODIFIED FOOD STARCH, SALT, CARROT PUREE, CHICKEN FAT, CORN PROTEIN (HYDROLYZED), POTASSIUM CHLORIDE, SOY PROTEIN ISOLATE, SUGAR, YEAST EXTRACT, SODIUM PHOSPHATE, DRIED PARSLEY, SPICE, GARLIC POWDER, NATURAL FLAVOR, MALTODEXTRIN, BETA CAROTENE (COLOR)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken Cheese Enchilada Flavor (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Tomatoes, Celery, Onions, Soybean Oil, Green Sweet Peppers, Cream Cheese (milk, cream, cheese cultures, salt, carob bean gum), Modified Food Starch, Water, Cheddar Cheese (milk, cheese cultures, salt, enzymes), Soy Protein Concentrate, Sodium Phosphate, Salt, Cream, Red Bell Peppers (dried), Potassium Chloride, Sugar, Xanthan Gum, Chicken Fat, DATEM, Corn Protein (hydrolyzed), Soy Protein Isolate, Partially Hydrogenated Soybean Oil, Chives (dried), Maltodextrin, Tomato Powder, Spice, Onion (dried), Garlic (dried), Yeast Extract, Natural Flavor, Colored with Annatto Extract, Paprika Extract and Beta Carotene, Vinegar, Calcium Chloride, Citric Acid, Sorbic Acid (preservative), Lactic Acid'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken Noodle (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Egg Noodle (wheat flour, semolina wheat, egg (dried)), Celery, Water, Modified Food Starch, Salt, Chicken Fat, Corn Protein (hydrolyzed), Egg White (dried), Potassium Chloride, Carrot Puree, Soy Protein Isolate, Onion Powder, Sugar, Maltodextrin, Sodium Phosphate, Yeast Extract, Garlic Powder, Chives (dried), Parsley (dried), Natural Flavor, Spice, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken Noodle 99% Fat Free (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Egg Noodle (wheat flour, semolina wheat, egg (dried)), Celery, Modified Food Starch, Water, Salt, Chicken Fat, Corn Protein (hydrolyzed), Egg White (dried), Carrot Puree, Potassium Chloride, Onion Powder, Sugar, Soy Protein Isolate, Maltodextrin, Yeast Extract, Sodium Phosphate, Garlic Powder, Parsley (dried), Chives (dried), Natural Flavor, Spice, Egg Yolk (dried), Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken Rice with Vegetables (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Celery, Rice, Potatoes, Tomatoes, Water, Modified Food Starch, Salt, Chicken Fat, Corn Protein (hydrolyzed), Carrot Puree, Potassium Chloride, Onion Powder, Sugar, Soy Protein Isolate, Maltodextrin, Yeast Extract, Sodium Phosphate, Garlic Powder, Dried Parsley, Spice, Calcium Chloride, Citric Acid, Natural Flavor, Egg Yolk, Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Chicken Tortilla (Soup)',
                        ingredients: 'Chicken Broth, Tomatoes, Cooked White Chicken Meat, Onions, Red Bell Peppers, Green Sweet Peppers, Corn, Black Beans, Toasted Corn Flour, Modified Food Starch, Water, Tomato Paste, Salt, Chicken Fat, Sugar, Spice, Cilantro, Potassium Chloride, Chili Pepper (dried), Soy Protein Isolate, Onion Powder, Maltodextrin, Garlic Powder, Sodium Phosphate, Parsley (dried), Chipotle Pepper (dried), Calcium Chloride, Yeast Extract, Citric Acid, Natural Flavor, Egg Yolk (dried)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Hearty Chicken & Rotini (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Carrots, Rotini Pasta (wheat flour, semolina wheat, egg white (dried)), Celery, Modified Food Starch, Water, Chicken Fat, Salt, Corn Protein (hydrolyzed), Carrot Puree, Potassium Chloride, Yeast Extract, Sugar, Maltodextrin, Soy Protein Isolate, Sodium Phosphate, Chives (dried), Natural Flavor, Parsley (dried), Citric Acid, Egg Yolk (dried), Garlic Powder, Onion Powder, Spice, Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Homestyle Chicken with Vegetables and Pearl Pasta (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Acini De Pepe Pasta (semolina wheat, egg whites), Cooked White Chicken Meat, Celery, Water, Modified Food Starch, Salt, Chicken Fat, Corn Protein (hydrolyzed), Carrot Puree, Potassium Chloride, Sugar, Soy Protein Isolate, Onion Powder, Maltodextrin, Yeast Extract, Sodium Phosphate, Garlic Powder, Dried Parsley, Natural Flavor, Egg Yolk, Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Italian-Style Wedding (Soup)',
                        ingredients: "Chicken Broth, Cooked Meatballs (pork, beef, water, eggs, textured soy protein [soy protein concentrate, caramel color], romano cheese [made from sheep's milk, cultures, salt, enzymes], bread crumbs [bleached wheat flour, dextrose, salt, yeast], corn syrup, onion, soy protein concentrate, salt, spice, sodium phosphate, garlic powder, dried parsley, onion powder, natural flavor), Carrots, Tubetti Pasta (semolina wheat, egg whites), Spinach, Onions, Modified Food Starch, Salt, Corn Protein (hydrolyzed), Chicken Fat, Carrot Puree, Potassium Chloride, Yeast Extract, Sugar, Spice, Garlic Powder, Natural Flavor, Maltodextrin, Beta Carotene (color)"
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Manhattan Clam Chowder (Soup)',
                        ingredients: 'Water, Carrots, Clams, Potatoes, Tomato Paste, Celery, Modified Food Starch, Soybean Oil, Salt, Sugar, Soy Protein Concentrate, Potassium Chloride, Dried Parsley, Sodium Phosphate, Natural Flavor, Yeast Extract'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Meatball & Rice (Soup)',
                        ingredients: 'Water, Cooked Meatballs (pork, beef, onion, cooked white rice, egg (dried), breadcrumbs [bleached wheat flour, yeast, sugar, salt], water, seasoning [onion powder, garlic powder, spice, corn syrup, parsley (dried), rosemary extract, potato maltodextrin], salt), Tomatoes, Rice, Carrots, Tomato Paste, Corn, Onions, Beef Broth, Green Sweet Peppers, Modified Food Starch, Salt, Corn Protein (hydrolyzed), Sugar, Soybean Oil, Potassium Chloride, Maltodextrin, Yeast Extract, Spice, Garlic Powder, Natural Flavor, Caramel Color, Beef Fat, Beef Extract, Toasted Onion Powder, Calcium Chloride, Onion Powder, Citric Acid, Paprika, Xanthan Gum, Chicken (dried), Chicken Broth, Paprika Extract (color), Chicken Fat, Natural Smoke Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional New England Clam Chowder (Soup)',
                        ingredients: 'Clam Broth, Potatoes, Clams, Soybean Oil, Water, Modified Food Starch, Onions, Soy Protein Concentrate, Sugar, Salt, Cream, Butter, Sodium Phosphate, Potassium Chloride, Artificial Color, DATEM, Natural Flavor, Parsley (dried), Celery (dried), Yeast Extract, Spice'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Potato Broccoli & Cheese Chowder (Soup)',
                        ingredients: 'Chicken Broth, Potatoes (dried), Broccoli, Soybean Oil, Modified Food Starch, Cream Cheese (milk, cream, cheese cultures, salt, carob bean gum), Cheddar Cheese (milk, cheese cultures, salt, enzymes), Soy Protein Concentrate, Cream, Sodium Phosphate, Salt, Partially Hydrogenated Soybean Oil, Potassium Chloride, Whey, Sugar, Cheddar Cheese (milk, cheese cultures, salt, enzymes) (dried), Chicken Fat, DATEM, Corn Protein (hydrolyzed), Nonfat Milk, Natural Flavor, Cheddar Cheese (milk, cheese cultures, salt, calcium chloride, enzymes), Spices, Yeast Extract, Artificial Color, Vinegar, Blue Cheese (milk, cheese cultures, salt, enzymes) (dried), Sorbic Acid (preservative), Lactic Acid, Yellows 5 & 6'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Roasted Chicken Primavera (Soup)',
                        ingredients: "Chicken Broth, Cooked White Chicken Meat, Carrots, Gemelli Pasta (semolina wheat, egg white (dried)), Zucchini, Cream, Red Bell Peppers, Modified Food Starch, Water, Onion, Salt, Corn Protein (hydrolyzed), Potassium Chloride, Chablis Wine, Maltodextrin, Onion Powder, Chicken Fat, Soy Protein Isolate, Garlic (dried), Yeast Extract, Olive Oil, Romano Cheese (made from cow's milk, cheese cultures, salt, enzymes), Sodium Phosphate, Garlic Powder, Buttermilk (dried), Sugar, Basil, Oregano, Natural Flavor, Spice, Extractives of Turmeric, Whey (dried), Egg Yolk, Enzyme Modified Romano Cheese (made from cow's milk, cheese cultures, salt, enzymes), Enzyme Modified Cheddar Cheese (cultured milk, salt, enzymes)"
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Roasted Chicken Rotini (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Carrots, Corn, Rotini Pasta (wheat flour, semolina wheat, egg white (dried)), Tomatoes, Celery, Modified Food Starch, Green Beans, Water, Carrot Puree, Peas, Salt, Red Bell Peppers, Chicken Fat, Corn Protein (hydrolyzed), Natural Flavor, Potassium Chloride, Onion Powder, Sugar, Soy Protein Isolate, Yeast Extract, Whey, Sodium Phosphate, Toasted Onion Powder, Garlic Powder, Parsley (dried), Citric Acid, Calcium Chloride'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Roasted Garlic Chicken (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Chicken Meat, Green Beans, Corn, Penne Rigate Pasta (wheat flour, semolina wheat, egg white (dried)), Celery, Tomatoes, Modified Food Starch, Water, Salt, Red Bell Peppers, Chicken Fat, Corn Protein (hydrolyzed), Garlic, Potassium Chloride, Sugar, Onion Powder, Soy Protein Isolate, Maltodextrin, Garlic (dried), Yeast Extract, Sodium Phosphate, Parsley (dried), Citric Acid, Natural Flavor, Calcium Chloride, Egg Yolk, Beta Carotene (color)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Southwestern Style Chicken (Soup)',
                        ingredients: 'Chicken Broth, Cooked White Chicken Meat, Corn, Tomatoes, Rice, Green Sweet Peppers, Black Beans, Water, Corn (dried), Tomato Paste, Modified Food Starch, Salt, Chicken Fat, Corn Protein (hydrolyzed), Onion, Potassium Chloride, Yeast Extract, Cilantro, Sugar, Onion Powder, Garlic Powder, Spice, Soy Protein Isolate, Chili Pepper (dried), Natural Flavor, Sodium Phosphate, Maltodextrin, Calcium Chloride, Citric Acid'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Split Pea with Ham (Soup)',
                        ingredients: 'Water, Split Peas, Cooked Ham Water Added (cured with water, salt, dextrose, sodium phosphate, natural smoke flavor, sodium erythorbate, sodium nitrite), Carrots, Potatoes, Peas, Celery, Modified Food Starch, Carrot Puree, Salt, Onions, Soy and Corn Proteins (hydrolyzed), Sugar, Dried Parsley, Spice, Yeast Extract, Onion Powder, Garlic Powder, Natural Smoke Flavor, Maltodextrin, Natural Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Traditional Turkey Noodle (Soup)',
                        ingredients: 'Chicken Broth, Carrots, Cooked White Turkey Meat, Celery, Egg Noodle (wheat flour, semolina wheat, egg (dried)), Mushrooms, Modified Food Starch, Water, Carrot Puree, Salt, Corn Protein (hydrolyzed), Egg White (dried), Potassium Chloride, Onion Powder, Sugar, Maltodextrin, Yeast Extract, Parsley (dried), Soy Protein Isolate, Sodium Phosphate, Fennel Seed, Natural Flavor, Egg Yolk (dried)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Creamy Mushroom (Soup)',
                        ingredients: 'Water, Portabella Mushrooms, Soybean Oil, Modified Food Starch, Cream, Soy Protein Concentrate, Mushroom Extract, Salt, Butter, Sugar, Sodium Phosphate, Modified Whey Protein Concentrate, Dried Parsley, Onion Powder, Garlic Powder, Yeast Extract, Spice'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics French Onion (Soup)',
                        ingredients: 'Beef Broth, Water, Onion, Modified Food Starch, Sugar, Salt, Corn Protein (hydrolyzed), Butter, Potassium Chloride, Yeast Extract, Toasted Onion Powder, Caramel Color, Natural Flavor, Beef Fat, Beef Extract, Dried Parsley, Spice, Paprika'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Garden Vegetable (Soup)',
                        ingredients: 'Water, Potatoes, Carrots, Tomato Puree (water, tomato paste), Tomatoes, Corn, Celery, Kidney Beans, Green Beans, Modified Food Starch, Salt, Sugar, Vegetable Juice Concentrates (carrot, celeriac, red beet, lettuce, spinach, citric acid, natural flavor), Onion, Potassium Chloride, Corn Protein (hydrolyzed), Dried Parsley, Spice, Citric Acid, Natural Flavor, Calcium Chloride, Yeast Extract'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Green Split Pea (Soup)',
                        ingredients: 'Water, Peas, Split Peas, Celery, Bacon (pork cured with water, salt, sugar, sodium phosphate, sodium erythorbate, sodium nitrite), Modified Food Starch, Sugar, Salt, Potassium Chloride, Corn Protein (hydrolyzed), Malted Barley Flour, Yeast Extract, Spice, Natural Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Hearty Black Bean (Soup)',
                        ingredients: 'WATER, BLACK BEANS, TOMATO PASTE, CELERY, MODIFIED FOOD STARCH, SHERRY WINE WITH POTASSIUM SORBATE (PRESERVATIVE), SALT, BACON (PORK CURED WITH WATER, SALT, SUGAR, SODIUM PHOSPHATE, SODIUM ERYTHORBATE, SODIUM NITRITE), SOY PROTEIN (HYDROLYZED), POTASSIUM CHLORIDE, SUGAR, SPICE, YEAST EXTRACT, NATURAL FLAVOR, ONION POWDER, NATURAL SMOKE FLAVOR'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Hearty Penne (Soup)',
                        ingredients: 'Chicken Broth, Penne Rigate Pasta (wheat flour, semolina wheat, egg white (dried)), Carrots, Celery, Carrot Puree, Salt, Chicken Fat, Corn Protein (hydrolyzed), Xanthan Gum, Potassium Chloride, Onion Powder, Sugar, Yeast Extract, Parsley (dried), Natural Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Hearty Tomato (Soup)',
                        ingredients: 'Tomato Puree (water, tomato paste), Water, Tomatoes, Sugar, Corn Syrup Solids, Wheat Flour Bleached, Salt, Modified Food Starch, Olive Oil, Potassium Chloride, Yeast Extract, Dried Parsley, Corn Protein (hydrolyzed), Maltodextrin, Garlic Powder, Spices, Calcium Chloride, Citric Acid, Ascorbic Acid, Onion Powder, Extractives of Turmeric, Natural Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Lentil (Soup)',
                        ingredients: 'Water, Lentils, Celery, Tomato Paste, Modified Food Starch, Spinach, Salt, Soybean Oil, Sugar, Natural Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Lentil 99% Fat Free (Soup)',
                        ingredients: 'Water, Lentils, Celery, Tomato Paste, Modified Food Starch, Spinach, Salt, Soybean Oil, Sugar, Natural Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Macaroni & Bean (Soup)',
                        ingredients: "Water, Great Northern Beans, Macaroni (semolina wheat, egg whites), Celery, Tomato Paste, Soybean Oil, Salt, Romano Cheese (made from part skim cow's milk, cheese cultures, salt, enzymes), Potassium Chloride, Sugar, Corn Protein (hydrolyzed), Yeast Extract, Natural Flavor"
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Minestrone (Soup)',
                        ingredients: 'Water, Tomato Paste, Carrots, Celery, Light Red Kidney Beans, Potatoes, Green Beans, Peas, Penne Rigate Pasta (wheat flour, semolina wheat, egg whites (dried)), Spinach, Garbanzo Beans, Modified Food Starch, Salt, Soybean Oil, Sugar, Potassium Chloride, Yeast Extract, Spices, Parsley (dried), Corn Protein (hydrolyzed), Natural Flavor, Maltodextrin, Citric Acid, Garlic Powder, Olive Oil, Extractives of Turmeric, Milk'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Minestrone 99% Fat Free (Soup)',
                        ingredients: 'Water, Tomato Paste, Carrots, Celery, Light Red Kidney Beans, Potatoes, Green Beans, Peas, Penne Rigate Pasta (wheat flour, semolina wheat, egg whites (dried)), Spinach, Garbanzo Beans, Modified Food Starch, Salt, Soybean Oil, Sugar, Potassium Chloride, Yeast Extract, Spices, Parsley (dried), Corn Protein (hydrolyzed), Natural Flavor, Maltodextrin, Citric Acid, Garlic Powder, Olive Oil, Extractives of Turmeric, Milk'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Tomato Basil (Soup)',
                        ingredients: 'Tomato Puree (water, tomato paste), Water, Sugar, Corn Syrup Solids, Wheat Flour Bleached, Soybean Oil, Modified Food Starch, Salt, Potassium Chloride, Garlic Powder, Dried Parsley, Basil, Ascorbic Acid, Citric Acid, Natural Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Tomato Rotini (Soup)',
                        ingredients: 'Tomato Puree (water, tomato paste), Water, Tomatoes, Rotini Pasta (wheat flour, semolina wheat, egg white (dried)), Sugar, Corn Syrup Solids, Salt, Wheat Flour Bleached, Modified Food Starch, Potassium Chloride, Olive Oil, Parsley (dried), Garlic Powder, Spices, Citric Acid, Calcium Chloride, Ascorbic Acid, Onion Powder, Extractives of Turmeric, Natural Flavor'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Vegetable (Soup)',
                        ingredients: 'Chicken Broth, Tomato Puree (water, tomato paste), Carrots, Celery, Peas, Corn, Green Beans, Potatoes, Rotini Pasta (wheat flour, semolina wheat, egg white (dried)), Carrot Puree, Tomatoes, Salt, Modified Food Starch, Corn Protein (hydrolyzed), Potassium Chloride, Red Bell Peppers, Sugar, Onion, Yeast Extract, Spice, Natural Flavor, Parsley (dried), Citric Acid, Calcium Chloride, Egg Yolk (dried)'
                    },
                    {
                        brandname: 'Progresso',
                        productname: 'Vegetable Classics Vegetable Italiano (Soup)',
                        ingredients: 'Water, Green Beans, Tomato Paste, Zucchini, Carrots, Pasta (semolina wheat, egg whites), Sugar, Salt, Wheat Flour Bleached, Soybean Oil, Green Bell Peppers, Red Bell Peppers, Onion Powder, Potassium Chloride, Corn Protein (hydrolyzed), Garlic Powder, Yeast Extract, Spice, Natural Flavor'
                    },
                    {
                        brandname: "Amy's",
                        productname: 'Cream of Mushroom Soup (Soup)',
                        ingredients: 'filtered water, organic mushrooms, organic onions, organic wheat flour, organic high oleic safflower and/or sunflower oil, organic leeks, organic grade AA butter (cream, salt, annatto [color]), organic cream, spices (100% pure herbs & spices (no hidden ingredients)), sea salt, organic garlic, organic black pepper'
                    },
                    {
                        brandname: "Campbell's",
                        productname: 'Cream of Mushroom Soup (Soup)',
                        ingredients: 'water, mushrooms, Modified Food Starch, wheat flour, salt, cream, dried whey, Monosodium Glutamate, soy protein concentrate, yeast extract, spice extract, dehydrated garlic, vegetable oil'
                    }
                    
                ]

for (var item in productArray) {
    pc.saveProduct(productArray[item]);
}


