define(['Content', 'Logic'], 
  function(Content, Logic) {
    describe('Tests the logic of the app', function() {
      beforeEach(function() {
        var content = new Content(); 
        var logic = new Logic(); 
        
        fixture.setBase('spec/js/fixtures');
        fixture.load('Content.html');

        content.addContent(); 

        this.numberToClick_1 = 6; 
        this.multiples_1 = [12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144]; 
        this.numberToClick_2 = 7; 
        this.multiples_2 = [14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 120, 127, 134, 141]; 
        this.grid = document.getElementById('grid'); 
        this.numberActive = null; 
        this.numbersMultiple = []; 
        this.getHighlightedNumbers = function() {
          for (var i = 0; i < this.grid.querySelectorAll('[data-element="number"]').length; i++) {
            var element = this.grid.querySelectorAll('[data-element="number"]')[i]; 

            if (element.className.indexOf(logic.activeState) !== -1) {
              this.numberActive = parseInt(element.dataset.number); 
            } else {
              if (element.className.indexOf(logic.multipleState) !== -1) {
                this.numbersMultiple.push(parseInt(element.dataset.number)); 
              }
            }
          }; 
        }
      }); 

      afterEach(function() {
        fixture.cleanup();
      }); 

      it('Should highlight the correct elements when an element is clicked for the first time', function() {
        this.grid.querySelectorAll('[data-number="' + this.numberToClick_1 + '"]')[0].click(); 
        this.getHighlightedNumbers(); 

        expect(this.numberActive).to.equal(this.numberToClick_1); 
        expect(JSON.stringify(this.numbersMultiple)).to.equal(JSON.stringify(this.multiples_1)); 
      }); 

      it('Should remove any highlights when an element is clicked for a second time', function() {
        this.elementToClick = this.grid.querySelectorAll('[data-number="' + this.numberToClick_1 + '"]')[0].click(); 
        this.elementToClick = this.grid.querySelectorAll('[data-number="' + this.numberToClick_1 + '"]')[0].click(); 
        this.getHighlightedNumbers(); 

        expect(this.numberActive).to.equal(null); 
        expect(this.numbersMultiple.length).to.equal(0); 
      }); 

      it('Should highlight the correct elements when a different element is clicked for the first time', function() {
        this.elementToClick = this.grid.querySelectorAll('[data-number="' + this.numberToClick_1 + '"]')[0].click(); 
        this.elementToClick = this.grid.querySelectorAll('[data-number="' + this.numberToClick_2 + '"]')[0].click(); 
        this.getHighlightedNumbers(); 

        expect(this.numberActive).to.equal(this.numberToClick_2); 
        expect(JSON.stringify(this.numbersMultiple)).to.equal(JSON.stringify(this.multiples_2)); 
      }); 
    }); 
  }
); 
