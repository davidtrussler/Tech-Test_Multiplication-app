define(function() {
  var Content = function() {}; 

  Content.prototype.addContent = function() {
		grid = document.getElementById('grid'); 

  	for (var i = 1; i <= 144; i++) {
			var item = document.createElement('li');

			item.dataset.element = 'number'; 
			item.textContent = i; 
  		grid.appendChild(item); 
  	}
	}; 

	return Content; 
});
