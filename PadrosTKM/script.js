document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('.choice');
    const result = document.getElementById('result');
    const scoreText = document.getElementById('scoreText');
    const timeText = document.getElementById('timeText');
    const timer = document.getElementById('timer');
    const difficultySelect = document.getElementById('difficulty');

    let score = 0;
    let time = 60; // Başlangıçta 60 saniye olarak ayarladım.

    let gameInterval;

    choices.forEach(choice => {
        choice.addEventListener('click', () => playGame(choice.id));
    });

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        showResult(winner, computerChoice);
        updateScore(winner);
    }

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function getWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'draw';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'player';
        } else {
            return 'computer';
        }
    }

    function showResult(winner, computerChoice) {
        let resultText = '';
        if (winner === 'player') {
            resultText = `Siz kazandınız! Bilgisayar ${getEmoji(computerChoice)} seçti.`;
        } else if (winner === 'computer') {
            resultText = `Bilgisayar kazandı! Bilgisayar ${getEmoji(computerChoice)} seçti.`;
        } else {
            resultText = `Berabere! Bilgisayar da ${getEmoji(computerChoice)} seçti.`;
        }
        result.innerHTML = `<h2>${resultText}</h2>`;
    }

    function updateScore(winner) {
        if (winner === 'player') {
            score++;
        } else if (winner === 'computer') {
            score--;
        }
        scoreText.textContent = score;
    }

    function getEmoji(choice) {
        if (choice === 'rock') {
            return '🪨';
        } else if (choice === 'paper') {
            return '📄';
        } else {
            return '✂️';
        }
    }

    function startTimer() {
        time = 60; // Her oyun başladığında süreyi sıfırla
        timeText.textContent = time;
        gameInterval = setInterval(() => {
            time--;
            timeText.textContent = time;
            if (time <= 0) {
                clearInterval(gameInterval);
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        result.innerHTML = "<h2>Oyun Bitti!</h2>";
        if (score > 0) {
            result.innerHTML += "<p>Kazandınız!</p>";
        } else if (score < 0) {
            result.innerHTML += "<p>Kaybettiniz!</p>";
        } else {
            result.innerHTML += "<p>Berabere!</p>";
        }
        const playAgain = confirm("Oyunu tekrar oynamak ister misiniz?");
        if (playAgain) {
            resetGame();
        }
    }

    function resetGame() {
        score = 0;
        scoreText.textContent = score;
        result.innerHTML = "";
        startTimer();
    }

    // Zorluk seviyesine göre oyunu ayarla
    difficultySelect.addEventListener('change', function() {
        const difficulty = this.value;
        clearInterval(gameInterval);
        if (difficulty === 'easy') {
            time = 90; // Kolay seviye için 90 saniye
        } else if (difficulty === 'medium') {
            time = 60; // Orta seviye için 60 saniye
        } else if (difficulty === 'hard') {
            time = 45; // Zor seviye için 45 saniye
        }
        startTimer();
    });

    // Oyunu başlat
    startTimer();
});
