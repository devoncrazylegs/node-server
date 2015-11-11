define([], function() {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: '/src/module1/templates/template.jade', controller: 'HomeController'})
            .otherwise({redirectTo: '/'});
    }

    config.$inject = ['$routeProvider'];

    return config;
});