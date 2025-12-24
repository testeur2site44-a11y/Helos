class LoveNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: #FFB6C1;
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
                    transition: all 0.3s ease;
                }
                .nav-link:hover {
                    color: #FFD1DC;
                }
                @media (max-width: 768px) {
                    .nav-container {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    .nav-links {
                        width: 100%;
                        justify-content: space-around;
                    }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="gallery.html" class="logo">Helos & Ria</a>
                    <div class="nav-links">
                        <a href="gallery.html" class="nav-link"><i data-feather="image"></i> Gallery</a>
                        <a href="counter.html" class="nav-link"><i data-feather="calendar"></i> Our Days</a>
                        <a href="videos.html" class="nav-link"><i data-feather="video"></i> Videos</a>
                        <a href="heart.html" class="nav-link"><i data-feather="heart"></i> Heart</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('love-navbar', LoveNavbar);
