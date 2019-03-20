define(function() {
  var Content = function() {}; 

  Content.prototype.addContent = function() {
		grid = document.getElementById('grid'); 

  	for (var i = 1; i <= 144; i++) {
			var item_li = document.createElement('li');
			var item_a = document.createElement('a');

			item_li.dataset.element = 'number'; 
			item_li.className = 'grid__element'; 
			item_a.textContent = i; 
			item_a.href = '#'; 
			item_a.className = 'grid__number'; 
			item_li.appendChild(item_a); 
  		grid.appendChild(item_li); 
  	}
	}; 

	return Content; 
});
