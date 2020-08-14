const skillGroup = document.getElementById("skillGroup");
const skillInput = document.getElementById("skillInput");

// initialize create new input box
skillInput.addEventListener("keydown", handleCreateInputBox);

function handleCreateInputBox(e) {
  // count input element
  const skillInputCount = skillGroup.childElementCount + 1;

  // new input
  const newInput = document.createElement("input");
  newInput.placeholder = `Skill ${skillInputCount}`;
  newInput.name = `skill${skillInputCount}`;
  newInput.maxLength = "50";
  newInput.addEventListener("keydown", handleCreateInputBox);

  // new input box
  const newInputBox = document.createElement("div");
  newInputBox.classList.add("inputBox");
  newInputBox.appendChild(newInput);

  // console.log("input box appended");
  skillGroup.appendChild(newInputBox);
  e.target.removeEventListener("keydown", handleCreateInputBox);
}
