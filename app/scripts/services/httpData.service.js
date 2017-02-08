angular.module('testTask')
    .constant('httpDataService', {
        keyDarkSky: 'cf90e9c76e3824d5e9a3745330bb3481',
        urlPath: 'https://api.darksky.net/forecast/',
        urlExclude: '?exclude=[minutely,hourly,daily,alerts,flags]',
        getUrl: function (coords) {
            return this.urlPath + this.keyDarkSky + '/' + coords + this.urlExclude;
        }
    });
