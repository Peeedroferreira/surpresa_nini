export function handleNoButton() {
    const noButton = document.getElementById('noButton');
    let hoverCount = 0;
    let isActivated = false;

    if (noButton) {
        noButton.addEventListener('click', function() {
            isActivated = true;
        });

        noButton.addEventListener('mouseenter', function() {
            if (!isActivated) return;

            const x = Math.random() * (window.innerWidth - this.offsetWidth);
            const y = Math.random() * (window.innerHeight - this.offsetHeight);
            this.style.left = x + 'px';
            this.style.top = y + 'px';
            this.style.position = 'absolute';

            hoverCount++;

            if (hoverCount === 1) {
                alert('Pensou que ia ser fácil se livrar de mim?');
            }
        });
    }
}