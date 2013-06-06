'use strict';

angular.module(
  'mangulator', 
  ['mangulatorFilters', 'mangulatorServices']
).config(
  [
    '$routeProvider', 
    function($routeProvider) {
      $routeProvider.when('/phones', {
        templateUrl: 'partials/phone-list.html', 
        controller: PhoneListCtrl
      });

      $routeProvider.when('/phones/:phoneId', {
        templateUrl: 'partials/phone-details.html',
        controller: PhoneDetailCtrl
      });

      $routeProvider.otherwise({
        redirectTo: '/phones'
      });
    }
  ]
)
 
