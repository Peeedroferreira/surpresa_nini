import { handleNoButton } from './noButton.js';

document.addEventListener('DOMContentLoaded', function() {
    handleNoButton();


    const yesButton = document.getElementById('yesButton');
    let clickCount = 0;

    if (yesButton) { 
        yesButton.addEventListener('click', function(e) {
            clickCount++;
            if(clickCount === 1) {
                //Primeira Tentativa
                alert('Certeza mesmo? Não quer pensar mais um pouquinho? 😏');
                e.preventDefault();

            } else if(clickCount === 2) {
                //Segunda Tentativa
                alert('Talvez você devesse clicar em "Não", só para ver o que acontece! 😏');
                e.preventDefault();
            } else if(clickCount === 3) {
                //Terceira Tentativa
                alert('Bom já percebi que vai clicar em sim. Então preciso Alguns detalhes sobre nos: 😏');
                e.preventDefault();
            }else {
                const imagesContainer = document.getElementById('imagesContainer');
                imagesContainer.style.display = 'block';
                const images = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg', 'imagem4.jpg', 'imagem5.jpg', 'imagem6.jpg', 'imagem7.jpg', 'imagem8.jpg', 'imagem9.jpg', 'imagem10.jpg'];
                images.forEach(image => {
                    const img = document.createElement('img');
                    img.src = 'image/${image}';
                    img.style.width = '100%';
                    img.style.marginTop = '20px';
                    imageContainer.appendChild(img);
                });
            }
        });
    }
});