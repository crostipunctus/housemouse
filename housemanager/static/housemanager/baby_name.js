document.addEventListener('DOMContentLoaded', function() {


    let note = document.querySelector("#note")

    let user = document.querySelector("#user")

    console.log(user)
    
    let note_submit = document.querySelector("#note-but")


    console.log(note_submit)

    note_submit.disabled = true;

    note.onclick = function () {
        note_submit.disabled = false;
    }

    note_submit.onclick = function () {
       
        if (note.value === "")
        {
            alert("New note cannot be blank!")
        }
        else{
        fetch('/note_add', {
            method: 'POST',
            body: JSON.stringify({
                note:`${note.value}`,
                
            })
        })
        .then(response => response.text())
        .then(response => console.log(response))

        let notes = document.querySelector("#baby-notes")
        console.log(notes)

        let new_note = document.createElement("li")
        let h5 = document.createElement("h5")

        h5.innerHTML = `${note.value} by ${user.innerHTML}`

        new_note.appendChild(h5)
        notes.appendChild(new_note)

        note.value = "";
        note_submit.disabled = true;
    }
    }

    
   




})