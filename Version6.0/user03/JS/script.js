function changeText() {
  document.getElementById("textChange").innerHTML =
    "Thanks for liking my Webpage";
}

var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll() {
  document.title =
    msg.substring(pos, msg.length) + space + msg.substring(0, pos);

  pos++;
  if (pos > msg.length) pos = 0;
  window.setTimeout("Scroll()", 0);
}
Scroll();

function myFunctionWord() {
  var x = document.getElementById("fname"); //Got this from --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onblur
  x.value = x.value.toUpperCase();
}

function myFunctionText() {
  document.getElementById("Thing").innerHTML = "You selected some text"; //Got this from --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onselect
}

function whichButton(event) {
  document.getElementById("Thing2").innerHTML = event.keyCode; //Got this from --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_event_keycode
}

function isKeyPressed(event) {
  var text = "The shift key was NOT pressed!";
  if (event.shiftKey == 1) {
    text = "The shift key was pressed!";
  }
  document.getElementById("Thing3").innerHTML = text; //Got this from --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_event_shiftkey
}

function show_coords(event) {
  document.getElementById("Thing4").innerHTML =
    "X= " + event.clientX + "<br>Y= " + event.clientY; //Got this from --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_event_clientxy
}

function myFunction3() {
  alert("Page is loaded"); //Got this from --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_body_onload
}
function myFunction4() {
  document.getElementById("Thing5").innerHTML =
    "HELLO! Did you think something cool would happen?"; //Got this from --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onclick
}

function myFunction5() {
  document.getElementById("Thing6").innerHTML = "Wow, you really double clicked for nothing 💀"; //Got this from --> https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_ondblclick
}
