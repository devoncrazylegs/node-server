var express = require('express');
var router = express.Router();

// Load MongoDB models
var Beer = require('../models/Beer.js');

// Get all beers
router.get('/beer', function(req, res, next) {
    Beer.find(function(err, beers) {
        if(err) {
            res.send(err);s
        } else {
            res.json(beers);
        }
    });
});

// Get a single beer
router.get('/beer/:beer_id', function(req, res, next) {
    Beer.findById(req.params.beer_id, function(err, beer) {
        if(err) {
            res.send(err);
        } else {
            res.json(beer);
        }
    });
});

// Add a beer to the mongodb
router.post('/beer', function(req, res, next) {
    var beer = new Beer();

    beer.name = req.body.name;
    beer.type = req.body.type;
    beer.quantity = req.body.quantity;

    beer.save(function(err) {
        if(err) {
            res.send(err);
        } else {
            res.json({ message: 'Beer added to the locker!', data: beer });
        }
    });
});

module.exports = router;