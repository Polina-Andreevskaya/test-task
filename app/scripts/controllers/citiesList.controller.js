angular.module('testTask')
    .controller('listCtrl', ['$scope', function ($scope) {

        $scope.removeCity = function (element) {
            _.remove($scope.visibleElements, function (el) {
                return el.id === element.id;
            });
        };
    }]);
