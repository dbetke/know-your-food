
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

app.get('/allproducts', ProductController.showAllProducts); //for testing

app.post('/search', ProductController.findProduct);
app.post('/contribute', ProductController.saveProduct);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

