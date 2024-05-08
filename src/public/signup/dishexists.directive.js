(function () {
    'use strict';

    angular.module('public')
        .directive('dishExists', dishExists);

    dishExists.$inject = ['$http', '$q', 'ApiPath']
    function dishExists($http, $q, ApiPath) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ngModel) {

                elm.on('keyup', function () {
                    ngModel.$asyncValidators.dishExists = function (modelValue, viewValue) {

                        var itemNumberString = modelValue.match(/[0-9]+/);
                        var itemCategory = modelValue.match(/^[a-zA-Z]+/);
                        var itemNumber = itemNumberString - 1;

                        return $http.get(ApiPath + `/menu_items/${itemCategory[0].toUpperCase()}/menu_items/${itemNumber}.json`)
                            .then(
                                function (response) {
                                    if (response.data === null) {
                                        return $q.reject('menu item doesnt exist');
                                    }
                                    else {
                                        return true;
                                    }
                                }
                            )
                    }
                })

            }

        }
    }

})();
