(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

  service.getItemFromCategory = function (shortName) {
    var itemNumberString = shortName.match(/[0-9]+/);
    var itemCategory = shortName.match(/^[a-zA-Z]+/)
        
    var itemNumber = itemNumberString - 1;

    return $http.get(ApiPath + `/menu_items/${itemCategory}/menu_items/${itemNumber}.json`)
      .then(function (response) {
        return response.data;
      })
  }

}



})();
