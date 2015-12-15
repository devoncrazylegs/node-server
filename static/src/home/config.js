'use strict';
define([], function() {
    function config($routeProvider) {
        $routeProvider
            .when('/', { templateUrl : '/src/home/templates/template.jade', controller: 'HomeController'})
            .otherwise({redirectTo: '/'});
    }

    config.$inject = ['$routeProvider'];

    return config;
});