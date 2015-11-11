'use strict';
(function() {
    define([
        'src/module1/config',
        'src/module1/controllers/HomeController',
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