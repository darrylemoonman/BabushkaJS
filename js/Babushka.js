(function(babushka, undefined){
	// Babushka Version
	var version = "0.0.1";
	
	babushka.version = function(){
		console.log("Matryoshka v"+version);
		return version;
	};
	
	// Public vars
	babushka.dolls = [];
	
	// Private vars
	
	// Functions
	
	babushka.pack = function(object){
		// Each doll is enclosed in a div
		var doll = document.createElement("div");
		
		function iter(obj,parent){
			// Itterate over object
			for(var prop in obj){
				// Only check if property exists
				if(obj.hasOwnProperty(prop)){
					// Turn the property into an element
					var ele = document.createElement(prop);
					// Direct the value of the property to the appropriate response
					switch(typeof(obj[prop])){
						case "object":
							// Continue itteration over nested objects
							ele.appendChild(iter(obj[prop],prop));
							break;
						case "string":
							ele.appendChild(document.createTextNode(obj[prop]));
							break;
						case "number":
							break;
						case "symbol":
							break;
						case null:
						default:
							ele.appendChild(obj[prop]);	
							break;
					}
					parent.appendChild(ele);
				}
			}
			return parent;
		}
		
		babushka.dolls.push(iter(object,doll));
	};
	
	babushka.unpack = function(){
		var dollData = "";
		for(var doll in mjs.dolls){
			dollData += doll;
		}
		return dollData;
	};

}(window.babushka = window.babushka || {}));