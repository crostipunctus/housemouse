document.addEventListener('DOMContentLoaded', function() {

    let add_dog = document.querySelector("#add_dog")
    let dogs = document.querySelector("#dogs")
    let dog_but = document.querySelector("#dog_but")
    let dog_list = document.querySelector("#dog_list")

    dog_but.style.display = "none"

    add_dog.onclick = function() {

        add_dog.style.display = "none";
        
        let new_div = document.createElement("div")
        new_div.style.width = "95%";
        new_div.style.paddingRight = "25px"
        new_div.style.paddingLeft = "25px"

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

        let v_type = document.createElement("input")
        v_type.type = "text";
        v_type.id = "v_type";
        v_type.placeholder = "Vaccine type"
        v_type.style.marginTop = "25px"
        v_type.classList.add("form-control")

        v_lastdate = document.createElement("input")
        v_lastdate.type = "date";
        v_lastdate.id = "v_lastdate";
        v_lastdate.placeholder = "Last vaccine date"
        v_lastdate.style.marginTop = "25px"
        v_lastdate.classList.add("form-control")

        v_due = document.createElement("input")
        v_due.type = "date";
        v_due.id = "v_duedate";
        v_due.placeholder = "Vaccine due date"
        v_due.style.marginTop = "25px"
        v_due.classList.add("form-control")



        dog_form.appendChild(di)
        dog_form.appendChild(weight) 
        dog_form.appendChild(bday)
        dog_form.appendChild(v_type)
        dog_form.appendChild(v_lastdate)
        dog_form.appendChild(v_due)
        new_div.appendChild(dog_form)
        dog_list.append(new_div)

        dog_but.style.display = "block"

        dog_but.onclick = function () {

            fetch('/add_dog', {
                method: 'POST', 
                body: JSON.stringify({
                  dog_name: `${di.value}`,
                  dog_date: `${bday.value}`,
                  dog_weight: `${weight.value}`,
                  v_type: `${v_type.value}`,
                  v_lastdate: `${v_lastdate.value}`,
                  v_due: `${v_due.value}`
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