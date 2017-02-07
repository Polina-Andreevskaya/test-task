angular.module('testTask')
    .controller('selectionCtrl', ['$scope', 'staticDataService', 'httpService', function ($scope, staticDataService, httpService) {
        $scope.data = staticDataService.getData();

        $scope.addCity = function () {
            if ($scope.data.model !== '') {
                var id = +$scope.data.model - 1;

                if ($scope.data.cities[id].visible) {

                    return;
                }

                httpService.setParams($scope.data.keyDarkSky, $scope.data.cities[id]);
                $scope.data.cities[id] = httpService.getFromList();
                $scope.data.model = '';
            }
        };
    }]);
