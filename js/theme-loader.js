const currentTheme = localStorage.getItem("theme") || "winter";
document.body.classList.add(currentTheme);