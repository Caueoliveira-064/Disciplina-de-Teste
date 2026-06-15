document.addEventListener('DOMContentLoaded', () => {
    // Booking form submission mock
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Reserva enviada com sucesso! Entraremos em contato.');
            form.reset();
        });
    }

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const bg = document.querySelector('.hero');
        let offset = window.pageYOffset;
        bg.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});
