module.exports =  function(){
	var module1 = {}; 
  module1.additionFunction = function () {
		console.log('module 1 function called');
		return "Hello from module 1 function";
	};
  
  var module2 = {}; 
  module2.additionFunction = function () {
		console.log('module 2 function called');
		return "Hello from module 2 function";
	};
  

	return {module1, module2};
}