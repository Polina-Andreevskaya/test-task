angular.module('testTask')
    .factory('httpService', ['$http', function ($http) {
        var skycons = new Skycons({"color": "black"}),
            _key,
            _obj;

        skycons.play();

        return {
            setParams: function (key, obj) {
                _key = key;
                _obj = obj;
            },
            getFromList: function () {
                if (_key && _obj) {
                    var url = 'https://api.darksky.net/forecast/' + _key + '/'
                        + _obj.coords + '?exclude=[minutely,hourly,daily,alerts,flags]';

                    $http({
                        method: 'JSONP',
                        url: url,
                        params: {
                            units: 'si',
                            callback: 'JSON_CALLBACK'
                        }
                    }).then(
                        function successCallback(response) {
                            _obj.temperature = response.data.currently.temperature;
                            _obj.visible = true;
                            skycons.set("icon" + _obj.id, response.data.currently.icon);
                        }, function errorCallback(response) {
                            console.log('Error', response);
                        });

                    return _obj;
                }
            }
        };
    }]);
