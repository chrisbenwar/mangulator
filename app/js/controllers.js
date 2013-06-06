'use strict';

function PhoneListCtrl($scope, Phone) {
  $scope.phones = Phone.query();

  $scope.order = "name"
} 

function PhoneDetailCtrl($scope, Phone, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;

  var path = 'phones/' + $scope.phoneId + '.json';
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.imageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.imageUrl = imageUrl;
  }
}
