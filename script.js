document.addEventListener('DOMContentLoaded', () => {
    // Subtle mouse tracking for the background glow
    const glow = document.querySelector('.glass-bg');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        glow.style.left = `${x - 150}px`;
        glow.style.top = `${y - 150}px`;
    });
});
