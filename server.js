
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongodb = require('mongodb')
  , mongoose = require('mongoose');
var app = express();
var db = mongoose.connection;

//Mongoose models
var Product = require('./models/product'); // require model, pull in product model created;

//Controllers
var ProductController = require('./controllers/products');

mongoose.connect('mongodb://localhost/Products') // will create the Products database if it doesn't already exist.

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("mongodb is connected!!");
});

var NewProduct = require('./test/products');

/*
//BUILDS THE NEW PRODUCT DOCUMENT
var newProduct = new Product({'brandname' : 'Progresso', 'productname' : 'Vegetable Classics Creamy Mushroom', 'ingredients' : ['water','portabella mushrooms', 'soybean oil', 'modified food starch', 'cream', 'soy protein concentrate', 'mushroom extract', 'salt', 'butter', 'sugar', 'sodium phosphate', 'modified whey protein concentrate', 'dried parsley', 'onion powder', 'garlic powder', 'yeast extract', 'spice']});
*/

/*
//INSERTS THE NEW PRODUCT INTO THE DATABASE COLLECTION
newProduct.save(function (err, newProduct) {
  if (err) 
    console.log(err);
  console.log("The following was written to the database: \n" + newProduct);
});
*/

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(app.router);
});

//Routes
app.get('/', routes.index);
app.get('/search', routes.search);
app.get('/contribute', routes.contribute);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

app.get('/allproducts', ProductController.showAllProducts);
app.get('/brandsearch/:brandname', ProductController.findProductByBrand);
app.get('/typesearch/:productname', ProductController.findProductByName);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


