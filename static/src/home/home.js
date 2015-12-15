'use strict';
(function() {
    define([
        'src/home/config',
        'src/module1/controllers/HomeController',
        'ngRoute'
    ], function(
        config,
        HomeController
    ) {
        var appName = 'home';
        var app = angular.module(appName, ['ngRoute']);
            app.controller('HomeController', HomeController);

        app.config(config);
        return appName;
    });
})();