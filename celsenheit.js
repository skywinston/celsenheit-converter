//var temp = prompt("What temperature in F would you like to convert to C?");

function convertFtoC() {
  var numberToConvert = document.getElementById("temperature_input").value;
  numberToConvert = Math.round( (5/9)*(numberToConvert-32) );
  document.getElementById("answer").innerHTML = "" + numberToConvert;
}

function convertCtoF(numberToConvert) {
  return Math.round( ((9/5)*numberToConvert)+32 );
}

//alert(convertFtoC(temp));