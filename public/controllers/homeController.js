define([], function() {
    'use strict';

    function homeController($scope) {
        $scope.test = "hreere";
    }

    homeController.$inject = ['$scope'];

    return homeController;
});