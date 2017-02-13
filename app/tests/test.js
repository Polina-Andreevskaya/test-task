describe('JavaScript addition operator', function () {
    beforeEach(angular.mock.module('testTask'));


    module(function($provide) {
        $provide.constant('citiesDataService', {
            warning: jasmine.createSpy('warning'),
            error: jasmine.createSpy('error')
        });
    });
    // it('adds two numbers together', function () {
    //
    //     expect(1 + 2).toEqual(3);
    // });
});