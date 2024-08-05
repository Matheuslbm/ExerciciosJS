document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const resultado = document.querySelector('.result')

    const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍍', '🥭'];
    const cards = [...symbols, ...symbols]; //duplicar os simbolos para criar pares

    // Embaralhar as cartas
    cards.sort(() => Math.random() - 0.5);

    let revealedCards = [];
    let matchedPairs = 0;

    // Criar as cartas no tabuleiro
    cards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card', 'hidden'); // adiciona a classe hidden para esconder e card
        card.dataset.symbol = symbol; // guardar o simbolo como um atributo data
        gameBoard.appendChild(card);

        card.addEventListener('click', () => {
            // revelar a carta
            if(revealedCards.length < 2 && !card.classList.contains('revealed')) {
                card.classList.remove('hidden');
                card.classList.add('revealed');
                card.textContent = symbol;

                // add carta ao array de cartas reveladas
                revealedCards.push(card);

                //verifica se ha duas cartas reveladas
                if (revealedCards.length === 2) {
                    checkForMatch();
                }
            }
        })
    })

    function checkForMatch() {
        const [card1, card2] = revealedCards

        // verificar se as duas cartas tem o mesmo simbolo
        if(card1.dataset.symbol === card2.dataset.symbol) {
            matchedPairs++;
            revealedCards = [];
        } else {
            // se as cartas n forem iguais, esconde-las de novo!
            setTimeout(() => {
                card1.classList.remove('revealed');
                card1.classList.add('hidden');
                card1.textContent = '';

                card2.classList.remove('revealed');
                card2.classList.add('hidden');
                card2.textContent = '';

                revealedCards = [];
            }, 1000);
        }

                // verificar se todas as cartas foram combinadas
        if(matchedPairs === symbols.length) {
            setTimeout(() => {
            alert('Conseguiu!')
            resultado.innerHTML = 'Parabéns! você encontrou todos os pares! (: '
            }, 500);
        }
    }
});