class LoveNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: #FF6B8B;
                    padding: 1rem 2rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: white;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                .nav-link {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: .3s;
                }
                .nav-link:hover { color:#FFD1DC }
                
                #musicBtn {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background:#FF6B8B;
                    color:white;
                    padding:10px 15px;
                    border-radius:9999px;
                    box-shadow:0 4px 6px rgba(0,0,0,.2);
                    cursor:pointer;
                    z-index:1000;
                }
            </style>

            <nav>
                <div class="nav-container">
                    <a href="index.html" class="logo">Mon Amour 💝</a>

                    <div class="nav-links">
                        <a href="gallery.html" class="nav-link">
                            <i data-feather="image"></i> Galerie
                        </a>
                        <a href="counter.html" class="nav-link">
                            <i data-feather="clock"></i> Notre Temps
                        </a>
                        <a href="music.html" class="nav-link">
                            <i data-feather="music"></i> Nos Musiques
                        </a>
                        <a href="heart.html" class="nav-link">
                            <i data-feather="heart"></i> Mon Cœur
                        </a>
                    </div>
                </div>
            </nav>

            <button id="musicBtn">▶️ Musique</button>
        `;

        // Convertir les icônes dans le shadow DOM
        this.shadowRoot.querySelectorAll("[data-feather]").forEach(el => {
            const icon = feather.icons[el.getAttribute("data-feather")].toSvg();
            el.outerHTML = icon;
        });

        // Audio global
        const bgMusic = document.getElementById('bgMusic') || (() => {
            const audio = document.createElement('audio');
            audio.id = 'bgMusic';
            audio.src = 'background-music/love for u.mp3';
            audio.loop = true;
            document.body.appendChild(audio);
            return audio;
        })();

        const musicBtn = this.shadowRoot.getElementById('musicBtn');

        musicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play();
                musicBtn.textContent = '⏸️ Pause';
            } else {
                bgMusic.pause();
                musicBtn.textContent = '▶️ Musique';
            }
        });
    }
}

customElements.define('love-navbar', LoveNavbar);
