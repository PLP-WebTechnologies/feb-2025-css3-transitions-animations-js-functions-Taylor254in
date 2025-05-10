document.getElementById("animateBtn").addEventListener("click", function () {
    const box = document.getElementById("box");
    box.classList.remove("animate"); // reset
    void box.offsetWidth; // force reflow
    box.classList.add("animate"); // trigger animation
  });
  
  function saveTheme(theme) {
    localStorage.setItem("preferredTheme", theme);
    applyTheme(theme);
  }
  
  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }
    window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("preferredTheme");
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  });
  