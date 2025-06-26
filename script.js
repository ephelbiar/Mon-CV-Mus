/* Mot de passe attendu */
const MOT_DE_PASSE = "cv2025";

/* --- Fonctions utilitaires --- */
function message() {
    alert("Que veux-tu faire ?");
}
function showMessage() {
    alert("Bienvenue sur le CV de Mustapha Benani !");
}
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        "Heure actuelle : " + now.toLocaleTimeString();
}

/* --- Vérification du mot de passe --- */
function checkPassword() {
    const input = document.getElementById("password-input").value;
    const error = document.getElementById("error-message");

    if (input === MOT_DE_PASSE) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("cv-content").style.display = "block";
        error.textContent = "";
        showMessage();
        updateClock();
    } else {
        error.textContent = "Mot de passe incorrect.";
    }
}

/* --- Afficher / Masquer les expériences --- */
function toggleExperience() {
    const list = document.getElementById("experience-list");
    list.style.display = (list.style.display === "none") ? "block" : "none";
}

/* --- Événements au chargement de la page --- */
document.addEventListener("DOMContentLoaded", () => {

    /* Lien et paragraphe déclenchant l’alerte “message()” */
    document.getElementById("welcome-text").addEventListener("mouseover", message);
    document.getElementById("alert-link").addEventListener("click", (e) => {
        e.preventDefault();
        message();
    });

    /* Validation du mot de passe */
    document.getElementById("btn-valider").addEventListener("click", checkPassword);

    /* Bascule des expériences */
    document.getElementById("btn-toggle-exp").addEventListener("click", toggleExperience);

    /* Mise à jour de l’horloge chaque seconde si le CV est visible */
    setInterval(() => {
        if (document.getElementById("cv-content").style.display === "block") {
            updateClock();
        }
    }, 1000);
});
