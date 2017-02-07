angular.module('testTask')
    .controller('listCtrl', function ($scope, httpService) {
        $scope.removeCity = function (element) {
            _.remove($scope.visibleCities, function (el) {
                return el.id === element.id;
            });
        };

        $scope.updateCity = function (element) {
            httpService.setParams($scope.data.keyDarkSky, element);
            httpService.getFromList(true);
        }
    });
