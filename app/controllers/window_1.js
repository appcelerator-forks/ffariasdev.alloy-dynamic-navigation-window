var args = arguments[0] || {};
var passedData = args.passedData; //receives the value from the first tab icon index.xml
console.log("passedData: " + passedData);

$.header.setBackgroundColor("#f37b53");
$.header.setBorderColor("#f3f3f3");

function closeWindow(){
	Alloy.Globals.app.closeWindow($.header,$.window );
}