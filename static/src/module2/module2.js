'use strict';
(function() {
    define([
        'src/module2/config',
        'src/module2/controllers/HomeController',
        'ngRoute'
    ], function(
        config,
        HomeController
    ) {
        var appName = 'module1';
        var app = angular.module(appName, ['ngRoute']);
        app.controller('HomeController', HomeController);

        app.config(config);

        return appName;
    });
})();