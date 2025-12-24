// 🔑 Gestion du formulaire
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    
    if(password === 'Maria') {
        window.location.href = 'gallery.html';
    } else {
        alert('Mot de passe incorrect, ma chérie ❤️ Essaie encore !');
    }
});

// 🔧 Feather Icons
feather.replace();

// 🌌 Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// 💕 Animation des coeurs
const hearts = document.getElementById("hearts");

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}, 700);

// 🎵 Musique de fond
const bgMusic = document.getElementById("bgMusic");

// Créer un bouton flottant pour contrôler la musique
const musicBtn = document.createElement("button");
musicBtn.id = "musicBtn";
musicBtn.textContent = "▶️ Musique";
musicBtn.style.position = "fixed";
musicBtn.style.bottom = "20px";
musicBtn.style.right = "20px";
musicBtn.style.backgroundColor = "#FF6B8B";
musicBtn.style.color = "white";
musicBtn.style.padding = "10px 15px";
musicBtn.style.borderRadius = "9999px";
musicBtn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
musicBtn.style.cursor = "pointer";
musicBtn.style.zIndex = "1000";
musicBtn.style.transition = "background-color 0.3s";
document.body.appendChild(musicBtn);

musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = "⏸️ Pause";
    } else {
        bgMusic.pause();
        musicBtn.textContent = "▶️ Musique";
    }
});

// Essayer de lancer la musique au chargement
window.addEventListener('load', () => {
    bgMusic.play().catch(() => {
        musicBtn.textContent = "▶️ Musique";
    });
});
