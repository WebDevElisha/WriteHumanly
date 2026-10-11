document.addEventListener('DOMContentLoaded', () => {
    const interactiveButtons = document.querySelectorAll('.btn');
    interactiveButtons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.97)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
