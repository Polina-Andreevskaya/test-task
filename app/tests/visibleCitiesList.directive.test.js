describe('Cities list directive', function () {
    var suite;
    beforeEach(module('testTask'));
    beforeEach(module('allTemplates'));

    beforeEach(inject(function ($injector) {
        suite = {};
        suite.$rootScope = $injector.get('$rootScope');
        suite.$compile = $injector.get('$compile');
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
        suite.itemElement = '<div visible-cities-list visible-cities="visibleCities"></div>';
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

    it('should contain city-item directive', function () {
        var items = suite.itemElement.find('dt');
        expect(items.length).toEqual(suite.isolateScope.visibleCities.length);
    });


    afterEach(function () {
        suite.isolateScope.$destroy();
        suite.$rootScope.$digest();
        suite.itemElement.remove();
        suite = null;
    });

});