var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name : String,
    username : String,
    date_created : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Users', UserSchema);