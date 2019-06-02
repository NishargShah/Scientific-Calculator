var shift = 0;
var alpha = 0;
var start = 0;

function calc(input, value) {
    if (input.value == null || input.value == "0") {
        input.value = value;
    } else {
        input.value += value;
    }
}

function onstart() {
    if (start == 0) {
        start = 1;
        display.value = '';
        display1.value = '0';
        document.getElementById('display').style.visibility = 'visible';
        document.getElementById('display1').style.visibility = 'visible';
        console.log("on");
    } else if (start == 3) {
        start = 1;
        document.getElementById('display').style.visibility = 'visible';
        document.getElementById('display1').style.visibility = 'visible';
        display.value = '';
        display1.value = '0';
        console.log("on");
    } else {
        if (start == 1) {
            display.value = '';
            display1.value = '0';
        }
        console.log("ac");
    }
}

function allclear() {
    if (shift == 0) {
        display.value = '';
        display1.value = '0';
    }
    if (shift == 1) {
        document.getElementById('display').style.visibility = 'hidden';
        document.getElementById('display1').style.visibility = 'hidden';
        start = 3;
    }
}

function del() {
    var clear = document.getElementById("display").value;
    document.getElementById("display").value = clear.slice(0, -1);
}

function inv() {
    if (shift == 0) {
        display.value += "⁻¹";
    }
    if (shift == 1) {
        display.value += "!";
    }
}

function cube() {
    if (shift == 0) {
        display.value += "³";
    }
    if (shift == 1) {
        display.value += "³√";
    }
}

function sqrt() {
    display.value += "√";
}

function square() {
    display.value += "²";
}

function arrow() {
    if (shift == 0) {
        display.value += "^";
    }
    if (shift == 1) {
        display.value += "ˣ√";
    }
}

function log() {
    if (shift == 0) {
        display.value += "log ";
    }
    if (shift == 1) {
        display.value += "₁₀";
    }
}

function ln() {
    if (shift == 0) {
        display.value += "ln ";
    }
    if (shift == 1) {
        display.value += "e";
    }
    if (alpha == 1) {
        display.value = "e";
    }
}

function sin() {
    if (shift == 0) {
        display.value += "sin ";
    }
    if (shift == 1) {
        display.value += "sin⁻¹ ";
    }
    if (alpha == 1) {
        display.value = "D";
    }
}

function cos() {
    if (shift == 0) {
        display.value += "cos ";
    }
    if (shift == 1) {
        display.value += "cos⁻¹ ";
    }
    if (alpha == 1) {
        display.value = "E";
    }
}

function tan() {
    if (shift == 0) {
        display.value += "tan ";
    }
    if (shift == 1) {
        display.value += "cos⁻¹ ";
    }
    if (alpha == 1) {
        display.value = "F";
    }
}

function lcurve() {
    display.value += "(";
}

function rcurve() {
    display.value += ")";
}

function exp() {
    if (shift == 0) {
        display.value += "E";
    }
    if (shift == 1) {
        display.value += "π";
    }
}

function final() {
    if (shift == 0) {
        equal();
    }
    if (shift == 1) {
        display.value += "%";
        var input = display.value;
        var val1 = "";
        var val2 = "";
        var xx = 0;
        for (var i = 0; i < input.length; i++) {
            if (input[i] != "*") {
                if (xx == 0) {
                    val1 += input[i];
                }
                if (xx == 1) {
                    val2 += input[i];
                }
                console.log("false");
            }
            if (input[i] == "*") {
                input = input.replace("%", "");
                xx = 1;
                console.log("true");
            }
        }
        console.log(val1);
        console.log(val2);
        var c = (parseFloat(val1) * parseFloat(val2)) / 100;
        return display1.value = parseFloat(c);
        console.log("percentage");
    }
}
