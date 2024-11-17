document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (menuBtn && menuOverlay) { // Verifica que los elementos existan
        menuBtn.addEventListener('click', () => {
            menuOverlay.classList.toggle('active');
        });
    }
});
