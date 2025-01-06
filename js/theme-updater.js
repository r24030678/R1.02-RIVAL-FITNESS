const winterButton = document.getElementById("winter-button");
const summerButton = document.getElementById("summer-button");
const toggleContainer = document.querySelector(".theme-toggle");
const body = document.body;

// Vérifie le thème actuel
const currentTheme = localStorage.getItem("theme") || "winter";
toggleContainer.classList.add(currentTheme);
body.classList.add(currentTheme);

// Ajouter des événements aux boutons
winterButton.addEventListener("click", () => {
    toggleContainer.classList.remove("summer");
    toggleContainer.classList.add("winter");
    body.classList.remove("summer");
    body.classList.add("winter");
    localStorage.setItem("theme", "winter");
});

summerButton.addEventListener("click", () => {
    toggleContainer.classList.remove("winter");
    toggleContainer.classList.add("summer");
    body.classList.remove("winter");
    body.classList.add("summer");
    localStorage.setItem("theme", "summer");
});