describe("Dish Exists", function() {
    
    var $httpBackend, $rootScope
    var ApiPath = 'https://coursera-jhu-default-rtdb.firebaseio.com'

    beforeEach(inject(function($injector, _$rootScope_, _$compile_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', ApiPath + `/menu_items/L/menu_items/1.json`)
                                         .respond(200, {data: null})
        var element = angular.element(
            '<form name=signupform>' +
            '<input type="text" id="dish" name="dish" ng-model="signUpCtrl.favoriteDish" dish-exists>' +
            '</form>'
        );
        $compile(element)($rootScope)
        form = $rootScope.form
    }));

    it('it should determine if item exists in menu or not', function () {
        

    });

});