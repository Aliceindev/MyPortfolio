const sound = new Audio('assets/img/Woosh-Effect-8.mp3');

// Corrigido o seletor para '.menu-link'
document.querySelectorAll('.menu-link').forEach(link => {
link.addEventListener('click', () => {
    sound.play();
});
});
