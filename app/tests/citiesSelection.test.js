describe('Cities selection directive', function () {
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

    }));

    function compileDirective() {
        suite.itemElement = '<div cities-selection visible-cities="visibleCities"></div>';
        suite.itemElement = suite.$compile(suite.itemElement)(suite.parentScope);
        suite.parentScope.$digest();
        suite.isolateScope = suite.itemElement.isolateScope();
    }

    it('should bind parentScope visibleCities', function () {
        var elem = {test: 'test'};
        expect(suite.isolateScope.visibleCities).toEqual(suite.parentScope.visibleCities);
        suite.parentScope.visibleCities.push(elem);
        expect(suite.isolateScope.visibleCities).toEqual(suite.parentScope.visibleCities);
        expect(suite.isolateScope.visibleCities).toContain(elem);
        suite.isolateScope.visibleCities.pop();
        expect(suite.isolateScope.visibleCities).not.toContain(elem);
    });

    it('should contain select with options', function () {
        var items = suite.itemElement.find('select');
        expect(items.length).toEqual(1);
        items = suite.itemElement.find('option');
        expect(items.length).toEqual(suite.isolateScope.data.cities.length + 1);
    });

    it('should add new visible element', function () {
        var elem = {name: 'test'};
        spyOn(suite.httpService, 'getFromList').and.callFake(function (obj) {
            obj = elem;
            return obj;
        });
        suite.isolateScope.data.model = '1';
        suite.isolateScope.addCity();
        expect(suite.isolateScope.visibleCities.length).toEqual(2);
        expect(suite.isolateScope.visibleCities).not.toContain(elem);
        suite.isolateScope.data.model = '3';
        suite.isolateScope.addCity();
        expect(suite.isolateScope.visibleCities.length).toEqual(3);
        expect(suite.isolateScope.visibleCities).toContain(elem);
    });


    afterEach(function () {
        suite.isolateScope.$destroy();
        suite.$rootScope.$digest();
        suite.itemElement.remove();
        suite = null;
    });

});