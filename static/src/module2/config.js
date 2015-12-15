define([], function() {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/', { templateUrl : '/src/module2/templates/template.jade', controller: 'HomeController'})
            .when('/test', { templateUrl : '/src/module2/templates/templatetest.jade', controller: 'TestController'})
            .otherwise({redirectTo: '/'});
    }

    config.$inject = ['$routeProvider'];

    return config;
});