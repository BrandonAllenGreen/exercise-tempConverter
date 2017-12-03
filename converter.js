// target input text field
var input = document.getElementById("input");
// target div for conversion output
var output = document.getElementById("output");
// target button element
var convert = document.getElementById("convert");
// target reset button
var reset = document.getElementById("reset");
// target F radio button 
var fRadio = document.getElementById("fRadio");
// target C radio button
var cRadio = document.getElementById("cRadio");


// convert F to C
function toCelsius() {
  let newTemp = (input.value - 32) / 1.8;
  output.innerHTML = newTemp.toFixed(1);
  colorChange();
}

//convert C to F
function toFahrenheit() {
  let newTemp = (input.value * 1.8) + 32;
  output.innerHTML = newTemp.toFixed(1);
  colorChange();
}

// function for reset button to reset text input & output
function resetConverter() {
  input.value = "";
  output.innerHTML = "";
}

//color change features
function colorChange() {
  if ((fRadio.checked && output.innerHTML > 90 ) || (cRadio.checked && output.innerHTML > 32)) {
    output.style.color = 'red';
  } else if ((fRadio.checked && output.innerHTML < 32) || (cRadio.checked && output.innerHTML < 0)) {
      output.style.color = 'blue';
  } else {
    output.style.color = 'green';
  }
}  
  
// determine which conversion should happen based on which radio button is selected
// pg 235 in book 
function determineConverter() {
  if (fRadio.checked) {
      toFahrenheit();
  } else {
      toCelsius();
  }
}

// assign a function to be executed when the button is clicked
convert.addEventListener("click", determineConverter);
reset.addEventListener("click", resetConverter);

// in case enter key is pressed instead of convert button clicked

