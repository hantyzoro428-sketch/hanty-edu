
/* MESSAGE DU BOUTON EXERCICES */
function afficherMessage() {
    alert("Bienvenue sur HANTY EDU ! Les exercices arrivent bientôt.");
}

/* FORMULAIRE DE CONTACT */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("formMessage").textContent =
        "Merci pour ton message ! Le formulaire est actuellement en démonstration.";

    contactForm.reset();

});
