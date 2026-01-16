var input = document.getElementById("inputfield");

function clearAll() {
  
    input.value = "";
  }

  function delChar() {
    input = document.getElementById("inputfield");
  
    input.value = input.value.slice(0, -1);
  }

  function getValue(buttonValue) {
     var lastChar = input.value.slice(-1);

  if (buttonValue === "(" && /[0-9)]/.test(lastChar)) {
    input.value += "*";
  }
  else if (/[0-9]/.test(buttonValue) && lastChar === ")") {
    input.value += "*" + buttonValue;
  }
  else{
    input.value += buttonValue;
  }
}

function sq() {
    var num = parseFloat(input.value);
    input.value = num * num;
}

function sin() {
    var num = parseFloat(input.value);
    var radians = num * Math.PI / 180;
    input.value = Math.sin(radians);
}


function cos() {
    var num = parseFloat(input.value);
    var radians = num * Math.PI / 180;
    input.value = Math.cos(radians);
}

function tan() {
    var num = parseFloat(input.value);
    var radians = num * Math.PI / 180;
    input.value = Math.tan(radians);
}



function ln() {
    var num = parseFloat(input.value);
    input.value = Math.log(num);
}


function sqrt() {
    var num = parseFloat(input.value);
    input.value = Math.sqrt(num);
}
function exp() {
    input.value += "^";
}


function equal(buttonValue) {
  
    if (!input.value) {
      input.value = "Syntax error";
    } else {
      var expression = input.value.replace(/\^/g, "**");
        var result = eval(expression);
        input.value = result;
    }
  }