function equal() {
	var input = display.value;
	var output = display1.value;
	console.log("[" + input + "]")

	if (input.includes("!")) {
		var fact = display.value;
		fact = fact.replace("!","");
		if(fact == 0) {
           	return 1;
       	}
       	if(fact < 0 ) {
           	return undefined;
       	}
       	for(var i = fact; --i; ) {
           	fact *= i;
       	}
       	return display1.value = fact;
		console.log("fact");
	}
	else if (input.includes("³√")) {
		var value = input;
		value = value.replace("³√","");
		display1.value = Math.cbrt(value);
		console.log("cube root");
	}
	else if (input.includes("³")) {
		var value = input;
		value = value.replace("³","");
		display1.value = eval(value) * eval(value) * eval(value);
		console.log("square");
	}
	else if (input.includes("ˣ√")) {
		var value = input;
		var val1 = "";
		var val2 = "";
		var xx = 0;
		value = value.replace("ˣ√","√");
		for(var i=0; i<value.length;i++){
			if(value[i] != "√"){
				if(xx == 0){
					val1 += value[i];
				}
				if(xx == 1){
					val2 += value[i];
				}			
			}
			if(value[i] == "√"){
				xx = 1;
			}
		}
		display1.value = Math.pow(val2,1/val1);
		console.log("x sqrt");
	}
	else if (input.includes("√")) {
		var value = input;
		value = value.replace("√","");
		display1.value = Math.sqrt(value);
		console.log("sqrt");
	}
	else if (input.includes("²")) {
		var value = input;
		value = value.replace("²","");
		display1.value = eval(value) * eval(value);
		console.log("cube");
	}
	else if (input.includes("^")) {
		var val1 = "";
		var val2 = "";
		var xx = 0;
		console.log(input.length);
		for(var i=0; i<input.length;i++){
			if(input[i] != "^"){
				if(xx == 0){
					val1 += input[i];
				}
				if(xx == 1){
					val2 += input[i];
				}	
				console.log("false");		
			}
			if(input[i] == "^"){
				xx = 1;
				console.log("true");	
			}
		}
		console.log(val1);
		console.log(val2);
		display1.value = Math.pow(val1,val2);
		console.log("arrow");
	}
	else if (input.includes("log")) {
		var value = input;
		value = value.replace("log","");
		display1.value = Math.log10(value);
		console.log("log");
	}
	else if (input.includes("₁₀")) {
		var value = input;
		value = value.replace("₁₀","");
		display1.value = Math.pow(10,value);
		console.log("10ˣ");
	}
	else if (input.includes("ln")) {
		var value = input;
		value = value.replace("ln","");
		display1.value = Math.log(value);
		console.log("ln");
	}
	else if (input.includes("e")) {
		if(shift == 1){
			var value = input;
			value = value.replace("e","");
			display1.value = Math.pow(Math.E,value);
			console.log("es");
		}
		if(alpha == 1){
			display1.value = Math.E;
			console.log("ea");
		}
	}
	else if (input.includes("sin⁻¹")) {
		var value = input;
		value = value.replace("sin⁻¹","");
		display1.value = Math.asin(value)*180/Math.PI;
		console.log("sin⁻¹");
	}
	else if (input.includes("sin")) {
		var value = input;
		value = value.replace("sin","");
		display1.value = Math.sin(value * Math.PI/180);
		console.log("sin");
	}
	else if (input.includes("cos⁻¹")) {
		var value = input;
		value = value.replace("cos⁻¹","");
		display1.value = Math.acos(value)*180/Math.PI;
		console.log("cos⁻¹");
	}
	else if (input.includes("cos")) {
		var value = input;
		value = value.replace("cos","");
		display1.value = Math.cos(value * Math.PI/180);
		console.log("cos");
	}
	else if (input.includes("tan⁻¹")) {
		var value = input;
		value = value.replace("tan⁻¹","");
		display1.value = Math.atan(value)*180/Math.PI;
		console.log("tan⁻¹");
	}
	else if (input.includes("tan")) {
		var value = input;
		value = value.replace("tan","");
		display1.value = Math.tan(value * Math.PI/180);
		console.log("tan");
	}
	else if (input.includes("⁻¹")) {
		var value = input;
		value = value.replace("⁻¹","");
		display1.value = 1/eval(value);
		console.log("inv");
	}
	else if (input.includes("E")) {
		var value = input;
		value = value.replace("E","");
		display1.value = Math.pow(10,value);
		console.log("exp");
	}
	else if (input.includes("π")) {
		display1.value = Math.PI;
		console.log("pi");
	}
	else {
		display1.value = eval(display.value);
		console.log("eval");
	}
}