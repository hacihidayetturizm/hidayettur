document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    let x = 0;
    let y = 0;

    function animateBackground() {
        x += 1;
        y += 1;
        body.style.backgroundPosition = `${x}px ${y}px`;
        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});
