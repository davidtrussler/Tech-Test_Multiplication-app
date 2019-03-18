define(['Content'], 
  function(Content) {
    describe('Populates the content of the app', function() {
      beforeEach(function() {
        fixture.setBase('spec/js/fixtures');
        fixture.load('Content.html');
      }); 

      afterEach(function() {
        fixture.cleanup();
      }); 

      it('Should add the required number of elements with the correct content to the DOM when called', function() {
        var content = new Content(); 

        content.addContent(); 

        expect(fixture.el.querySelectorAll('[data-element="number"]').length).to.equal(144); 
        expect(fixture.el.querySelectorAll('[data-element="number"]')[0].textContent).to.equal('1'); 
        expect(fixture.el.querySelectorAll('[data-element="number"]')[143].textContent).to.equal('144'); 
      }); 
    }); 
  }
); 
