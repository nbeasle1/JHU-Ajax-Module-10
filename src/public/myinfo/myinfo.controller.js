(function () {
    'use strict';

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService'];
    function MyInfoController(UserService) {
        var $ctrl = this;

        $ctrl.user = UserService.getUserObject()

        $ctrl.getImgCategoryName = function () {
            var itemCategoryString = $ctrl.user.favoriteDish.short_name.match(/^[a-zA-Z]+/)
            return itemCategoryString;
        }
    }
})();