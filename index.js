var express = require('express');
var server = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

//connect to the database
mongoose.connect(mongoURI);
//Create the mongoose Scema
var animalSchema = mongoose.Schema({
  color: String,
  size: String,
  type: String,
  price: Number
});
//Create the Mongoose Model
var Animal = mongoose.model('Animal', animalSchema);
//Testing database stuff
// var donkey = new Animal({
//   color: 'gray',
//   size: 'MED',
//   type: 'donkey',
//   price: 180
// });
// donkey.save(function(err, data){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//GET /animals
server.get('/animals', function(req, res){
  Animal.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });

    } else {
      res.status(200).json({
        animals: documents
      });
    }
  });
});

//GET /animals/:id
server.get('/animals/:id', function(req, res){
  Animal.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
       msg: err
      });
    } else {
      res.status(200).json({
        animals: documents
      });
    }
  });
});
//POST /animals
//PUT /animals/:id
//DELETE /animals/:id

server.listen(port, function(){
  console.log('Now listening on port...', port);
})
