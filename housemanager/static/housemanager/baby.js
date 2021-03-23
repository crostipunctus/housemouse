//countdown implementation learned from W3 schools
function countdown (due_date) {

    let countdowndate = new Date(`${due_date}`).getTime();

    
    let x = setInterval(function() {

      let now = new Date().getTime();
    
     
      let remaining_time = countdowndate - now;
    

      let days = Math.floor(remaining_time / (1000 * 60 * 60 * 24));
      let hours = Math.floor((remaining_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((remaining_time % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((remaining_time % (1000 * 60)) / 1000);
    
   
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
   
      if (remaining_time < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "IT'S HERE!!!";
      }
    }, 1000);

    }




document.addEventListener('DOMContentLoaded', function() {


    let note = document.querySelector("#note")

    let user = document.querySelector("#user")

    console.log(user)
    
    let note_submit = document.querySelector("#note-but")

    let count_div = document.querySelector("#count-div")

    count_div.style.display = "none"


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

    let s = document.querySelector("#submit_baby")
    let f = document.querySelector("#baby_form")

    s.onclick = function () {
        f.style.display = "none"

    }

    
   




})