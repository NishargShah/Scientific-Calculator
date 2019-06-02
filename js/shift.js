var shift=0;
function changeshift() {
	if(shift==0){
		shift = 1;
		/* Toggle Shift Start */
		document.getElementById("mode").innerHTML = "Clr";
		document.getElementById("x1").innerHTML = "x!";
		document.getElementById("ncr").innerHTML = "nPr";
		document.getElementById("pol").innerHTML = "rec(";
		document.getElementById("x3").innerHTML = "3&#8730;";
		document.getElementById("abc").innerHTML = "d/c";
		document.getElementById("arrow").innerHTML = "<sup>x</sup>&#8730;";
		document.getElementById("log").innerHTML = "10<sup>x</sup>";
		document.getElementById("ln").innerHTML = "e<sup>x</sup>";
		document.getElementById("degree").innerHTML = "&#8592;";
		document.getElementById("sin").innerHTML = "sin<sup>-1</sup>";
		document.getElementById("cos").innerHTML = "cos<sup>-1</sup>";
		document.getElementById("tan").innerHTML = "tan<sup>-1</sup>";
		document.getElementById("rcl").innerHTML = "STO";
		document.getElementById("eng").innerHTML = "&#8592;";
		document.getElementById("coma").innerHTML = ";";
		document.getElementById("mplus").innerHTML = "M-";
	//	document.getElementById("del").innerHTML = "INS";
		document.getElementById("ac").innerHTML = "OFF";
		/*document.getElementById("1").innerHTML = "S-SUM";
		document.getElementById("2").innerHTML = "S-VAR";
		document.getElementById("0").innerHTML = "Rnd";
		document.getElementById(".").innerHTML = "Ran#";*/
		document.getElementById("exp").innerHTML = "&#8508;";
		document.getElementById("ans").innerHTML = "DRG>";
		document.getElementById("=").innerHTML = "%";
		/* Toggle Shift End */
		document.getElementById('circle').style.backgroundColor = "yellow";
		document.getElementById('circle1').style.backgroundColor = "transparent";
		console.log(shift);
	}
	else{
		shift=0;
		/* Toggle Shift Start */
		document.getElementById("mode").innerHTML = "Mode";
		document.getElementById("x1").innerHTML = "x<sup>-1</sup>";
		document.getElementById("ncr").innerHTML = "nCr";
		document.getElementById("pol").innerHTML = "pol(";
		document.getElementById("x3").innerHTML = "x<sup>3</sup>";
		document.getElementById("abc").innerHTML = "a(b/c)";
		document.getElementById("sqrt").innerHTML = "&#8730;";
		document.getElementById("x2").innerHTML = "x<sup>2</sup>";
		document.getElementById("arrow").innerHTML = "^";
		document.getElementById("log").innerHTML = "log";
		document.getElementById("ln").innerHTML = "ln";
		document.getElementById("minus").innerHTML = "(-)";
		document.getElementById("degree").innerHTML = ".,,,";
		document.getElementById("hyp").innerHTML = "hyp";
		document.getElementById("sin").innerHTML = "sin";
		document.getElementById("cos").innerHTML = "cos";
		document.getElementById("tan").innerHTML = "tan";
		document.getElementById("rcl").innerHTML = "RCL";
		document.getElementById("eng").innerHTML = "ENG";
		document.getElementById("(").innerHTML = "(";
		document.getElementById(")").innerHTML = ")";
		document.getElementById("coma").innerHTML = ",";
		document.getElementById("mplus").innerHTML = "M+";
		document.getElementById("7").innerHTML = "7";
		document.getElementById("8").innerHTML = "8";
		document.getElementById("9").innerHTML = "9";
		document.getElementById("del").innerHTML = "DEL";
		document.getElementById("ac").innerHTML = "AC";
		document.getElementById("4").innerHTML = "4";
		document.getElementById("5").innerHTML = "5";
		document.getElementById("6").innerHTML = "6";
		document.getElementById("*").innerHTML = "&#215;";
		document.getElementById("/").innerHTML = "&#247;";
		document.getElementById("1").innerHTML = "1";
		document.getElementById("2").innerHTML = "2";
		document.getElementById("3").innerHTML = "3";
		document.getElementById("+").innerHTML = "+";
		document.getElementById("-").innerHTML = "-";
		document.getElementById("0").innerHTML = "0";
		document.getElementById(".").innerHTML = ".";
		document.getElementById("exp").innerHTML = "EXP";
		document.getElementById("ans").innerHTML = "ANS";
		document.getElementById("=").innerHTML = "=";
		/* Toggle Shift End */
		document.getElementById('circle').style.backgroundColor = "transparent";
		document.getElementById('circle1').style.backgroundColor = "transparent";
		console.log(shift);
	}
}