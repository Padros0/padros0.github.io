// Rasgele şiirler dizisi
var poems = [
    "Gönlümde bir serap gibi,\nYanan bir aşk meydanı var.\nDilimde senin adın,\nDüşlerimde senin hayalin.",
    "Bir gül açar gönül bahçesinde,\nRuhumu aydınlatır yüzünün ışığı.\nSevginle dolar içimdeki kadeh,\nSensiz geçen her anım hüsran.",
    "Düşlerimde yankılanır nağmelerin,\nBir kuş gibi özgür, bir rüzgar gibi serbest.\nGözlerin gönlümde bir çiçek açar,\nSevdamın en güzel şarkısı sensin.",
    "Bir yağmur damlası gibi düşer,\nGönlümün karanlık vadilerine.\nSevginle yeşerir her bir tomurcuk,\nAşkınla aydınlanır her bir köşe.",
    "Bir masal anlatır rüyalarım,\nSonsuz bir umut, sonsuz bir aşkla.\nGözlerin yıldızlarla dolu,\nKalbim seninle dolu."
];

// Rasgele hikayeler dizisi
var stories = [
    "Bir zamanlar, uzak bir ülkede bir kral yaşardı. Kral, krallığını adil bir şekilde yönetiyor ve halkıyla iyi ilişkiler içindeydi. Ancak bir gün...",
    "Bir ormanın derinliklerinde, masalsı bir köy vardı. Bu köyde yaşayan insanlar, doğayla iç içe bir yaşam sürerlerdi. Ancak bir gün...",
    "Denizin kıyısında küçük bir balıkçı kasabası vardı. Kasaba halkı, denizden aldıklarıyla geçimlerini sağlarlardı. Ancak bir gün...",
    "Eski bir şatoda, gizemli bir prenses yaşardı. Prenses, kral ve kraliçenin tek çocuğuydu ve herkes onun güzelliği ve zarafeti hakkında konuşurdu. Ancak bir gün...",
    "Bir zamanlar, yıldızların ışıltısı altında büyülü bir orman vardı. Bu ormanda yaşayan hayvanlar, birbirleriyle barış içinde yaşarlar ve doğanın tadını çıkarırlardı. Ancak bir gün..."
];



// Başka bir dosyada yeni fonksiyonlar








function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Kullanıcının girdiği mesajı ekle
    var userMessage = document.createElement("p");
    userMessage.innerHTML = "<strong>Siz:</strong> " + userInput;
    chatBox.appendChild(userMessage);

    // Botun yanıtını üret
    var botMessage = document.createElement("p");
    botMessage.innerHTML = "<strong>Bot:</strong> " + getBotResponse(userInput.toLowerCase()); // Girdiyi küçük harfe çevir
    chatBox.appendChild(botMessage);

    // Otomatik olarak mesajları görünür tutmak için en alta kaydır
    chatBox.scrollTop = chatBox.scrollHeight;

    // Kullanıcı girdisini temizle
    document.getElementById("user-input").value = "";
}

function getBotResponse(userInput) {
    // Kullanıcının isteğini belirle
    if (userInput.includes("şiir yaz")) {
        // Şiir yazma isteği
        var randomPoem = poems[Math.floor(Math.random() * poems.length)];
        return "İşte size bir şiir:\n\n" + randomPoem;
    } else if (userInput.includes("hikaye yaz")) {
        // Hikaye yazma isteği
        var randomStory = stories[Math.floor(Math.random() * stories.length)];
        return "İşte size bir hikaye:\n\n" + randomStory;
    } else if (userInput.includes("basit bir Python kodu yaz")) {

          var simpleCode = 'print("Merhaba, Dünya!")';
        
        // Basit bir Python kodu yazma isteği
        return generateSimplePythonCode();
    } else {
        // Standart yanıt
        return getStandardResponse(userInput);
    }
}



