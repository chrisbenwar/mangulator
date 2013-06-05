'use strict';

function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data.splice(0, 5);
  }); 

  $scope.order = "name"
} 

