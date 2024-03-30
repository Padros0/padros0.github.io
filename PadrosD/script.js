function search() {
  var searchInput = document.getElementById("searchInput").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
    .then(response => response.json())
    .then(data => {
      if (data.title === "No Definitions Found") {
        document.getElementById("result").innerHTML = "<p>Bu kelimenin anlamı bulunamadı.</p>";
      } else {
        var meaning = data[0].meanings[0].definitions[0].definition;
        var example = data[0].meanings[0].definitions[0].example || "Örnek cümle bulunamadı.";
        document.getElementById("result").innerHTML = `
                <h2>${searchInput}</h2>
                <p>Anlamı: ${meaning}</p>
                <p>Örnek bir cümle: ${example}</p>
            `;
      }
    })
    .catch(error => console.log("Hata oluştu: ", error));
}
