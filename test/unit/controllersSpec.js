'use strict';

describe('controllers', function() {
  describe('PhoneListControl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_; 
      $httpBackend.expectGET('phones/phones.json').
        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
      
      scope = new $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));

    it('should create "phones" model with 2 phones fetched from xhr', function() {

      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();
     
      expect(scope.phones).toEqual([{name: 'Nexus S'},
                               {name: 'Motorola DROID'}]);
    }); 

    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
})

