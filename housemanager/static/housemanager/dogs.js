document.addEventListener('DOMContentLoaded', function() {

    let add_dog = document.querySelector("#add_dog")
    let dogs = document.querySelector("#dogs")
    let dog_but = document.querySelector("#dog_but")

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
        di.placeholder = "add dog";
        di.style.marginTop = "25px";
        di.classList.add("form-control")

        dog_form.appendChild(di)
        dogs.append(dog_form)

        dog_but.style.display = "block"

    }



})