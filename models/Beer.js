var mongoose = require('mongoose');

//Define beer schema
var BeerSchema = new mongoose.Schema({
    name     : String,
    type     : String,
    quantity : Number,
    userId   : String
});

module.exports = mongoose.model('Beer', BeerSchema);