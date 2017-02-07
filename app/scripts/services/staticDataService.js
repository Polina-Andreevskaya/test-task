angular.module('testTask')
    .factory('staticDataService', function () {

        return {
            getData: function () {

                return {
                    model: '',
                    keyDarkSky: 'cf90e9c76e3824d5e9a3745330bb3481',
                    cities: [
                        {
                            id: '1',
                            name: 'Minsk',
                            coords: '53.9023,27.5619'

                        },
                        {
                            id: '2',
                            name: 'Paris',
                            coords: '48.8566,2.3515'
                        },
                        {
                            id: '3',
                            name: 'New York',
                            coords: '40.7306,-73.9866'
                        },
                        {
                            id: '4',
                            name: 'London',
                            coords: '51.5073,-0.1276'
                        }
                    ]
                };
            }
        };
    });
