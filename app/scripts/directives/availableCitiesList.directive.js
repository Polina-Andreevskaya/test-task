angular.module('testTask')
    .directive('formDirective', function () {
        return {
            restrict: 'A',
            templateUrl: 'templates/availableCitiesList.html',
            scope: {
                data: '=staticData',
                visibleCities: '='
            },
            controller: function ($scope, httpService) {
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