'use strict';

describe('This application', function() {
  
  describe('The phone list', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });
    
    it('Should filter the phone list', function() {
      expect(repeater('.phones li').count()).toBe(3);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);
    }); 
  });  
});
