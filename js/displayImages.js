function displayImages() {
    const imageContainer = document.getElementById('imageContainer');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    if (yesButton) yesButton.style.display = 'none';
    if (noButton) noButton.style.display = 'none';

    if (imageContainer) {
        imageContainer.innerHTML = '';
        imageContainer.style.display = 'block';

        const images = [
            'fotos (1).jpg', 'fotos (2).jpg', 'fotos (3).jpg', 'fotos (4).jpg', 'fotos (5).jpg', 
            'fotos (6).jpg', 'fotos (7).jpg', 'fotos (8).jpg', 'fotos (9).jpg', 'fotos (10).jpg', 
            'fotos (11).jpg', 'fotos (12).jpg', 'fotos (13).jpg', 'fotos (14).jpg', 'fotos (15).jpg', 
            'fotos (16).jpg', 'fotos (17).jpg', 'fotos (18).jpg', 'fotos (19).jpg', 'fotos (20).jpg', 
            'fotos (21).jpg', 'fotos (22).jpg', 'fotos (23).jpg', 'fotos (24).jpg', 'fotos (25).jpg', 
            'fotos (26).jpg', 'fotos (27).jpg', 'fotos (28).jpg', 'fotos (29).jpg', 'fotos (30).jpg', 
            'fotos (31).jpg', 'fotos (32).jpg', 'fotos (33).jpg', 'fotos (34).jpg', 'fotos (35).jpg',
            'fotos (36).jpg', 'fotos (37).jpg'
        ];
    
        function getRandomImageIndex() {
            return Math.floor(Math.random() * images.length);
        }

        let currentImageIndex = getRandomImageIndex();

        const img = document.createElement('img');
        img.src = `images/${images[currentImageIndex]}`;
        img.style.width = '100%';
        img.style.maxHeight = '500px';
        img.style.objectFit = 'contain';
        img.style.transition = 'opacity 1s ease-in-out';
        img.style.opacity = 0;
        imageContainer.appendChild(img);

    function nextImage() {
        img.style.opacity = 0;
        setTimeout(() => {
            currentImageIndex = getRandomImageIndex();
            img.src = `images/${images[currentImageIndex]}`;
            img.style.opacity = 1;
        }, 1000);
    }

    nextImage();
    setInterval(nextImage, 5000);
    }
}
