document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const gameBoard = document.getElementById('game-board');

    let playerTop = 0;
    let playerLeft = 0;

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        movePlayer(key);
    });

    function movePlayer(key) {
        const stepSize = 50;
        const boardWidth = gameBoard.offsetWidth;
        const boardHeight = gameBoard.offsetHeight;

        if (key === 'ArrowUp' && playerTop > 0) {
            playerTop -= stepSize;
        } else if (key === 'ArrowDown' && playerTop < (boardHeight - stepSize)) {
            playerTop += stepSize;
        } else if (key === 'ArrowLeft' && playerLeft > 0) {
            playerLeft -= stepSize;
        } else if (key === 'ArrowRight' && playerLeft < (boardWidth - stepSize)) {
            playerLeft += stepSize;
        }

        player.style.top = playerTop + 'px';
        player.style.left = playerLeft + 'px';
    }
});
