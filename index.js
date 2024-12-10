// Button Toggle
  let toggle = document.getElementById("toggle");
toggle.textContent = "Mörkt läge";

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (toggle.textContent === "Mörkt läge") {
      toggle.textContent = "Ljust läge";
    } else {
      toggle.textContent = "Mörkt läge";
    }
  }
//