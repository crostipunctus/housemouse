
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

    let name = document.querySelector("#name")



    let note = document.querySelector("#note")

    let user = document.querySelector("#user")

 
    let note_submit = document.querySelector("#note-but")


 

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
      

        let new_note = document.createElement("li")
        let h5 = document.createElement("h5")
        let remove_note = document.createElement("button")
        remove_note.classList.add("btn")
        remove_note.classList.add("btn-danger")
        remove_note.id = "remove-note"
        remove_note.innerHTML = "Remove note"


        h5.innerHTML = `${note.value} by ${user.innerHTML}`

        new_note.appendChild(h5)
        new_note.append(remove_note)
        notes.appendChild(new_note)

        note.value = "";
        note_submit.disabled = true;
    }
    }

    fetch(`/baby_name/${name.innerHTML}`, {
        method: 'POST',
        body: JSON.stringify({
            name: `${name.innerHTML}`
            
        })
    })
    .then(response => response.json())
    .then(response => {

    countdown(response)


    })
    
    
   


})
