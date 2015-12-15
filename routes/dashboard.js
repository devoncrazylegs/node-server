var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title: moduleRoutes.home.title, appName: moduleRoutes.home.appName});
});

router.get('/module1', function(req, res, next) {
  res.render('index', { title: moduleRoutes.module1.title, appName: moduleRoutes.module1.appName});
});

router.get('/module2', function(req, res, next) {
  res.render('index', { title: moduleRoutes.module2.title, appName: moduleRoutes.module2.appName});
});

router.get('/module3', function(req, res, next) {
  res.render('index', { title: moduleRoutes.module3.title, appName: moduleRoutes.module3.appName });
});

//error handling
router.get('*', function(req, res, next) {
  res.render('error', { title: '404', message: 'Page not found'});
});

module.exports = router;
