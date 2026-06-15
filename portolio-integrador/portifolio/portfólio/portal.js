document.addEventListener('DOMContentLoaded', () => {
    const sides = document.querySelectorAll('.portal-side');

    sides.forEach(side => {
        side.addEventListener('mouseenter', () => {
            side.classList.add('active');
        });
        
        side.addEventListener('mouseleave', () => {
            side.classList.remove('active');
        });
    });
});
