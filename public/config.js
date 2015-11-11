define([], function() {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: '/templates/template.jade', controller: 'homeController'})
            .otherwise({redirectTo: '/'});
    }

    config.$inject = ['$routeProvider'];

    return config;
});