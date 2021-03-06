document.addEventListener('DOMContentLoaded', function() {

    let add_dog = document.querySelector("#add_dog")
    let dogs = document.querySelector("#dogs")
    let dog_but = document.querySelector("#dog_but")
    let dog_list = document.querySelector("#dog_list")

    dog_but.style.display = "none"

    add_dog.onclick = function() {

        add_dog.style.display = "none";
        
        let dog_form = document.createElement("form")
        dog_form.setAttribute('method',"post");
        dog_form.id = "dog-form";

        let di = document.createElement("input")
        di.type = "text"
        di.name = "new-dog";
        di.id = "new-dog";
        di.placeholder = "Dog name";
        di.style.marginTop = "25px";
        di.classList.add("form-control")

        let bday = document.createElement("input")
        bday.type = "date"
        bday.name = "birthday"
        bday.id = "birthday"
        bday.placeholder = "Birthday"
        bday.style.marginTop = "25px"
        bday.classList.add("form-control")

        let weight = document.createElement("input")
        weight.type = "number"
        weight.name = "weight"
        weight.id = "weight"
        weight.placeholder = "Dog weight"
        weight.style.marginTop = "25px"
        weight.classList.add("form-control")

        dog_form.appendChild(di)
        dog_form.appendChild(weight) 
        dog_form.appendChild(bday)
        dog_list.append(dog_form)

        dog_but.style.display = "block"

        dog_but.onclick = function () {

            fetch('/add-dog', {
                method: 'POST', 
                body: JSON.stringify({
                  dog_name: `${di.value}`,
                  dog_date: `${bday.value}`,
                  dog_weight: `${weight.value}`
                })
                
              })
              .then(response => response.text())

        let new_dog = document.createElement("h5")
        new_dog.innerHTML = di.value
        dog_form.style.display = "none"
        dog_list.appendChild(new_dog)    



        }

    }



})