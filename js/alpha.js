var alpha=0;
function changealpha() {
	if(alpha==0){
		alpha = 1;
		console.log(alpha);
		document.getElementById("pol").innerHTML = ":";
		document.getElementById("ln").innerHTML = "e";
		document.getElementById("minus").innerHTML = "A";
		document.getElementById("degree").innerHTML = "B";
		document.getElementById("hyp").innerHTML = "C";
		document.getElementById("sin").innerHTML = "D";
		document.getElementById("cos").innerHTML = "E";
		document.getElementById("tan").innerHTML = "F";
		document.getElementById(")").innerHTML = "X";
		document.getElementById("coma").innerHTML = "Y";
		document.getElementById("mplus").innerHTML = "M";
		document.getElementById('circle').style.backgroundColor = "transparent";
		document.getElementById('circle1').style.backgroundColor = "yellow";
	}
	else{
		alpha=0;
		console.log(alpha);
		document.getElementById("mode").innerHTML = "Mode";
		document.getElementById("x1").innerHTML = "x<sup>-1</sup>";
		document.getElementById("ncr").innerHTML = "nCr";
		document.getElementById("pol").innerHTML = "Pol(";
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
		document.getElementById('circle').style.backgroundColor = "transparent";
		document.getElementById('circle1').style.backgroundColor = "transparent";
	}
}