function getStandardResponse(userInput) {
    // Soru ve buna göre yanıtlar
    var questionResponses = {
        "nasılsın": "Ben bir botum, bu yüzden duygularım yok, ama size nasıl yardımcı olabileceğimi sormak isterim.",
        "merhaba": "Merhaba! Ben PadrosAI size nasıl yardım edebilirim?",
        "ne yapıyorsun": "Sizinle konuşuyorum! Size nasıl yardımcı olabilirim?",
        "ne var ne yok": "Buradayım! Size nasıl yardımcı olabilirim?",
        "kaç yaşındasın": "Ben bir sohbet botuyum, yaşım yok!",
        "adın ne": "Ben bir sohbet botuyum, adım yok!",
        "hangi dilleri biliyorsun": "JavaScript, Python, Java, C++ gibi birçok programlama dilini biliyorum!",
        "hangi işletim sistemini kullanıyorsun": "Ben bir sohbet botuyum, bir işletim sistemim yok ama web tarayıcısında çalışıyorum!",
        "neler yapabilirsin": "Size birçok konuda yardımcı olabilirim! Örneğin, bilgi vermek, tavsiye vermek, eğlenceli şeyler yapmak ve daha fazlası."
        // Daha fazla soru ve yanıt ekleyebilirsiniz
    };

    // Anahtar kelimeler ve bunlara göre yanıtlar
    var keywordResponses = {
        "atatürk": "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin kurucusu ve ilk Cumhurbaşkanıdır.",
        "einstein": "Albert Einstein, modern fizik biliminin en önemli figürlerinden biridir ve ünlü E=mc^2 denklemiyle tanınır.",
        "mozart": "Wolfgang Amadeus Mozart, klasik müziğin en önemli bestecilerinden biridir ve 18. yüzyıl Avusturyalı bir müzisyendir.",
        "göbeklitepe": "Göbekli Tepe, dünyanın en eski tapınak kompleksidir ve Şanlıurfa ilinde bulunur.",
        "galileo": "Galileo Galilei, modern bilimin öncülerinden biri olarak kabul edilir ve teleskop kullanarak astronomiye önemli katkılarda bulunmuştur.",
        "homer": "Homeros, Antik Yunan edebiyatının en ünlü şairidir ve İlyada ile Odesa destanlarının yazarı olarak bilinir.",
        "marie curie": "Marie Curie, radyoaktiviteyi keşfeden ve iki farklı alanda Nobel Ödülü kazanan ilk kişidir: Fizik ve Kimya.",
        "cleopatra": "Kleopatra, Antik Mısır'ın son Hellenistik Kraliçesi olarak bilinir ve Jül Sezar ve Mark Antony ile olan ilişkileriyle tanınır.",
        "darwin": "Charles Darwin, evrim teorisinin öncüsü olarak kabul edilir ve doğal seçilim konusundaki çalışmalarıyla tanınır.",
        "shakespeare": "William Shakespeare, İngiliz edebiyatının en büyük yazarlarından biri olarak kabul edilir ve birçok klasik eseriyle ünlüdür.",
        "tesla": "Nikola Tesla, modern elektrik ve manyetizma biliminin öncülerinden biridir ve birçok önemli buluşa imza atmıştır.",
        "newton": "Sir Isaac Newton, klasik mekanik ve evrenin hareketi konusundaki çalışmalarıyla tanınır ve kütle çekimi kanununu formüle etmiştir.",
        "platon": "Platon, Antik Yunan filozofudur ve birçok felsefi eseriyle tanınır, özellikle de 'Devlet' adlı eseriyle.",
        "aristoteles": "Aristoteles, Antik Yunan filozofudur ve birçok alanda önemli katkılarda bulunmuştur, özellikle de mantık, fizik ve etik alanlarında.",
        "çin seddi": "Çin Seddi, Çin'in kuzey sınırlarını korumak amacıyla inşa edilmiş devasa bir yapıdır ve dünyanın en büyük insan yapısıdır.",
        "leonardo da vinci": "Leonardo da Vinci, Rönesans döneminin önde gelen figürlerindendir ve birçok alanda dahiyane katkılarda bulunmuştur, özellikle de resim, mühendislik ve anatomi alanlarında.",
        "marilyn monroe": "Marilyn Monroe, Amerikalı bir aktris, model ve şarkıcıdır ve 20. yüzyılın en tanınmış simalarından biridir.",
        "steve jobs": "Steve Jobs, Apple'ın kurucularından biridir ve Apple'ın yenilikçi ürünleri ve liderliği ile tanınır.",
        "beethoven": "Ludwig van Beethoven, klasik müziğin en önemli bestecilerinden biridir ve 9. Senfoni'siyle tanınır.",
        "vangogh": "Vincent van Gogh, post-empresyonist bir ressamdır ve renkli ve duygusal tablolarıyla tanınır.",
        "maradona": "Diego Maradona, Arjantinli bir futbol efsanesidir ve futbol tarihinde unutulmaz performanslar sergilemiştir.",
        "nelson mandela": "Nelson Mandela, Güney Afrika'nın eski devlet başkanıdır ve ırk ayrımcılığına karşı mücadelesiyle tanınır.",
        "hitchcock": "Alfred Hitchcock, sinema tarihinin en etkili yönetmenlerinden biridir ve birçok unutulmaz gerilim filmiyle tanınır.",
        "dali": "Salvador Dali, sürrealist ressamdır ve onun eserleri rüya gibi fantastik ve soyut imgelerle doludur.",
        "picasso": "Pablo Picasso, 20. yüzyılın en önemli sanatçılarından biridir ve modern sanatın öncülerindendir.",
        "churchill": "Winston Churchill, İngiltere'nin II. Dünya Savaşı sırasındaki başbakanıdır ve liderliğiyle tanınır.",
        "gandhi": "Mahatma Gandhi, Hindistan'ın bağımsızlık mücadelesinde önemli bir liderdir ve barışçıl direnişiyle tanınır.",
        "dostoyevski": "Fyodor Dostoyevski, Rus edebiyatının en büyük yazarlarından biridir ve 'Suç ve Ceza', 'Karamazov Kardeşler' gibi önemli eserlere imza atmıştır.",
        "tolstoy": "Lev Tolstoy, Rus edebiyatının en önemli yazarlarından biridir ve 'Savaş ve Barış', 'Anna Karenina' gibi klasik eserlerin yazarıdır.",
        "hemingway": "Ernest Hemingway, Amerikalı bir yazardır ve sade bir üslubu ile tanınır, 'Fareler ve İnsanlar', 'Çanlar Kimin İçin Çalıyor' gibi eserleriyle ünlüdür.",
        "orwell": "George Orwell, İngiliz yazardır ve distopik romanı '1984' ile tanınır, ayrıca 'Hayvan Çiftliği' adlı eseriyle de ün kazanmıştır.",
        "chaplin": "Charlie Chaplin, sessiz filmlerin en ünlü yıldızıdır ve karakteri",
        "bach": "Johann Sebastian Bach, Batı müziğinin en önemli bestecilerinden biridir ve birçok klasik eseriyle tanınır.",
        "caesar": "Jül Sezar, Roma İmparatorluğu'nun en önemli liderlerinden biridir ve onun hayatı ve ölümü hakkında birçok efsane vardır."
        // Daha fazla anahtar kelime ve yanıt ekleyebilirsiniz
    };

    // Soruları kontrol et ve uygun yanıtı al
    for (var question in questionResponses) {
        if (userInput.includes(question.toLowerCase())) { // Soruyu küçük harfe çevirerek kontrol et
            return questionResponses[question];
        }
    }

    // Anahtar kelimeleri kontrol et ve uygun yanıtı al
    for (var keyword in keywordResponses) {
        if (userInput.includes(keyword.toLowerCase())) { // Anahtar kelimeyi küçük harfe çevirerek kontrol et
            return keywordResponses[keyword];
        }
    }

    // Eğer ne bir soru ne de anahtar kelime bulunamazsa
    return "Üzgünüm, ne dediğinizi anlamadım. Başka bir şey denemek ister misiniz?";
}
