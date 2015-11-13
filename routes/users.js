var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');

router.post('/', function(req, res, next) {
    userController.postUsers(req, res);
});

router.get('/', function(req, res, next) {
    userController.getUsers(req, res);
});

module.exports = router;