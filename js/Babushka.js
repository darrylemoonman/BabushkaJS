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
		
		function iter(obj,parent){
			if(parent === null){
				parent = document.createElement("div");
			}
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
							ele.appendChild(document.createTextNode(obj[prop]));
							break;
						case "symbol":
							ele.appendChild(document.createTextNode(obj[prop]));
							break;
						case null:
							ele.appendChild(document.createTextNode(obj[prop]));
							break;
						default:
							ele.appendChild(obj[prop]);	
							break;
					}
					console.log("Parent: "+typeof(parent)+" Element: "+typeof(ele));
					parent.appendChild(ele);
				}
			}
			return parent;
		}
		
		babushka.dolls.push(iter(object,null));
	};
	
	babushka.unpack = function(){
		var dollData = "";
		for(var doll in mjs.dolls){
			dollData += doll;
		}
		return dollData;
	};

}(window.babushka = window.babushka || {}));