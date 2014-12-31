// Declaring global variables
var chosenFont = document.getElementById("fonts").value;
var textWillChange = document.getElementById("textarea");
var message = document.getElementById("message");

// The programming of font changer function.
function fontChanger() {
  textWillChange.style.fontFamily = chosenFont;
  textWillChange.style.fontSize = "80%";
  message.innerHTML = chosenFont;
}

// Initialize creation of a button element, behaviors, and it's attribute.
window.onload = function() {
  // Initialize elements and attributes
  var btnSubmit = document.createElement("input");
  btnSubmit.setAttribute("id", "submit");
  btnSubmit.setAttribute("type", "button");
  btnSubmit.setAttribute("value", "Submit");
  // Actual placement of submit button
  document.getElementById("theButton").appendChild(btnSubmit);
  // Setting the command in the created button for font changing
  btnSubmit.onclick = function() {
    fontChanger();
  }
}
