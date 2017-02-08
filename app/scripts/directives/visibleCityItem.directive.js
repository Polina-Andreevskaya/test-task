angular.module('testTask')
    .directive('cityItem', function () {
        return {
            restrict: 'A',
            templateUrl: 'templates/visibleCityItem.html',
            scope: true,
            controller: function ($scope, httpService) {
                $scope.removeCity = function (element) {
                    _.remove($scope.visibleCities, function (el) {
                        return el.id === element.id;
                    });
                };

                $scope.updateCity = function (element) {
                    httpService.getFromList(element);
                }
            }
        }
    });