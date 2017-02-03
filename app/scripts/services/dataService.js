angular.module('testTask')
    .factory('dataService', function () {
        return {
            data: {
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
            }
        }
    });
