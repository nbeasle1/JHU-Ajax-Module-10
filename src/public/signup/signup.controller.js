(function () {
    'use strict';

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'UserService'];
    function SignUpController(MenuService, UserService) {
        var $ctrl = this;
        
        $ctrl.foundDish = true;
            
        $ctrl.submitSignupForm = function () {
            var formUser = {
                firstName: $ctrl.firstName,
                lastName: $ctrl.lastName,
                emailAddr: $ctrl.emailAddr,
                phoneNumber: $ctrl.phoneNumber,
                favoriteDish: $ctrl.favoriteDish
            }
            
            MenuService.getItemFromCategory($ctrl.favoriteDish.toUpperCase())
                .then( function (data) {
                    // if good data, set successful & add user to service
                    if (data !== null) {
                        formUser.favoriteDish = data;
                        $ctrl.userSignupSuccess = true;
                        $ctrl.foundDish = true;
                        UserService.setUserObject(formUser);
                    }
                    // if bad data, set err msg
                    else {
                        $ctrl.foundDish = false;
                    }
                });
        }

    }
})();