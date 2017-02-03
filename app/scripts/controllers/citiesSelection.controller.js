angular.module('testTask')
    .controller('selectionCtrl', ['$scope', '$http', 'dataService', function ($scope, $http, dataService) {

        $scope.data = dataService.data;

        $scope.visibleElements = [];

        $scope.addCity = function () {

            if (+$scope.data.model !== 0) {
                for (var i = 0; i < $scope.visibleElements.length; i++) {
                    if ($scope.data.model === $scope.visibleElements[i].id) {
                        return;
                    }
                }
                $scope.visibleElements.push($scope.data.options[+$scope.data.model]);
            }

            $http({
                method: 'JSONP',
                url: 'https://api.darksky.net/forecast/cf90e9c76e3824d5e9a3745330bb3481/37.8267,-122.4233',
                params: {
                    units: 'si',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
                console.log('Error', response);
            });


        };
    }]);

