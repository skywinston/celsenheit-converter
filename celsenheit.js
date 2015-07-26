//var temp = prompt("What temperature in F would you like to convert to C?");

//Toggle between F to C conversion & vice-versa
function conversionToggle() {
  if ( $('#conversion_submission').attr('onclick') == 'convertFtoC()' ) {
    $('#conversion_submission').attr('onclick', 'convertCtoF()');
    $('#conversion_toggle').attr('class', 'c_to_f');
  } else {
    $('#conversion_submission').attr('onclick', 'convertFtoC()');
    $('#conversion_toggle').attr('class', 'f_to_c');
  }
}

//convert Fahrenheit to Celsius
function convertFtoC() {
  var numberToConvert = document.getElementById("temperature_input").value;
  numberToConvert = Math.round( (5/9)*(numberToConvert-32) );
  document.getElementById("answer").innerHTML = "" + numberToConvert;
  if ( numberToConvert <= 0 ) {
    $('body').attr('class', 'really_cold'); //really cold
  } else if ( numberToConvert > 0 && numberToConvert <= 10) {
    $('body').attr('class', 'cold'); //cold
  } else if ( numberToConvert > 10 && numberToConvert <= 21 ) {
    $('body').attr('class', 'warm'); //warm 
  } else {
    $('body').attr('class', 'hot');; //hot
  }
}

//Convert Celsius to Fahrenheit
function convertCtoF() {
  var numberToConvert = document.getElementById("temperature_input").value;
  numberToConvert = Math.round( ((9/5)*numberToConvert)+32 );
  document.getElementById("answer").innerHTML = "" + numberToConvert;
  if ( numberToConvert <= 32 ) {
    $('body').attr('class', 'really_cold'); //really cold
  } else if ( numberToConvert > 32 && numberToConvert <= 50) {
    $('body').attr('class', 'cold'); //cold
  } else if ( numberToConvert > 50 && numberToConvert <= 70 ) {
    $('body').attr('class', 'warm'); //warm 
  } else {
    $('body').attr('class', 'hot');; //hot
  }
}

//Keyboard Shortcut for Toggle
window.addEventListener("keyup", shortCuts, false);
function shortCuts(k){
  if (k.keyCode == "84") {
    conversionToggle();
  }
}


//alert(convertFtoC(temp));