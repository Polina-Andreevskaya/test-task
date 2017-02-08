angular.module('testTask')
    .directive('visibleCitiesList', function () {
        return {
            resctict: 'A',
            templateUrl: 'templates/visibleCitiesList.html',
            scope: {
                visibleCities: '='
            }
        }
    });