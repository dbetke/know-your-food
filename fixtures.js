var ProductController = require('./controllers/products');
var mongoose = require('mongoose');

var mongoServer = 'mongodb://localhost/Products';

mongoose.connect(mongoServer);

//THIS IS TESTING THE ABILITY TO SAVE PRODUCTS TO THE DATABASE FROM A SCRIPT FILE RATHER THAN FROM THE WEB PAGE.  IN PROGRESS. ADDED THE TEST PRODUCT SUCCESSFULLY.
ProductController.saveProducts({ brandname: 'testbrand', productname: 'testproduct', ingredients: 'test ingredient 1, test ingredient 2' }, function(res){
    console.log(res);
});
