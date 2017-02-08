angular.module('testTask')
    .directive('weatherContainer', function () {
        return {
            restrict: 'AE',
            templateUrl: 'templates/weatherContainer.html',
            controller: function ($scope) {
                $scope.visibleCities = [];
            }
        }
    });