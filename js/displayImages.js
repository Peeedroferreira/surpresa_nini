function displayImages() {
    const imageContainer = document.getElementById('imageContainer');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    if (yesButton) yesButton.style.display = 'none';
    if (noButton) noButton.style.display = 'none';

    if (imageContainer) {
        imageContainer.innerHTML = '';
        imageContainer.style.display = 'block';

        const images = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg',
        'imagem4.jpg', 'imagem5.jpg'];
        let currentImageIndex = 0;

        const img = document.createElement('img');
        img.src = `images/${images[currentImageIndex]}`;
        img.style.width = '100%';
        img.style.maxHeight = '500px';
        img.style.objectFit = 'contain';
        imageContainer.appendChild(img);

        function nextImage() {
            currentImageIndex++;
            if (currentImageIndex < images.length) {
                img.src = `images/${images[currentImageIndex]}`;
            } else {
                currentImageIndex = 0;
                img.src = `images/${images[currentImageIndex]}`;
            }
            
        }
        nextImage();
        setInterval(nextImage, 5000);
    }
}