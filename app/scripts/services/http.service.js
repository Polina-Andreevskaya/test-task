angular.module('testTask')
    .factory('httpService', function ($http, httpDataService) {

        var skycons = new Skycons({"color": "black"});

        function getFromList (obj) {
            if (obj) {
                $http({
                    method: 'JSONP',
                    url: httpDataService.getUrl(obj.coords),
                    params: {
                        units: 'si',
                        callback: 'JSON_CALLBACK'
                    }
                }).then(
                    function (response) {
                        obj.temperature = response.data.currently.temperature;
                        skycons.set("icon" + obj.id, response.data.currently.icon);
                        skycons.play();
                    }, function (response) {
                        console.log('Error', response);
                    });

                return obj;
            }
        }

        return {
            getFromList: getFromList
        };
    });
