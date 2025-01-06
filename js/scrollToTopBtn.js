// Lorsque l'utilisateur fait défiler la page
window.onscroll = function() {
    var btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block"; // Affiche le bouton quand on descend de 100px
    } else {
      btn.style.display = "none"; // Cache le bouton quand on est tout en haut
    }
  };
  
  // Fonction pour remonter en haut de la page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Ajoute un défilement fluide
    });
  }
  