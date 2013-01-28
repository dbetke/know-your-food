var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var ProductSchema = new Schema({
//define fields
  brandname : String,
  productname : String,
  ingredients : [String],
  
});

var Product = mongoose.model('Product', ProductSchema); // (model name , schema being used)

module.exports = Product; //then can require this in program and will have access to the Product model