

document.addEventListener('DOMContentLoaded', function() {

let names = document.querySelector("#names")

let baby_name = document.querySelector("#baby_name")
let date = document.querySelector("#due_date")

let add_baby = document.querySelector("#submit_baby")

add_baby.onclick = function () {
    
    fetch('/baby', {
        method: 'POST',
        body: JSON.stringify({
            name:`${baby_name.value}`,
            date: `${date.value}`
            
        })
    })
    .then(response => response.json())
    .then(response => {
        alert(response)
        

    })
        
    let h5 = document.createElement("h5")
    h5.innerHTML = baby_name.value
    names.appendChild(h5)

    
    

}




})