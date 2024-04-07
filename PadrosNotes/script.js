document.addEventListener("DOMContentLoaded", function() {
    const noteForm = document.getElementById("noteForm");
    const noteList = document.getElementById("noteList");

    noteForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const noteTitle = document.getElementById("noteTitle").value;
        const noteContent = document.getElementById("noteContent").value;

        if (noteTitle.trim() !== "" && noteContent.trim() !== "") {
            const noteId = Date.now().toString(); // Benzersiz bir kimlik oluştur
            const note = {
                id: noteId,
                title: noteTitle,
                content: noteContent
            };

            addNoteToList(note);
            saveNoteToLocalstorage(note);

            // Notun URL'sini al ve paylaş butonu oluştur
            const noteURL = window.location.href + "?note=" + noteId;
            createShareButton(noteURL);

            noteForm.reset();
        } else {
            alert("Başlık ve içerik alanları boş olamaz.");
        }
    });

    function addNoteToList(note) {
        const noteItem = document.createElement("div");
        noteItem.classList.add("note-item");
        noteItem.innerHTML = `
            <h3>${note.title}</h3>
            <p>${formatText(note.content)}</p>
        `;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function() {
            deleteNoteFromLocalstorage(note);
            noteItem.remove();
        });

        noteItem.appendChild(deleteButton);

        noteList.appendChild(noteItem);
    }

    function saveNoteToLocalstorage(note) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    function loadNotesFromLocalstorage() {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.forEach(note => addNoteToList(note));
    }

    loadNotesFromLocalstorage();

    function formatText(content) {
        // Kalın metin işareti: **kalın metin**
        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // İtalik metin işareti: _italik metin_
        content = content.replace(/_(.*?)_/g, '<em>$1</em>');
        return content;
    }

    function createShareButton(url) {
        const shareButton = document.createElement("button");
        shareButton.textContent = "Notu Paylaş";
        shareButton.classList.add("share-btn");
        shareButton.addEventListener("click", function() {
            // Notun URL'sini kopyala
            navigator.clipboard.writeText(url)
                .then(() => {
                    alert("Notun URL'si panoya kopyalandı. Şimdi istediğiniz yere yapıştırabilirsiniz.");
                })
                .catch(err => {
                    console.error("Panoya kopyalama hatası:", err);
                    alert("Notun URL'sini kopyalama başarısız. Lütfen manuel olarak kopyalayın.");
                });
        });

        noteList.appendChild(shareButton);
    }

    function deleteNoteFromLocalstorage(note) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes = notes.filter(n => n.id !== note.id);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
});
