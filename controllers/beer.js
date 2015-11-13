// Load MongoDB models
var Beer = require('../models/Beer.js');

// Post Beers
exports.postBeers = function(req, res) {
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
};

// Get Beers
exports.getBeers = function(req, res) {
    Beer.find(function(err, beers) {
        if(err) {
            res.send(err);s
        } else {
            res.json(beers);
        }
    });
};

// Get Beer
exports.getBeer = function(req, res) {
    Beer.findById(req.params.beer_id, function(err, beer) {
        if(err) {
            res.send(err);
        } else {
            res.json(beer);
        }
    });
};

// Put Beer
exports.putBeer = function(req, res) {
    Beer.findById(req.params.beer_id, function(err, beer) {
        if(err) {
            res.send(err);
        } else {
            beer.quantity = req.body.quantity;

            beer.save(function(err) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(beer);
                }
            });
        }
    });
};

// Delete Beer
exports.deleteBeer = function(req, res) {
    Beer.findByIdAndRemove(req.params.beer_id, function(err, beer) {
        if(err) {
            res.send(err);
        } else {
            res.json({ message: "Beer has need removed" });
        }
    });
};