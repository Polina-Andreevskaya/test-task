angular.module('testTask')
    .directive('citiesSelection', function () {
        return {
            restrict: 'A',
            templateUrl: 'templates/citiesSelection.html',
            scope: {
                visibleCities: '='
            },
            controller: function ($scope, httpService, citiesDataService) {
                $scope.data = citiesDataService;
                $scope.addCity = function () {
                    if ($scope.data.model !== '') {
                        var id = +$scope.data.model - 1;

                        for (var i = 0; i < $scope.visibleCities.length; i++) {
                            if ($scope.data.model === $scope.visibleCities[i].id) {
                                return;
                            }
                        }

                        $scope.visibleCities.push(
                            httpService.getFromList($scope.data.cities[id])
                        );
                        $scope.data.model = '';

                    }
                };
            }

        }
    });