
var express = require('express');
var animalRouter = express.Router();
var Animal = require('../models/animal.model');



//GET /animals
animalRouter.get('/animals', function(req, res){
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
animalRouter.get('/animals/:id', function(req, res){
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
animalRouter.post('/animals', function(req, res){
  var animal = new Animal(req.body);
  animal.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    }  else{
      res.status(201).json({
        msg: "Success"
      });
      }
    });
});


//PUT /animals/:id
animalRouter.put('/animals/:id', function(req, res){
  Animal.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: "Successfully updated"
      });
    }
  });
});


//DELETE /animals/:id
animalRouter.delete('/animals/:id', function(req, res){
  Animal.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        msg: "Successfully delete"
      });
    }
  });
});

module.exports = animalRouter;
