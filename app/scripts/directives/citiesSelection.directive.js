angular.module('testTask')
    .directive('formDirective', function () {
        return {
            restrict: 'A',
            templateUrl: 'templates/citiesSelection.html',
            controller: 'selectionCtrl'
        }
    });