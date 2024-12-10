// Button Toggle
  let toggle = document.getElementById("toggle");
toggle.textContent = "Dark Mode";

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (toggle.textContent === "Dark Mode") {
      toggle.textContent = "Light Mode";
    } else {
      toggle.textContent = "Dark Mode";
    }
  }
//