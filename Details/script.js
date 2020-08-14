const skillInput = document.getElementById("skillInput");

// function appendInputBox(){

// }

const newInputBox = document.createTextNode("new input box");
const newSkillInput = document
  .createElement("input")
  .addEventListener("focus", handleCreateInputBox);

skillInput.addEventListener("focus", handleCreateInputBox);

function handleCreateInputBox() {
  console.log("focused");
  this.parentNode.insertBefore(newInputBox, this.nextSibling);
  this.removeEventListener("focus", createInputBox);
}
