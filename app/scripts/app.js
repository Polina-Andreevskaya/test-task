var app = angular.module('testTask', []);

app.controller('optCtrl',['$scope','$http', function ($scope, $http) {
    $scope.data = {
        model: '0',
        options: [
            {
                id: '0',
                name: '--Select city--'
            },
            {
                id: '1',
                name: 'Minsk'
            },
            {
                id: '2',
                name: 'Paris'
            },
            {
                id: '3',
                name: 'New York'
            },
            {
                id: '4',
                name: 'London'
            }

        ]
    };
    $scope.visibleElements = [];
    $scope.test = function () {

        if (+$scope.data.model !== 0) {
            for (var i = 0; i < $scope.visibleElements.length; i++) {
                if ($scope.data.model === $scope.visibleElements[i].id) {
                    return;
                }
            }
            $scope.visibleElements.push($scope.data.options[+$scope.data.model]);
        }

        console.log($http.get('https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589'));

    };

    $scope.removeCity = function (element) {
            _.remove($scope.visibleElements, function (el) {
                return el.id === element.id;
            });
    };
}]);

app.directive('formDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/formDirective.html',
        controller: 'optCtrl'
    }
});

app.directive('citiesList', function () {
    return {
        resctict: 'A',
        templateUrl: 'views/citiesList.html',
        controller: 'optCtrl'
    }
});


