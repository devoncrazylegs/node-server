// Load MongoDB Mongoose User Model
var User = require('../models/User');

// Post endpoint for users
exports.postUsers = function(req, res) {
    var user = new User({
        username : req.body.username,
        password : req.body.password
    });

    user.save(function(err) {
        if(err) {
            res.send(err);
        } else {
            res.json({ message: 'New beer drinker added to the locker room!' });
        }
    });
};

// Get endpoint for users
exports.getUsers = function(req, res) {
    User.find(function(err, users) {
        if(err) {
            res.send(err);
        } else {
            res.json(users);
        }
    });
};

exports.getUser = function(req, res) {
    User.find({
        username : req.params.username
    }, function(err, user) {
        if(err) {
            res.send(err);
        } else {
            res.json(user);
        }
    });
};