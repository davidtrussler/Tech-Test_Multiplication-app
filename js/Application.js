define(['Content'],  
	function(Content) {
  var Application = function() {}; 

  Application.prototype.init = function() {
  	this._addContent(); 
	}; 

	Application.prototype._addContent = function() {
		var content = new Content(); 

		content.addContent(); 
	}; 

	return Application; 
});
