'use strict';

(function(require) {
    define([
        '/assets/requiredPathsAndShim.js'
    ], function(
        requiredPathsAndShim
    ) {
        require.config({
            baseUrl : '/',
            paths : requiredPathsAndShim.paths,
            shim : {},
            deps : ['src/index']
        });
    });
})(require);