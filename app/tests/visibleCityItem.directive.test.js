describe('City item directive', function () {
    var suite;
    beforeEach(module('testTask'));
    beforeEach(module('allTemplates'));

    beforeEach(inject(function ($injector) {
        suite = {};
        suite.$rootScope = $injector.get('$rootScope');
        suite.$compile = $injector.get('$compile');
        suite.httpService = $injector.get('httpService');
        suite.parentScope = suite.$rootScope.$new();
        suite.parentScope.visibleCities = [
            {
                id: '1',
                name: 'Minsk',
                coords: '53.9023,27.5619'

            },
            {
                id: '2',
                name: 'Paris',
                coords: '48.8566,2.3515'
            }
        ];

        compileDirective();

        suite.itemScope.city = suite.itemScope.visibleCities[0];
    }));

    function compileDirective() {
        suite.itemElement = '<div city-item></div>';
        suite.itemElement = suite.$compile(suite.itemElement)(suite.parentScope);
        suite.parentScope.$digest();
        suite.itemScope = suite.itemElement.scope();
    }

    it('should do local changes of visibleCities', function () {
        expect(suite.parentScope.visibleCities).toEqual(suite.itemScope.visibleCities);
        suite.itemScope.visibleCities = suite.itemScope.city;
        expect(suite.parentScope.visibleCities).not.toEqual(suite.itemScope.visibleCities);
    });

    it('should remove city from visibleCities', function () {
        expect(suite.itemScope.visibleCities).toContain(suite.itemScope.city);
        suite.itemScope.removeCity(suite.itemScope.city);
        expect(suite.itemScope.visibleCities.length).toEqual(1);
        expect(suite.itemScope.visibleCities).not.toContain(suite.itemScope.city);

    });

    it('should update city from visibleCities', function () {
        spyOn(suite.httpService, 'getFromList').and.callFake(function (obj) {
            obj.name = 'Test';
            return obj;
        });
        suite.itemScope.updateCity(suite.itemScope.visibleCities[0]);
        expect(suite.itemScope.city.name).toEqual('Test');
        expect(suite.itemScope.visibleCities[0].name).toEqual('Test');
    });

    afterEach(function () {
        suite.itemScope.$destroy();
        suite.$rootScope.$digest();
        suite.itemElement.remove();
        suite = null;
    });

});