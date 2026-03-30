import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

// Profile image mapping
const profileImages = {
    'Rodrigo': '../assets/61Vva0gAFIL._AC_UF894,1000_QL80_.jpg',
    'Batman': '../assets/IMG-20200615-WA0078.jpg',
    'Jujuba': '../assets/Jujuba.jpg',
    'Shrek': '../assets/shrek.webp'
};

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('activeProfileName') || localStorage.getItem('perfilAtivoNome');
    
    if (nomePerfil) {
        // Get image from mapping
        const imagemPerfil = profileImages[nomePerfil];
        
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon && imagemPerfil) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
