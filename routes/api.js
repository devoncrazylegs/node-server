var express = require('express');
var router = express.Router();
var beerController = require('../controllers/beer');

// Get all beers
router.get('/beer', function(req, res, next) {
    beerController.getBeers(req, res);
});

// Get a single beer
router.get('/beer/:beer_id', function(req, res, next) {
    beerController.getBeer(req, res);
});

// Add a beer to the mongodb
router.post('/beer', function(req, res) {
    beerController.getBeer(req, res);
});

// Update a beer
router.put('/beer/:beer_id', function(req, res) {
    beerController.getBeer(req, res);
});

// Delete a beer
router.put('/beer/:beer_id', function(req, res) {
    beerController.deleteBeer(req, res);
});

module.exports = router;