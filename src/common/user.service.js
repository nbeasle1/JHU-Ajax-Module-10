(function () {
    "use strict";
    
    angular.module('common')
    .service('UserService', UserService);
    
    
    UserService.$inject = [];
    function UserService() {
        var service = this;

        service.user = null;

        service.setUserObject = function (user) {
            service.user = user;
        }

        service.getUserObject = function () {
            return service.user;
        }
    
    }

})();
    