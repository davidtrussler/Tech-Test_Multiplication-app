define(function() {
  var Logic = function() {
  	this.activeState = 'active'; 
  	this.multipleState = 'multiple'; 
  	this.multiples = []; 
  }; 

  Logic.prototype.init = function() {
		var grid = document.getElementById('grid'); 
		var _this = this; 

		grid.addEventListener('click', function(e) {
			// console.log('click!'); 

			e.preventDefault(); 
			_this._clickState(e, _this)
		}, false);
	}; 

	// Handle click events on numbers
	Logic.prototype._clickState = function(e, _this) {
		var _this = this; 

		console.log('_clickState!'); 
		console.log(e.target.className.indexOf(_this.activeState)); 

		var numberClicked = e.target.dataset.number; 
		var total = 0; 
		var n = 2; 
		var multiple = 0; 

		// Get multiples of clicked number
		while (numberClicked * n <= 144) {
			multiple = numberClicked * n; 
			this.multiples.push(multiple); 
			n++; 
		}

		// highlight the number clicked or remove highlight on that number and its multiples if already active
		if (e.target.className.indexOf(_this.activeState) !== -1) {
			e.target.className = e.target.className.replace(' ' + _this.activeState, ''); 

			this.multiples.forEach(function(number) {
				var element = grid.querySelectorAll('[data-number="' + number + '"]')[0]; 

				element.className = element.className.replace(' ' + _this.multipleState, ''); 
			});  

			this.multiples = []; 
		} else {
			e.target.className += ' ' + _this.activeState; 
		}

		// highlight multiples of the number clicked
		this.multiples.forEach(function(number) {
			var element = grid.querySelectorAll('[data-number="' + number + '"]')[0]; 

			if (element.className.indexOf(_this.multipleState) === -1) {
				element.className += ' ' + _this.multipleState; 
			}
		});  
	}

	return Logic; 
});
