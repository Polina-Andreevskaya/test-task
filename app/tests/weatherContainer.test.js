describe('Weather container directive', function () {
    var suite;
    beforeEach(module('testTask'));
    beforeEach(module('allTemplates'));

    beforeEach(inject(function ($injector) {
        suite = {};
        suite.$rootScope = $injector.get('$rootScope');
        suite.$compile = $injector.get('$compile');
        suite.parentScope = suite.$rootScope.$new();

        compileDirective();
    }));

    function compileDirective() {
        suite.itemElement = '<weather-container></weather-container>';
        suite.itemElement = suite.$compile(suite.itemElement)(suite.parentScope);
        suite.parentScope.$digest();
        suite.itemScope = suite.itemElement.scope();
    }

    it('should contain citiesList and citiesSelection directives', function () {
        //citiesSelection
        var items = suite.itemElement.find('select');
        expect(items.length).toEqual(1);
        items = suite.itemElement.find('option');
        expect(items.length).toEqual(5);
        //citiesList
        items = suite.itemElement.find('dt');
        expect(items.length).toEqual(suite.itemScope.visibleCities.length);
    });

    afterEach(function () {
        suite.itemScope.$destroy();
        suite.$rootScope.$digest();
        suite.itemElement.remove();
        suite = null;
    });

});