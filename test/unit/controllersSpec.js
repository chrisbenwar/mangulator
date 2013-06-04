'use strict';

describe('controllers', function() {
  describe('PhoneListControl', function() {
    it('should create model with 3 phones', function() {
      var scope = {};
      var ctrl = new PhoneListCtrl(scope);
      expect(scope.phones.length).toBe(3);
    });
  });
})

