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

    it('should be possible to control phone order via the drop down select box',
      function() {
        //let's narrow the dataset to make the test assertions shorter
        input('query').enter('tablet');

        select('order').option('name');

        expect(repeater('.phones li', 'Phone List').column('phone.name')).
        toEqual(["MOTOROLA XOOM\u2122", "Motorola XOOM\u2122 with Wi-Fi"]);
    }); 
  });  
});
