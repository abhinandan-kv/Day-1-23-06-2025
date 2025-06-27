console.log("Script Started");

// 🖱️ Mouse Events
// Event	Description
// click	Fires when an element is clicked
// dblclick	Fires when an element is double-clicked
// mousedown	Fires when mouse button is pressed
// mouseup	Fires when mouse button is released
// mouseenter	Fires when mouse enters the element
// mouseleave	Fires when mouse leaves the element
// mousemove	Fires when the mouse is moved
// mouseover	Fires when the mouse is moved onto the element or its children
// mouseout	Fires when the mouse leaves the element or its children
// contextmenu	Fires when the right mouse button is clicked

let ClickButton = document.getElementById("single-click");
ClickButton.addEventListener("click", () => {
  ClickButton.style.color = "red";
  ClickButton.innerText = "onClick Event occured";
  console.log("onClick Event Happened");
});

let doubleClick = document.getElementById("double-click");
doubleClick.addEventListener("dblclick", () => {
  doubleClick.style.color = "gray";
  doubleClick.innerText = "doubleClick Happened";
  console.log("doubleClick Event Happened");
});

let MouseDown = document.getElementById("mouse-Down");
MouseDown.addEventListener("mousedown", () => {
  MouseDown.style.color = "red";
  MouseDown.innerText = "mouse down event happened";
  console.log("mouse down event happened");
});

let MouseUp = document.getElementById("mouse-Up");

MouseUp.addEventListener("mouseup", () => {
  MouseUp.style.color = "green";
  MouseDown.innerText = "Mouse Up event happened";
  console.log("mouse up event happened");
});
