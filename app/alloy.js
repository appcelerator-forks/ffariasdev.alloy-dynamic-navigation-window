/*Author: Felipe Lunardi Farias
https://github.com/ffarias
Project: Dynamic Navigation Window (Alloy is a model-view-controller framework) for iOS/Android apps.
2014
MTI LICENCE
*/
Alloy.Globals.app = function() {

return {
		
	/*
	* Set opacity for change the window
	*/
	setOpacity : function(elemento){
	   	
		elemento.setOpacity(0.5);
		
		setTimeout(function(){
			elemento.setOpacity(1);
		},200);
	   	
	},
	   
	/*
	* Get the directive 'controller' from your xml tag
	*/
	openController : function(data){
	   	
	   	var c = this;
	   	var data = data;
	   	var dataValue = data.source.value; 
		c.setTouchEnabled(false);
	   	
		c.setOpacity(0.5);
		
		setTimeout(function(){
			c.setOpacity(1);
			
			var controllers = Alloy.createController(c.controller, {passedData: dataValue}).getView(); // passes value from an index.xml element (e.g. view, button) to the controller and making it available to other windows
		    Alloy.Globals.navigationDefault.openWindow(controllers);
			
		},200);
		
	    setTimeout(function(){
	    	c.setTouchEnabled(true);
	    },2000);
	   	
	},
	
	/*
	* Close window
	*/
	closeWindow : function (header, win){
		
		var slideIn  = Titanium.UI.createAnimation({top:-60});
		
		header.animate(slideIn);
		
		setTimeout(function(){
			Alloy.Globals.navigationDefault.closeWindow(win);
		},200);
	}
	
};
}();