angular.module('testTask')
    .controller('selectionCtrl', ['$scope', 'staticDataService', 'httpService', function ($scope, staticDataService, httpService) {
        $scope.data = staticDataService.getData();
        $scope.visibleCities = [];

        $scope.addCity = function () {
            if ($scope.data.model !== '') {
                var id = +$scope.data.model - 1;

                for (var i = 0; i < $scope.visibleCities.length; i++) {
                    if ($scope.data.model === $scope.visibleCities[i].id) {
                        return;
                    }
                }

                httpService.setParams($scope.data.keyDarkSky, $scope.data.cities[id]);
                $scope.visibleCities.push(httpService.getFromList());
                $scope.data.model = '';

            }
        };
    }]);
