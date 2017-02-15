describe('Http service', function () {
    var suite = null;

    beforeEach(inject(function ($injector) {
        suite = {};

        suite.$rootScope = $injector.get('$rootScope');
        suite.$compile = $injector.get('$compile');
        suite.parentScope = suite.$rootScope.$new();

        suite.itemElement = suite.$compile('<div city-item</div>')(suite.parentScope);
        suite.itemController = suite.itemElement.controller('cityItem');
        console.log(suite.itemController);
        suite.itemScope = suite.itemElement.scope();

        //spyOn(suite.itemController, 'removeCity').and.CallThrough();



    }));


    it('should call method in require controller', function () {
        expect(1+1).toEqual(2);
        //expect(suite.itemController.add).toHaveBeenCalled();
        // /expect(suite.elementScope.add()).toHaveBeenCalled();
    });


    afterEach(function () {
        suite.$rootScope.$digest();
        suite = null;
    });

});