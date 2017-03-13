
var mongoose = require('mongoose');

//Create the mongoose Schema
var animalSchema = mongoose.Schema({
  color: String,
  size: String,
  type: String,
  price: Number
});
//Create the Mongoose Model
var Animal = mongoose.model('Animal', animalSchema);
module.exports =Animal;
