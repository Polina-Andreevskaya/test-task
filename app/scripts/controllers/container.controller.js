angular.module('testTask')
    .controller('containerCtrl', function ($scope, staticData) {
        $scope.data = staticData;
        $scope.visibleCities = [];
    });