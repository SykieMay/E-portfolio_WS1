window.onload = function() {
  window.alert("Welcome to my portfolio!");
  console.log("Portfolio loaded successfully.");
};

document.querySelector("h1").innerText = "Sykie May P. Daroy - Web Developer";

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function showInfo() {
  window.alert("Name: Sykie May P. Daroy\nCourse: BSIT\nAspiring Web Developer");
}

document.body.classList.add("light-mode");
