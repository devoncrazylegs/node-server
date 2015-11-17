// Load MongoDB models
var Beer = require('../models/Beer.js');

// Post Beers
exports.postBeers = function(req, res) {
    var beer = new Beer();

    beer.name     = req.body.name;
    beer.type     = req.body.type;
    beer.quantity = req.body.quantity;
    beer.userId   = req.user._id;

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
    Beer.find({userId : req.user._id}, function(err, beers) {
        if(err) {
            res.send(err);s
        } else {
            res.json(beers);
        }
    });
};

// Get Beer
exports.getBeer = function(req, res) {
    Beer.find({ userId : req.user._id, _id : req.params.beer_id}, function(err, beer) {
        if(err) {
            res.send(err);
        } else {
            res.json(beer);
        }
    });
};

// Put Beer
exports.putBeer = function(req, res) {
    // Use the Beer model to find a specific beer
    Beer.update({
        userId : req.user._id,
        _id    : req.params.beer_id
    }, {
        quantity : req.body.quantity
    }, function(err, num, raw) {
        if (err)
            res.send(err);

        res.json({ message: num + ' updated' });
    });
};

// Create endpoint /api/beers/:beer_id for DELETE
exports.deleteBeer = function(req, res) {
    // Use the Beer model to find a specific beer and remove it
    Beer.remove({ userId: req.user._id, _id: req.params.beer_id }, function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Beer removed from the locker!' });
    });
};