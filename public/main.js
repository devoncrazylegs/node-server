"use strict";

(function(require) {
    require([
        '/assets/requiredPathsAndShim.js',
        'config.js',
        '/controllers/homeController.js'
    ], function(
        requiredPathsAndShim,
        config,
        homeController
    ) {
        require.config({
            maps : {
                // Maps
            },
            paths : requiredPathsAndShim.paths,
            shim : {
                // Modules and their dependent modules
            }
        }, function() {
            angular.bootstrap(document, [function() {
                var app = angular.module('myApp', [])
                    .config(config)
                    .controller('homeController', homeController);
            }]);
        });
    });
})(require);