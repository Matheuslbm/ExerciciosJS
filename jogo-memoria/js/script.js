document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');

    const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍍', '🥭'];
    const cards = [...symbols, ...symbols]; //duplicar os simbolos para criar pares

    // Embaralhar as cartas
    cards.sort(() => Math.random() - 0.5);

    // Criar as cartas no tabuleiro
    cards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = symbol;
        gameBoard.appendChild(card)
    })
})