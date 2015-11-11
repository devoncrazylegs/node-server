'use strict';
(function() {
    define([], function() {

        function HomeController($scope) {
            $scope.test = "here i am";
        }

        HomeController.$inject = ['$scope'];

        return HomeController;
    });
})();