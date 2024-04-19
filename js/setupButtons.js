document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    let hoverCount = 0; // Adiciona um contador

    // Função para mover o botão
    function moveButton(button) {
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.left = Math.max(0, Math.min(x, window.innerWidth - button.offsetWidth)) + 'px';
        button.style.top = Math.max(0, Math.min(y, window.innerHeight - button.offsetHeight)) + 'px';
        button.style.position = 'absolute';
    }

    // Função para calcular a distância entre dois pontos
    function getDistance(x1, y1, x2, y2) {
        const xDist = x2 - x1;
        const yDist = y2 - y1;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    if (noButton) {
        document.addEventListener('mousemove', function(e) {
            const buttonRect = noButton.getBoundingClientRect();
            const buttonX = buttonRect.left + buttonRect.width / 2;
            const buttonY = buttonRect.top + buttonRect.height / 2;

            const distance = getDistance(e.clientX, e.clientY, buttonX, buttonY);

            // Se a distância for menor que 100, move o botão
            if (distance < 100) {
                moveButton(noButton);
                hoverCount++; // Incrementa o contador a cada vez que o mouse se aproxima do botão

                // Se o contador atingir 1, exibe a mensagem
                if (hoverCount === 1) {
                    alert('Pensou que ia ser fácil se livrar de mim?');
                }
            }
        });
    }

    const yesButton = document.getElementById('yesButton');
    let clickCount = 0;

    if (yesButton) {
        yesButton.addEventListener('click', function(e) {
            clickCount++;
            if (clickCount === 1) {
                alert('Certeza mesmo? Não quer pensar mais um pouquinho? 😏');
                e.preventDefault();
            } else if (clickCount === 2) {
                alert('Talvez você devesse clicar em "Não", só para ver o que acontece! 😏');
                e.preventDefault();
            } else if (clickCount === 3) {
                alert('Bom, já percebi que vai clicar em sim. Então, preciso de alguns detalhes sobre nós: 😏');
                e.preventDefault();
            } else {
                // Remove a pergunta e o parágrafo
                document.querySelector('.primeiro-parágrafo').remove();
                document.getElementById('casamentoPergunta').remove();
                
                // Adiciona a mensagem de agradecimento
                const agradecimentoMsg = document.createElement('h2');
                agradecimentoMsg.textContent = 'Obrigado por aceitar ser meu par ❤️';
                document.body.insertBefore(agradecimentoMsg, document.getElementById('imageContainer'));
                
                // Exibe as imagens
                displayImages(); // Esta chamada assume que displayImages está definida para adicionar imagens ao DOM
            }
        });
    }
});