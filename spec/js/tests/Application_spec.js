define(['Application'], 
  function(Application) {
    describe.only('Main Application file unit tests', function() {
      beforeEach(function() {
        fixture.setBase('spec/js/fixtures');
        fixture.load('Content.html');
      }); 

      afterEach(function() {
        fixture.cleanup();
      }); 

      it('should call the _addContent method once when app is initialised', function() {
        var application = new Application(); 
        var addContentSpy = sinon.spy(application, '_addContent');

        application.init(); 

        expect(addContentSpy.calledOnce).to.be.true; 
      }); 
    }); 
  }
); 
