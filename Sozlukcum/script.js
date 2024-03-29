// Kelime listesi
var words = ["elma", "armut", "kiraz", "portakal", "muz", "çilek", "karpuz", "üzüm", "erik", "mandalina", 
            "şeftali", "kavun", "vişne", "nar", "limon", "ananas", "ayva", "şam", "kuşburnu", "dut", 
            "böğürtlen", "kiraz", "mango", "zeytin", "kivi", "keçiboynuzu", "biber", "patlıcan", 
            "domates", "salatalık", "kabak", "fasulye", "patates", "soğan", "sarımsak", "havuç", 
            "pırasa", "ıspanak", "marul", "lahana", "roka", "maydanoz", "dereotu", "taze soğan", 
            "taze fasulye", "kereviz", "kabak", "kırmızı lahana", "karnabahar", "brokoli", "mısır", 
            "bamya", "tavuk", "dana", "kuzu", "balık", "hamsi", "levrek", "çipura", "somon", "uskumru", 
            "istavrit", "sardalya", "mangal", "piknik", "kamp", "doğa", "orman", "dağ", "deniz", "plaj", 
            "göl", "nehir", "şelale", "mağara", "kayalık"];

// Oyunu başlat
resetGame();

// Puan
var score = 0;

// Tahmin edilen kelimeyi kontrol etme
function checkGuess() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value.toLowerCase(); // Küçük harfe çevir

    if (guess === selectedWord) {
        displayMessage("Tebrikler! Doğru kelimeyi buldunuz: " + selectedWord);
        score++; // Doğru tahmin için +1 puan
        displayScore();
        setTimeout(resetGame, 2000); // 2 saniye sonra oyunu tekrar başlat
    } else {
        remainingAttempts--;
        score--; // Yanlış tahmin için -1 puan
        displayScore();
        if (remainingAttempts === 0) {
            displayMessage("Üzgünüm, tüm canlarınızı kullandınız. Doğru kelime: " + selectedWord);
            setTimeout(resetGame, 2000); // 2 saniye sonra oyunu tekrar başlat
        } else {
            var hint = getHint(selectedWord);
            displayMessage("Maalesef, yanlış tahmin. Kalan can: " + remainingAttempts + "<br> İpucu: " + hint);
        }
    }
}

// Rastgele bir ipucu al
function getHint(word) {
    var randomIndex = Math.floor(Math.random() * word.length);
    return "Kelimenin " + (randomIndex + 1) + ". harfi: " + word[randomIndex];
}

// Mesajı görüntüleme
function displayMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.innerHTML = message;
}

// Puanı görüntüleme
function displayScore() {
    var scoreElement = document.getElementById("score");
    scoreElement.innerHTML = "Puan: " + score;
}

// Oyunu sıfırlama
function resetGame() {
    remainingAttempts = 5;
    randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
    displayMessage("");
    displayScore();
    document.getElementById("guessInput").value = "";
}
