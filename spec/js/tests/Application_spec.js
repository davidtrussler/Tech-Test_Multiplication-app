define(['Application'], 
  function(Application) {
    describe('Main Application file', function() {
      beforeEach(function() {
        var application = new Application(); 

        application.init(); 
      }); 

      afterEach(function() {
      }); 

      it('should fail', function() {
        expect(true).to.be.false; 
      }); 
    }); 
  }
); 
