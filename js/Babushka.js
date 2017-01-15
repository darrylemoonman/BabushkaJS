(function(babushka, undefined){
	// Babushka Version
	var version = "0.0.1";
	
	babushka.version = function(){
		console.log("Babushka v"+version);
		return version;
	};
	
	// Public vars
	babushka.dolls = {};
	
	// Private vars
	
	// Functions
	
	babushka.pack = function(name,object){
		
		function iter(obj,parent){
			// Itterate over object
			for(var prop in obj){
				// Only check if property exists
				if(obj.hasOwnProperty(prop)){
					// check if id or class and ignore
					// Direct the value of the property to the appropriate response
					switch(typeof(obj[prop])){
						case "object":
							parent.appendChild(iter(obj[prop],document.createElement(prop)));
							break;
						case "string":
							switch(prop){
								case "id":
									parent.setAttribute("id",obj.id);
									break;
								case "class":
									parent.setAttribute("class",obj.class);
									break;
								case "content":
									parent.appendChild(document.createTextNode(obj[prop]));
									break;
								case "src":
									parent.setAttribute("src",obj.src);
									break;
								case "width":
									parent.setAttribute("width",obj.width);
									break;
								case "height":
									parent.setAttribute("height",obj.height);
									break;
								default:
									var ele = document.createElement(prop);
									ele.appendChild(document.createTextNode(obj[prop]));
									parent.appendChild(ele);
									break;
							}
							break;
						case "number":
							parent.appendChild(document.createTextNode(obj[prop]));
							break;
						case "symbol":
							parent.appendChild(document.createTextNode(obj[prop]));
							break;
						case null:
							break;
						default:
							break;
					}
				}
			}
			return parent;
		}
		parent = document.createElement("div");
		babushka.dolls[name] = iter(object,parent);
	};
	
	babushka.unpack2 = function(output){
		var dollData = "";
		for(var doll in babushka.dolls){
			console.log(babushka.dolls[doll]);
			dollData += babushka.dolls[doll].innerHTML;
		}
		console.log(dollData);
		//return dollData;
	};
	
	babushka.unpack = function(name,output){
		console.log(babushka.dolls[name]);
		var out = document.getElementById(output);
		console.log(typeof(document.getElementById(output)));
		out.appendChild(babushka.dolls[name]);
	};
	
	babushka.nest = function(){
		
	}

}(window.babushka = window.babushka || {}));