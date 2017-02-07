angular.module('testTask')
    .directive('container', function () {
        return {
            restrict: 'AE',
            templateUrl: 'templates/container.html',
            controller: 'selectionCtrl'
        }
    });