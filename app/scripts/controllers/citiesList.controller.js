angular.module('testTask')
    .controller('listCtrl', ['$scope', 'httpService', function ($scope, httpService) {
        $scope.removeCity = function (element) {
            element.visible = false;
        };

        $scope.updateCity = function (element) {
           httpService.setParams($scope.data.keyDarkSky, element);
           httpService.getFromList();
        }
    }]);
