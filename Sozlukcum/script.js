const words = ["Kuş","Kapı","Gökyüzü","Masa","Ayna","Toprak","Kalem","Bulut","Kedi","Kitap","Deniz","Sandalye","Güneş","Araba","Pencere","Köpek","Yıldız","Ayakkabı","Ev","Çiçek","Köprü","Kaplan","Kırmızı","Ağaç","Kartal","Televizyon","Uçak","Yılan","Bisiklet","Kumsal","Fare","Anahtar","Şemsiye","Dolap","Çatal","Çanta","Yelken","Çaydanlık","Gemi", ];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = [];
let remainingAttempts = 5;

const wordContainer = document.getElementById("word-container");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-btn");
const hangman = document.getElementById("hangman");
const message = document.getElementById("message");
const playAgainButton = document.getElementById("play-again-btn");

function displayWord() {
    wordContainer.textContent = guessedWord.join(" ");
}

function checkGuess(letter) {
    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        displayWord();
        if (!guessedWord.includes("_")) {
            message.textContent = "Tebrikler! Kelimeyi doğru tahmin ettiniz!";
            guessInput.disabled = true;
        }
    } else {
        remainingAttempts--;
        updateHangman();
        if (remainingAttempts === 0) {
            message.textContent = "Üzgünüm, hakkınız bitti. Doğru kelime: " + selectedWord;
            guessInput.disabled = true;
        }
    }
}

function updateHangman() {
    hangman.textContent = "Kalan Hak: " + remainingAttempts;
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(selectedWord.length).fill("_");
    remainingAttempts = 5;
    displayWord();
    updateHangman();
    guessInput.disabled = false;
    message.textContent = "";
}

guessButton.addEventListener("click", function() {
    const guess = guessInput.value.toUpperCase();
    if (guess.match(/[A-Z]/) && guess.length === 1) {
        if (!guessedWord.includes(guess)) {
            checkGuess(guess);
        }
    }
    guessInput.value = "";
});

playAgainButton.addEventListener("click", resetGame);

window.addEventListener("load", resetGame);