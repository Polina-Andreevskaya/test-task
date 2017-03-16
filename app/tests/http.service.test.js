describe('Http service', function () {

    var $httpBackend;

    beforeEach(module('testTask'));
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        httpDataService = $injector.get('httpDataService');
        //console.log(httpDataService.getUrl('53.9023,27.5619'));
        $httpBackend.whenJSONP(httpDataService.getUrl('test'), {units: 'si', callback: 'JSON_CALLBACK'}).respond({test: 'Test'});
        $httpBackend.expectJSONP(httpDataService.getUrl('test'), {units: 'si', callback: 'JSON_CALLBACK'});

    }));


    it('test', inject(function (httpService) {
        var elem = httpService.getFromList({coords: 'test'});
        console.log(elem);
        $httpBackend.flush();
        expect(elem.test).toEqual('Test');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});