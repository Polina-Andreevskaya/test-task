angular.module('testTask')
    .factory('httpService', function ($http, httpData) {

        var skycons = new Skycons({"color": "black"}),
            data = httpData;

        return {
            getFromList: function (obj) {
                if (obj) {
                    $http({
                        method: 'JSONP',
                        url: data.getUrl(obj.coords),
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
        };
    });
