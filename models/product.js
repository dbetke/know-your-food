var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var ProductSchema = new Schema({
//define fields
  brandname        : {type: String,  uppercase: true},
  productname      : {type: String,  uppercase: true},
  ingredients      : {type: [String],lowercase: true}
  
});

var Product = mongoose.model('Product', ProductSchema); // (model name , schema being used)

module.exports = Product; //then can require this in program and will have access to the Product model